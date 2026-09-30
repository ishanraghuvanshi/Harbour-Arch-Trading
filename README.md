# Harbour Arch Trading website

Source for www.harbourarchtrading.com.au, the website of Harbour Arch Trading Pty Ltd (ABN 55 697 775 447).

Owner: Ishan Raghuvanshi CPA. Every change that reaches the live site goes through a pull request (PR) and needs his approval before merge.

Last audited: 30 September 2026. Anything not yet confirmed is marked [TBC].

## Stack

- Single-page app built with React 19, TypeScript and Vite 6
- Styling: Tailwind CSS 4 with shadcn/ui components (Radix UI underneath). Most files in `src/components/ui/` are unused library components.
- Routing: `wouter`. One page: `/` (`src/pages/Home.tsx`). The old `/services` address redirects to `/` inside the app. Site copy follows slides 5 and 6 of the India Market Entry decks.
- Forms: `react-hook-form` with `zod` validation
- No backend, no database and no server code. The build output is static files in `dist/`.

## Run it locally

Requires Node.js 20 or later.

```
npm ci
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

A clean `npm ci` followed by `npm run build` was tested on 30 September 2026 and succeeded.

## How it deploys

- Host: **GitHub Pages**, deployed by GitHub Actions (`.github/workflows/static.yml`).
- Trigger: every push to `main` builds the site and publishes it live, with no further approval step. Merging a PR is publishing.
- The workflow installs with `npm ci`, so production uses exactly the versions in `package-lock.json`. It can also be re-run by hand from the Actions tab ("Run workflow").
- Custom domain: `harbourarchtrading.com.au` (apex), set in the repo's Settings → Pages. "Enforce HTTPS" is on (checked 30 September 2026). The TLS certificate comes from Let's Encrypt and GitHub renews it automatically.
- The custom domain is set only in Settings → Pages. Leftover Netlify files and a misspelt `public/CNAME` were removed on 30 September 2026.

## Domain, DNS and email

DNS (Domain Name System) records were checked through Google Public DNS on 30 September 2026.

| Item | Finding | Status |
|---|---|---|
| Nameservers | `dns1/dns2.registrar-servers.com` (Namecheap's DNS service) | Fact |
| Registrar | Namecheap (confirmed by owner) | Fact |
| Who holds the registrar login | Owner only | Fact |
| Domain renewal date and auto-renew | Expires 25 April 2029. Auto-renew turned on 30 September 2026 | Fact (owner confirmed) |
| Apex `harbourarchtrading.com.au` | A records point to GitHub Pages (185.199.108-111.153) | Fact |
| `www` | CNAME record points to `ishanraghuvanshi.github.io` | Fact |
| Email | MX record points to `smtp.google.com`, so Google Workspace | Fact |
| SPF (Sender Policy Framework) record | None found | Gap: anyone can send mail that claims to come from the domain, and real mail is more likely to land in spam |
| DMARC (Domain-based Message Authentication, Reporting and Conformance) record | None found | Gap: same as above |
| DKIM (DomainKeys Identified Mail) | Not checked, because the selector name is needed | [TBC] |

Changing DNS can take the site or the inbox offline. No DNS change is made without the owner's approval.

## Third-party services

| Service | What it does | Where it's set | Account holder |
|---|---|---|---|
| GitHub (repo, Actions and Pages) | Code, build and hosting | This repo | ishanraghuvanshi (owner only) |
| Namecheap | Domain and DNS | Registrar dashboard | Owner only |
| Google Workspace | Email for @harbourarchtrading.com.au | Google Admin console | Owner only |
| Formspree | Receives contact-form submissions and forwards them by email | `src/pages/Home.tsx` (form ID `xkoypzag`) Submissions go to ishan@harbourarchtrading.com.au. Plan [TBC] |
| Google Analytics 4 | Visitor analytics | `index.html` (ID `G-T4TQN9G91W`) | [TBC] |
| Google Fonts | Loads the Inter typeface | `index.html` | No account needed |

The IDs above for Formspree and Google Analytics are public by design. They show in every visitor's browser and are not secrets.

## Security status (checked 30 September 2026)

- No passwords, keys or tokens were found in any branch, in the full commit history, or in `harbour-arch-trading.tar.gz`. Scanned with gitleaks 8.21.2.
- Collaborators: none. Deploy keys: none. Webhooks: none.
- Installed GitHub Apps: Claude only. The Netlify apps and the old Netlify project were removed on 30 September 2026.
- `main` is protected: changes need a pull request.
- Stale branches: `master` (fully contained in `main`) and `agent-typography-plugin-590c` (created by the Netlify bot in May 2026).

## Known issues

- `node_modules/`, `dist/` and `harbour-arch-trading.tar.gz` were removed from the repo on 30 September 2026, and `.gitignore` now keeps them out. They still exist in git history.
- Unlicensed Adobe Stock photos were removed from the site on 30 September 2026. They remain in git history, which anyone can browse on the public repo.
- Microsoft Clarity was removed on 30 September 2026. Delete the Clarity project at clarity.microsoft.com to stop it holding past recordings.
- Privacy notice: a short section at the bottom of the home page (`#privacy`), linked from the footer. Update it whenever a new tool collects visitor data.

## Rules for changes

- Never commit directly to `main`. Make each change on a branch and open a PR, one change per PR.
- Never commit passwords, API (application programming interface) keys or tokens.
- Update this README whenever something about the setup changes.
