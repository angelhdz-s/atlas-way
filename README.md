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

- [Docker](https://docs.docker.com/get-started/)
- Docker Compose

Verify installation:

```bash
docker --version
docker compose version
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
DATABASE_URL="postgresql://postgres:atlasway@localhost:5432/atlasway"
```

> Note: `db` is the service name defined in `docker-compose.yaml`

### Start Everything with Docker Compose

```bash
docker compose up
```

And to stop containers:

```bash
docker compose down
```

## Install Dependencies

```bash
pnpm install
```

```bash
# Apply migrations
pnpm prisma migrate dev

# Generate Prisma Client
pnpm prisma generate

# Seed the database
pnpm prisma db seed
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`.
