# ---- Stage 1: Build ----
FROM node:22.14.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json & lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build project
RUN npm run build


# ---- Stage 2: Production ----
FROM node:22.14.0-slim AS production

# Set working directory
WORKDIR /app

# Copy hanya file penting dari hasil build
COPY --from=builder /app/.output ./.output
COPY package*.json ./

# Install dependencies production-only
RUN npm install --omit=dev

# Expose port
EXPOSE 3000

# Jalankan Nuxt
CMD ["node", ".output/server/index.mjs"]
