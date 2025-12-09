# Backend for Modern Company Website

This folder contains a minimal Express backend that uses a JSON file as its datastore (no native builds required).

Quick start (PowerShell):

```powershell
cd "c:\Users\hp\Desktop\Modern Company Website\server"
npm install
npm run dev
```

The server will run on `http://localhost:4000` by default. Set `PORT` in `.env` to change.

Available endpoints:
- `GET /api/health` — health check
- `POST /api/contact` — receive contact form (body: firstName, lastName, email, phone, city, projectType, budgetRange, message)
- `GET /api/messages` — list messages
- `GET/POST/PUT/DELETE /api/projects` — project CRUD
- `GET/POST/PUT/DELETE /api/clients` — client CRUD
- `POST /api/subscribe` — add newsletter subscriber (email)

The DB is persisted to `server/data.json` as a simple JSON file. This keeps installation fast on Windows and avoids native build dependencies.
