# see.io site contract: Next.js on :8080, state ONLY under /data
FROM node:20-alpine AS base

# --- dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# --- build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- production ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone build output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Ensure sql.js WASM file is available for the API route
RUN mkdir -p node_modules/sql.js/dist && \
    cp /app/node_modules/sql.js/dist/sql-wasm.wasm node_modules/sql.js/dist/ 2>/dev/null || true

# Copy sql.js dist from builder (standalone may not include it)
COPY --from=builder /app/node_modules/sql.js/dist/sql-wasm.wasm ./node_modules/sql.js/dist/sql-wasm.wasm

# Ensure /data directory exists for the SQLite volume
RUN mkdir -p /data && chown nextjs:nodejs /data

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
