import { NextRequest, NextResponse } from "next/server";
import initSqlJs, { type Database } from "sql.js";
import path from "path";
import fs from "fs";

const DATA_DIR = process.env.DATA_DIR || "/data";
const DB_PATH = path.join(DATA_DIR, "app.db");

let db: Database | null = null;

async function getDb(): Promise<Database> {
  if (db) return db;

  fs.mkdirSync(DATA_DIR, { recursive: true });

  const wasmPath = path.join(
    process.cwd(),
    "node_modules",
    "sql.js",
    "dist",
    "sql-wasm.wasm"
  );

  const SQL = await initSqlJs({
    locateFile: () => wasmPath,
  });

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ts TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT
    )
  `);

  const data = db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));

  return db;
}

function saveDb(database: Database) {
  const data = database.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid payload" },
      { status: 400 }
    );
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json(
      { ok: false, error: "invalid payload" },
      { status: 400 }
    );
  }

  const name = String(payload.name || "").trim().slice(0, 200);
  const email = String(payload.email || "").trim().slice(0, 200);
  const message = String(payload.message || "").trim().slice(0, 4000);

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "name and a valid email are required" },
      { status: 400 }
    );
  }

  const conn = await getDb();
  conn.run(
    `INSERT INTO leads (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message]
  );
  saveDb(conn);

  return NextResponse.json({ ok: true });
}
