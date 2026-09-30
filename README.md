# Harbour Arch Trading website

Source for www.harbourarchtrading.com.au, the website of Harbour Arch Trading Pty Ltd (ABN 55 697 775 447).

Owner: Ishan Raghuvanshi CPA. Every change that reaches the live site goes through a pull request (PR) and needs his approval before merge.

Last audited: 30 September 2026. Anything not yet confirmed is marked [TBC].

## Stack

- Single-page app built with React 19, TypeScript and Vite 6
- Styling: Tailwind CSS 4 with shadcn/ui components (Radix UI underneath). Most files in `src/components/ui/` are unused library components.
- Routing: `wouter`. There are two pages: `/` (`src/pages/Home.tsx`) and `/services` (`src/pages/Services.tsx`).
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
- The workflow installs with `pnpm`, but the repo only has an npm lockfile (`package-lock.json`). Builds have succeeded so far, but dependency versions in production are not pinned to the lockfile. [Fix proposed separately]
- Custom domain: set in the repo's Settings → Pages. [TBC: confirm the setting reads `www.harbourarchtrading.com.au` and "Enforce HTTPS" is ticked]
- `netlify.toml` and `public/_redirects` are leftovers from an earlier Netlify setup and are not used. `public/CNAME` contains a misspelt domain (`harbourachtrading.com.au`). GitHub Actions deployments ignore that file, so it has no effect on the live site.

## Domain, DNS and email

DNS (Domain Name System) records were checked through Google Public DNS on 30 September 2026.

| Item | Finding | Status |
|---|---|---|
| Nameservers | `dns1/dns2.registrar-servers.com` (Namecheap's DNS service) | Fact |
| Registrar | Namecheap (confirmed by owner) | Fact |
| Who holds the registrar login | Owner only | Fact |
| Domain renewal date and auto-renew | Auto-renew is **off**. Renewal date [TBC] | Risk: if the domain lapses, the website and all email stop together |
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
| Microsoft Clarity | Session recordings and heatmaps | `index.html` (ID `wppbdvo6e0`) | [TBC] |
| Google Fonts | Loads the Inter typeface | `index.html` | No account needed |
| Adobe Stock | Three photos in `src/assets/`, one shown on the live home page | Image files | **Not licensed.** Must be removed |

The IDs above for Formspree, Google Analytics and Clarity are public by design. They show in every visitor's browser and are not secrets.

## Known issues

- The site content describes hospitality linen supply. The current offer is the India market-entry service. [Covered in the accuracy check]
- `node_modules/` (135 MB), `dist/` and `harbour-arch-trading.tar.gz` (16 MB) are committed to the repo. `.gitignore` is saved in UTF-16 encoding, so git does not read it and it has no effect.
- The largest photo is 4.7 MB, which makes the site slow to load on a phone.
- Three unlicensed Adobe Stock photos are in the repo. `AdobeStock_365294624` is shown on the live home page.
- Microsoft Clarity records visitor sessions. The site has no privacy policy. [TBC: decide whether to keep Clarity]

## Rules for changes

- Never commit directly to `main`. Make each change on a branch and open a PR, one change per PR.
- Never commit passwords, API (application programming interface) keys or tokens.
- Update this README whenever something about the setup changes.
