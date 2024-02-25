# Next.js Authentication with NextAuth.js and Prisma

This project demonstrates a robust authentication system using NextAuth.js integrated with Prisma for a Next.js application. It showcases how to securely manage user sessions and protect routes based on authentication status and user roles.

## Overview

NextAuth.js provides authentication support for Next.js applications, offering a wide range of providers and options for session management, JWT tokens, and more. In this project, NextAuth.js is used to handle user authentication, including sign-in, sign-out, and session management.

Prisma serves as the ORM for handling database operations, such as user creation and lookup. It's configured to work with a PostgreSQL database, managing user records and securely storing hashed passwords.

The integration between NextAuth.js and Prisma allows for a seamless authentication flow, where user credentials are validated against the database, and session information is managed by NextAuth.js.

## Project Setup

### Prerequisites

- Node.js (LTS version)
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-github-username/your-repository-name.git
cd your-repository-name

```

2. Install dependencies:

npm install

```

3. Configure environment variabes:

DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/yourdatabase?schema=public"
NEXTAUTH_SECRET="your_nextauth_secret"

```

### Running The Application

npm run dev
