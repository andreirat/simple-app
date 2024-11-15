FROM oven/bun AS build

WORKDIR /app

# Cache packages installation
COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

COPY ./src ./src

# Set environment variables for the build stage
ENV PORT=3000
ENV ENVIRONMENT=production
ENV DATABASE_URL=""

RUN bun build \
	--compile \
	--minify-whitespace \
	--minify-syntax \
	--target bun \
	--outfile server \
	./src/index.ts

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/server server

# Set environment variables for the runtime stage
ENV PORT=3000
ENV ENVIRONMENT=production
ENV DATABASE_URL=""

CMD ["./server"]

EXPOSE 3000
