# atlas-way

A web app to manage your workout schedules, built with [Next.js](https://nextjs.org).

## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Prisma ORM](https://www.prisma.io/docs)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/)

## Getting Started

### Prerequisites

Make sure you have installed:

- [Docker](https://www.docker.com/)
- Docker Compose

Verify installation:

```bash
docker --version
docker compose version
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/atlasway"
```

For PostgreSQL batabases its `DATABASE_URL` has the following structure:

```
postgresql://USER:PASSWORD@HOST:PORT/DB
```

> Note: credentials are in the `db` service defined in `compose.yaml`

### Start Everything with Docker Compose

```bash
docker compose up
```

And to stop containers:

```bash
docker compose down
```

### Updating credentials

To update credentials it's needed to update `compose.yaml` and `DATABASE_URL`.

If you have executed `docker composed up` before, you need to execute `docker compose down -v` to refresh the volume.

## Install Dependencies

```bash
pnpm install
```

```bash
# Apply migrations
pnpx prisma migrate dev

# Generate Prisma Client
pnpx prisma generate

# Seed the database
pnpm prisma db seed
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`.
