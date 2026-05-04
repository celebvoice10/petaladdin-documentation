# Petaladdin Documentation

This site is built with [Docusaurus](https://docusaurus.io/) and is intended for Petaladdin end users at veterinary clinics and hospitals.

## Recommendation

For a public-facing help center, Docusaurus plus GitHub Pages is a strong fit because:

- content is easy to maintain in Markdown
- navigation and sidebars scale well as the product grows
- the output is static, fast, and inexpensive to host
- GitHub Actions can publish automatically from this repository

## Local development

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

The generated site will be written to `build/`.

## GitHub Pages publishing

This repository includes a workflow at `../.github/workflows/publish-documentation.yml` that builds the docs from the `petaladdin-documentation` folder and deploys them to GitHub Pages.

### Default setup

If you publish from this repository as a standard GitHub Pages project site, no changes are needed beyond enabling Pages in GitHub:

- Source: `GitHub Actions`
- Published URL pattern: `https://<owner>.github.io/<root-repository-name>/`

Because the documentation lives in a subfolder, the site URL is based on the repository name, not the `petaladdin-documentation` folder name.

### Recommended long-term setup

For customer-facing documentation, a custom domain is better than a repo path. A domain such as `docs.petaladdin.com` is easier to share and looks more polished.

To switch later, set repository variables in GitHub:

- `DOCS_USE_CUSTOM_DOMAIN=true`
- `DOCS_URL=https://docs.petaladdin.com`
- `DOCS_BASE_URL=/`

If you use a custom domain, add a `CNAME` file under `static/` with your final hostname.

## Suggested content roadmap

- Getting started for clinic teams
- Appointment and calendar workflows
- Patient records and visit history
- Billing, invoices, and payments
- Staff access and permissions
- Troubleshooting and FAQs
