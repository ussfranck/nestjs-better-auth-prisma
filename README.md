<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.prisma.io/" target="blank"><svg viewBox="-27 0 310 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000" width="120"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z" fill="#6c737a" fill-rule="nonzero"> </path> </g> </g></svg></a>
  <a href="https://www.better-auth.com/" target="blank"><img src="https://images.seeklogo.com/logo-png/65/2/better-auth-logo-png_seeklogo-653281.png" width="180" height="220" alt="Better Auth Logo" /></a>
</p>

# NestJS 12 + BetterAuth + Prisma v7 Starter Template

A production-grade, highly optimized starter template that integrates **NestJS 12**, **BetterAuth** (session-based authentication), and **Prisma v7** (driver adapter architecture) into a clean, strictly-typed backend foundation.

---

### Overview & Operational Value

Integrating modern session authentication and the latest database driver adapters within an enterprise dependency injection framework often encounters friction:
- **Dependency Injection Lifecycle:** BetterAuth uses a factory-based setup that requires an active database client instance at initialization time.
- **Prisma v7 Driver Adapters:** Modern Prisma v7 utilizes dedicated database connection pools (e.g. `@prisma/adapter-pg`) requiring explicit runtime configuration.
- **Plugin Ecosystem Compatibility:** BetterAuth plugins rely on Zod schemas for input validation and CLI schema generation. Explicit Zod integration prevents runtime resolution errors when extending plugins.
- **Fast Developer Tooling:** Replaced legacy ESLint setups with **Oxlint** (`oxlint` / `oxlint-tsgolint`) to maximize linting throughput and reduce CI/local feedback loops by up to 50–100x.

This repository resolves these architectural challenges with zero compromises on type safety, developer velocity, or execution performance.

---

### Key Features & Architectural Highlights

- **NestJS 12 Core:** Built on NestJS 12, featuring updated decorators, configuration modules, Express platform integration, and Swagger OpenAPI documentation.
- **BetterAuth Factory Integration:**
  - Auth instance created cleanly via `createAuth(prisma: PrismaService)` and injected with a robust Symbol token (`AUTH_INSTANCE`).
  - End-to-end type safety using `ReturnType<typeof createAuth>` without `any` workarounds.
  - HTTP-only cookie management, session rotation (`updateAge`), security age checks (`freshAge`), and built-in rate limiting.
- **Prisma v7 Driver Adapter:**
  - Configured with PostgreSQL via `@prisma/adapter-pg` and `pg.Pool`.
  - Migration and schema management driven by `prisma.config.ts`.
  - Schema synchronization utility `auth.schema.ts` for generating BetterAuth tables via `@better-auth/cli`.
- **Plugin Ready (Zod Integration):**
  - Explicit dependency resolution for Zod ensures full compatibility with BetterAuth's validation layer and third-party plugin ecosystem.
- **High-Performance Linting & Tooling:**
  - **Oxlint** for lightning-fast static analysis configured in `.oxlintrc.json`.
  - **Prettier** for automated formatting.
  - Target environment: Node.js 24+ and TypeScript 6.
- **Auth Middleware, Guards & Decorators:**
  - Global `AuthMiddleware` attaches active session data directly to `req.session`.
  - `@Session()` parameter decorator for direct controller route access.
  - `AuthGuard`, `OptionalAuthGuard`, `@AllowAnonymous()`, and `@OptionalAuth()` metadata decorators for route-level authorization.
- **Swagger / OpenAPI:** Interactive documentation automatically exposed at `/api`.
- **REST Testing Client:** Included `app.http` for quick route validation with VS Code REST Client or JetBrains HTTP Client.

---

### Tech Stack

| Layer / Technology | Description | Version |
| :--- | :--- | :--- |
| **Framework** | NestJS (Core, Common, Platform-Express, Config, Swagger) | `^12.0.3` |
| **Authentication** | BetterAuth | `^1.4.15` |
| **ORM / Database** | Prisma v7 (`@prisma/client`, `@prisma/adapter-pg`, `pg`) | `^7.2.0` |
| **Validation / Schema** | Zod | `^4.x / ^3.x` |
| **Linter** | Oxlint (`oxlint`, `oxlint-tsgolint`) | `^1.83.0` |
| **Formatter** | Prettier | `^3.4.2` |
| **Language & Runtime** | Node.js `>=24 <25`, TypeScript | `^6.0.3` |

---

### Prerequisites

- **Node.js**: `v24.x` (enforced via `.nvmrc` and `engines` in `package.json`)
- **Package Manager**: `npm` or `pnpm`
- **Database**: PostgreSQL database (Neon, local Postgres, Supabase, RDS, etc.)

