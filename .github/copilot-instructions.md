# copilot-instructions.md

_Last updated: 4 Sep 2025 (AWST)_

## Project Overview

A simple, fast portfolio website with a contact form. The goal is to showcase work and make it easy for visitors to get in touch.

> **Project name:** Strengthen Gospel Project
> **One-sentence mission:** Showcase organisations work and make it effortless to get in touch for collaborations and opportunities.

## Tech Stack (fixed)

- Next.js (App Router, Server Components by default)
- Tailwind CSS
- shadcn/ui
- Supabase (Postgres)
- Drizzle ORM

### Reference Docs

- Next.js install: https://nextjs.org/docs/app/getting-started/installation
- Tailwind + Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- shadcn installation: https://ui.shadcn.com/docs/installation/next
- Superbase docs: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- lucid react: https://lucide.dev/guide/installation#react
- Zod: https://zod.dev/#installation

---

## Decisions

- Package manager: **npm**
- Language: **TypeScript**
- Email: **Resend** (fallback to SMTP/Nodemailer if envs not provided)
- Deployment: **Vercel**
- Pages: **Home**, **About**, **Contact**

---

## Folder Structure

A high-level overview of the project's directory structure.

- `/app`: Core application routes, layouts, and pages using the Next.js App Router.
  - `(marketing)`: Route group for marketing pages like Home, About, Contact.
  - `layout.tsx`: Root layout for the entire application.
  - `page.tsx`: The main home page component.
- `/components`: Reusable React components.
  - `/ui`: Unstyled components from `shadcn/ui`. Do not modify directly.
  - `/shared`: Custom, application-specific components (e.g., `Header`, `Footer`).
- `/lib`: Utility functions and library initializations.
  - `utils.ts`: Shared helper functions (e.g., `cn` for classnames).
- `/hooks`: Custom React hooks.
- `/public`: Static assets (images, fonts, favicons).

---

## Environment Variables

These are the environment variables required by the application. For local development, create a file named `.env` in the project root and add these variables.

> **Note:** The `.env` file should be added to `.gitignore` to prevent committing secrets to version control.

### Database

The connection string for your PostgreSQL database from Supabase.

```
DATABASE_URL=postgres://<user>:<password>@<host>/<db>?sslmode=require
```

- `<user>`: Your database username.
- `<password>`: Your database password.
- `<host>`: The server address where your database is hosted.
- `<db>`: The name of the database.

### Email Services

Variables for sending emails. The primary service is Resend, with a fallback to a standard SMTP server.

```
# Primary email service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxx
# Fallback SMTP server (optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=your_smtp_password
```

- `RESEND_API_KEY`: Your secret API key from [Resend](https://resend.com/) for sending emails.

### Application Settings

General configuration for the application's behavior.

```
# The public URL of your site (e.g., for links in emails)
# The NEXT_PUBLIC_ prefix makes it available in the browser.
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Default email addresses for sending notifications
EMAIL_FROM="App Name <no-reply@your-domain.com>"
EMAIL_TO=your-personal-email@example.com

# Used for a spam prevention technique (honeypot).
# This should match the name of a hidden field in your forms.
SPAM_HONEYPOT_FIELD=company
```

- `NEXT_PUBLIC_SITE_URL`: The full public URL of your deployed website.
- `EMAIL_FROM`: The "From" address that will appear on emails sent by the application.
- `EMAIL_TO`: The recipient address for system notifications or contact form submissions.
- `SPAM_HONEYPOT_FIELD`: The name of a hidden form field designed to catch spam bots. A real user won't see or fill this field, but a

---

## Development Conventions

- **TypeScript**: All code must be written in TypeScript for type safety. Use strict mode.
- **Components**: Default to Server Components. Opt into Client Components (`'use client'`) only when browser APIs or interactivity (e.g., state, effects) are required.
- **Styling**: Use Tailwind CSS for all styling. Avoid inline styles or separate CSS files.
- **Server-Side Logic**: Use Server Actions for data mutations (e.g., form submissions). API Routes in `/app/api` should be used only when Server Actions are not suitable.
- **File Naming**: Use `PascalCase` for React component files (e.g., `MyComponent.tsx`). Use `kebab-case` for all other files and folders.
- **State Management**: For simple global state, use React Context. Place providers in the `/context` directory.
- **Icons**: Use lucid react for majority of icons

## Deployment

- Vercel → import repo → set env vars → deploy. Ensure `DATABASE_URL`, `RESEND_API_KEY`, `EMAIL_*` present. Supabase requires SSL (`?sslmode=require`).

---

## Agent Operating Mode

1. Confirm assumptions briefly only when necessary.
2. Prefer Server Components and Server Actions. Use Client Components solely for interactive UI and hooks.
3. Implement with small commits and update this file when conventions/envs change.
4. Place **all custom hooks in `/hooks`** and export them individually.

---

## Done Checklist

- [ ] Tailwind configured and working
- [ ] shadcn components installed (button, input, label, textarea, form, card, toast)
- [ ] Supabase created and `DATABASE_URL` set
- [ ] Server Action saves messages and sends email
- [ ] Hooks created in `/hooks`
- [ ] README and this file updated
