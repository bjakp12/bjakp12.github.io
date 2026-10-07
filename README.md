# Bijak's Portofolio — with a LIVE database (Firebase Firestore)

Static site (`index.html`) + real database. Edits in `admin.html` appear on the website within seconds — no rebuild, no re-export.

## Files

- `index.html` — public site. Shows hardcoded content instantly, then swaps in live Firestore data (real-time) when connected.
- `admin.html` — dashboard (Firebase email+password login) for live CRUD on projects, reviews & blog. Keep it unlinked, never share its URL.
- `firebase-config.js` — **you create this** (copy from `firebase-config.example.js`). Must be deployed alongside the site.
- `firebase-config.example.js` — template (safe to commit).
- `firestore.rules` — public-read / login-only-write rules.
- `images/` — static assets. New images go here (then push) or use any `https://` URL.

## One-time setup (~10 minutes, free)

1. Create a project at `console.firebase.google.com`.
2. **Firestore Database** → Create database → production mode → pick a region.
3. **Authentication** → Get started → enable **Email/Password** → Users → Add user (admin email + strong password).
4. Gear icon → Project settings → **Your apps → Web (`</>`)** → copy the config values into your local `firebase-config.js`.
5. **Authentication → Settings → Authorized domains** → add `bjakp12.github.io` (and `localhost` for local tests).
6. **Firestore → Rules** → paste `firestore.rules` → Publish.
7. Deploy everything: `git add -A && git commit -m "Live database" && git push`.
8. Open `https://bjakp12.github.io/admin.html`, sign in, click **Seed default content** once — the site fills itself live.

## Daily use

Open `admin.html` → sign in → add/edit/delete/reorder anything → the public site updates in seconds (even on visitors' open tabs).

## Security notes

- `apiKey` in `firebase-config.js` is public by design (like a street address). Protection = `firestore.rules` enforced on Google's servers + Firebase Auth.
- Never commit real passwords. Admin access = the Firebase Auth user you created; disable/delete it in the console to revoke.
- Do not link `admin.html` from the public site.
