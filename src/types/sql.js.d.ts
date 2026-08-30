declare module "sql.js" {
  interface SqlJsStatic {
    Database: new (
      data?: ArrayLike<number> | Buffer | null
    ) => Database;
  }

  interface Database {
    run(sql: string, params?: unknown[]): void;
    exec(sql: string): QueryExecResult[];
    export(): Uint8Array;
    close(): void;
  }

  interface QueryExecResult {
    columns: string[];
    values: unknown[][];
  }

  export default function initSqlJs(
    config?: Record<string, unknown>
  ): Promise<SqlJsStatic>;
  export { Database, SqlJsStatic, QueryExecResult };
}
