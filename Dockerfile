FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .

ENV PORT=8080
ENV ENVIRONMENT=production
ENV DATABASE_URL="postgresql://demo_7gnj_user:FQTySw3OvxEREwE2YcIx2aBg9tmwXdcO@dpg-csriilt6l47c73ffgc70-a.frankfurt-postgres.render.com/demo_7gnj"

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

ENV PORT=8080
ENV ENVIRONMENT=production
ENV DATABASE_URL="postgresql://demo_7gnj_user:FQTySw3OvxEREwE2YcIx2aBg9tmwXdcO@dpg-csriilt6l47c73ffgc70-a.frankfurt-postgres.render.com/demo_7gnj"

CMD ["./server"]

EXPOSE 3000