---

### Environment Configuration

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Configure your environment variables:

```env
# Database connection string (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/mydb?sslmode=require

# BetterAuth secret key (generate a strong random string)
BETTER_AUTH_SECRET=your-random-32-character-secret

# Application URLs
BETTER_AUTH_BASE_URL=http://localhost:3000
APP_NAME="YOUR_APP"
PORT=3000
```

---

### Installation & Database Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **(Optional) BetterAuth Schema Synchronization:**
   If modifying BetterAuth configuration or adding plugins, regenerate the Prisma schema mapping:
   ```bash
   npx @better-auth/cli@latest generate --config auth.schema
   ```

---

### Running the Application

```bash
# Development mode with watch
npm run start:dev

# Production build
npm run build

# Start production server
npm run start:prod
```

The application starts by default at `http://localhost:3000`.

- **Swagger Documentation:** `http://localhost:3000/api`
- **Health / Root Endpoint:** `http://localhost:3000/`

---

### Authentication API & Workflow

The template provides built-in endpoints under `/auth`:

| Method | Endpoint | Description | Request Body / Headers |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Register new user with email & password | `{ "email": "...", "password": "...", "name": "..." }` |
| `POST` | `/auth/login` | Authenticate user & set session cookie | `{ "email": "...", "password": "..." }` |
| `POST` | `/auth/logout` | Revoke session & clear cookie | Cookie / Headers |
| `GET` | `/auth/me` | Fetch active session & user payload | Session Cookie |

Sessions are managed securely via **HTTP-only cookies** (`yourapp.session`), configured with `sameSite`, secure flags, and automatic session rotation.

#### Testing Endpoints via `app.http`

You can test all endpoints directly using the included `app.http` file:

```http
@baseUrl = http://localhost:3000
@email = test@mail.local
@password = Test1234!
@name = Test User

### 1) Register
POST {{baseUrl}}/auth/register
Content-Type: application/json

{
  "email": "{{email}}",
  "password": "{{password}}",
  "name": "{{name}}"
}

### 2) Login
POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "{{email}}",
  "password": "{{password}}"
}

### 3) Me (Session Check)
GET {{baseUrl}}/auth/me

### 4) Logout
POST {{baseUrl}}/auth/logout
```

---

### Project Structure & Architecture

```
├── auth.schema.ts             # Dedicated BetterAuth CLI schema generator config
├── prisma.config.ts           # Prisma v7 configuration file
├── prisma/
│   └── schema.prisma          # Database schema (User, Session, Account, Verification)
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts # Route handlers (/auth/register, /auth/login, etc.)
│   │   ├── auth.module.ts     # Auth module exporting AUTH_INSTANCE & AuthService
│   │   └── auth.service.ts    # Service interacting with BetterAuth API
│   ├── common/
│   │   ├── auth/
│   │   │   ├── auth.instance.ts   # BetterAuth instance factory (createAuth)
│   │   │   ├── auth.middleware.ts # Global session extractor middleware
│   │   │   ├── auth.ts            # AUTH_INSTANCE injection symbol
│   │   │   ├── decorators/        # @Session(), @AllowAnonymous(), @OptionalAuth()
│   │   │   └── guards/            # AuthGuard, OptionalAuthGuard
│   │   └── prisma/
│   │       ├── prisma.module.ts   # Global Prisma module
│   │       └── prisma.service.ts  # PrismaService with PostgreSQL adapter pool
│   ├── app.controller.ts      # Root controller
│   ├── app.module.ts          # Application root module
│   ├── better-auth.ts         # Inferred BetterAuth type export
│   └── main.ts                # Bootstrap with CORS & Swagger OpenAPI setup
├── .env.example               # Example environment variables
├── .oxlintrc.json             # Oxlint configuration
├── nest-cli.json              # Nest CLI configuration (Swagger plugin & assets)
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

---

### Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run start:dev` | `nest start --watch` | Start development server with file watch |
| `npm run build` | `nest build` | Compile application to `dist/` |
| `npm run start:prod` | `node dist/main` | Run production build |
| `npm run lint` | `oxlint .` | Ultra-fast linting with Oxlint |
| `npm run format` | `prettier --write ...` | Auto-format TypeScript sources |
| `npm run format:check`| `prettier --check ...` | Verify formatting consistency |
| `npm run test` | `jest` | Run unit tests |
| `npm run test:e2e` | `jest --config ./test/jest-e2e.json` | Run end-to-end tests |

---

### Author & License

- **Author:** USS
- **License:** MIT
