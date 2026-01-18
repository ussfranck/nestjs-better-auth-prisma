<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.prisma.io/" target="blank"><svg viewBox="-27 0 310 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000" width="120"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z" fill="#6c737a" fill-rule="nonzero"> </path> </g> </g></svg></a>
  <a href="https://www.better-auth.com/" target="blank"><img src="https://images.seeklogo.com/logo-png/65/2/better-auth-logo-png_seeklogo-653281.png" width="180" height="220" alt="Nest Logo" /></a>
</p>

# NestJS + BetterAuth + Prisma v7 Starter Template

### Description
A production-ready starter template for building a NestJS backend with:

- ✅ BetterAuth (session-based authentication)
- ✅ Prisma v7 (with adapter setup)
- ✅ PostgreSQL
- ✅ Clean architecture & DI-friendly setup
- ✅ Typed auth instance (no `any`)
- ✅ Ready-to-use auth routes (register, login, logout, me, etc.)

This template solves the **real-world integration issues** between:
- NestJS dependency injection
- BetterAuth factory-based API
- Prisma v7 new engine / adapter system

If you've struggled to make these three work together — this repo is for you.

---

### 🚀 Features Embedded 

- Session-based authentication (cookies)
- Email & password auth enabled
- Prisma schema already configured for BetterAuth
- Auth module fully wired into NestJS
- PrismaService + adapter setup
- Factory-based auth instance (`createAuth`)
- Strong TypeScript typing everywhere

---

### 🧱 Tech Stack

- NestJS (REST API Mode)
- BetterAuth (latest)
- Prisma v7 (latest)
- PostgreSQL (via Neon but easy to change to another DB)
- TypeScript

---

### 📦 Installation

```bash
git clone https://github.com/ussfranck/nestjs-better-auth-prisma.git
cd nestjs-better-auth-prisma-template
npm install
````

---

Create a `.env` file:

use `.env.example` as a template.

---

### 🗄️ Setup database

If your database is PostgreSQL via Neon, you just change the DATABASE_URL in the `.env` file. Otherwise, you'll need to change the connection string, pool adapter for betterAuth and Prisma

Run:
```bash
pnpm prisma generate
pnpm prisma migrate dev
```

---

### ▶️ Run the server

```bash
pnpm dev
```

The Server will start on:

```
http://localhost:3000
```

---
### 🔐 Auth Endpoints

* POST `/auth/register`
* POST `/auth/login`
* POST `/auth/logout`
* GET `/auth/me`

Session is stored in **HTTP-only cookies**.

---

### 🧠 Architecture Notes

* Auth instance is created via factory: `createAuth(prisma)`
* Typed using: `ReturnType<typeof createAuth>`
* Prisma v7 uses explicit adapter configuration
* No Passport, no JWT, no magic — just sessions done right.

---

### ❗ Why this exists 🤦🏽‍♂️

Because integrating:

* NestJS
* BetterAuth
* Prisma v7 (latest version)

is **not trivial at all** in real projects.🤦🏽‍♂️

This repo gives you a **clean, working, production-shaped base**.

---

### 🧑‍💻 Author

USS

---

### 📄 License

MIT
