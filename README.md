Short portfolio of Bijak Assidik Putu Riki — a student actively exploring the digital world, dreaming of studying abroad with a fully funded Computer Science scholarship.

## Structure

- `index.html` — public portfolio (English, horizontal project rail with flip-card previews)
- `projects.json` — project data source (edit manually or via the dashboard)
- `admin.html` — local admin dashboard: PBKDF2 login + AES-GCM auto-encrypted drafts, CRUD, export/import
- `images/` — static assets

## Publish (GitHub Pages)

1. Open `admin.html` in a browser, create the admin account, manage projects.
2. Click **Save & Preview**, then **Export projects.json** and replace this repo's file.
3. Commit & push — Pages redeploys automatically.

> Do not link `admin.html` from the public site. Keep it local or rename it to something unguessable.
