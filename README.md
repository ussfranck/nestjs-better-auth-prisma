<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.prisma.io/" target="blank"><svg viewBox="-27 0 310 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000" width="120"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z" fill="#6c737a" fill-rule="nonzero"> </path> </g> </g></svg></a>
  <a href="https://www.better-auth.com/" target="blank"><img src="https://images.seeklogo.com/logo-png/65/2/better-auth-logo-png_seeklogo-653281.png" width="180" height="220" alt="Better Auth Logo" /></a>
</p>

# NestJS 12 + BetterAuth + Prisma v7 Starter

Production-ready backend boilerplate integrating NestJS 12, BetterAuth (session-based), and Prisma v7 (adapter architecture).

## Core Features

*   **NestJS 12:** Latest framework version with Swagger OpenAPI out-of-the-box (`/api`).
*   **BetterAuth:** Factory-injected instance (`AUTH_INSTANCE`). HTTP-only cookies, automated session rotation, built-in rate limits. Fully typed.
*   **Prisma v7:** Configured with `@prisma/adapter-pg` and connection pooling (`pg.Pool`).
*   **DevX:** Oxlint integrated for 50-100x faster linting. Prettier for formatting. `app.http` included for quick REST client testing.
*   **Zod Integration:** Built-in Zod resolution for seamless BetterAuth plugin support.
*   **Auth Decorators:** `@Session()`, `@AllowAnonymous()`, and global `AuthMiddleware`.

## Stack

*   NestJS `^12.0.3`
*   BetterAuth `^1.4.15`
*   Prisma v7 (`@prisma/client`, `@prisma/adapter-pg`)
*   Zod `^4.x`
*   Oxlint `^1.83.0`
*   Node.js `>=24` (strict via engines)

## Setup

1.  **Clone & Install:**

```bash
npm install
```

2.  **Environment:**

```bash
cp .env.example .env
# Add DATABASE_URL and BETTER_AUTH_SECRET
```

3.  **Database (PostgreSQL):**

```bash
npx prisma generate
npx prisma migrate dev --name init
# Optional: Sync BetterAuth schema
# npx @better-auth/cli@latest generate --config auth.schema
```

## Usage

```bash
npm run start:dev  # Watch mode
npm run build      # Build
npm run lint       # Run Oxlint
```

API runs on `http://localhost:3000`. Swagger docs at `/api`.

## Auth Endpoints (`/auth`)

| Method | Route       | Description                      |
| :----- | :---------- | :------------------------------- |
| `POST` | `/register` | `{ email, password, name }`      |
| `POST` | `/login`    | `{ email, password }`            |
| `POST` | `/logout`   | Clears session                   |
| `GET`  | `/me`       | Returns session data             |

*Test directly using the included `app.http` file.*