# Del Mar Rooter — complete updated website

Phone: **(760) 385-3797**. Service area: **Orange County**.

This package contains the complete website source, all original artwork, and a ready-to-publish website in `docs/`. The existing navy, white, and neon-green design, mobile layout, service descriptions, navigation, and demo request forms are preserved.

## Publish right now

1. Create a new public GitHub repository.
2. Unzip this download. Upload the files and folders INSIDE the extracted folder directly to the repository. The repository's main file list should include `app`, `public`, `docs`, `package.json`, and this `README.md`. Do not upload the ZIP itself or place everything inside another parent folder.
3. Commit the uploaded files.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
6. Select the **main** branch and the **/docs** folder, then click **Save**.
7. Wait for GitHub's Pages deployment to finish. Open the public URL shown in **Settings → Pages**.

The `docs` folder is already built; this publishing option does not require any local commands, hosting plugin, or private token. The ready-to-publish website uses relative asset paths, so the repository can have any name.

## Update the source later

The main website component is `app/page.tsx`, and its styles are in `app/globals.css`. The displayed phone number and tap-to-call target are defined near the top of `app/page.tsx`:

```ts
const phoneNumber = "(760) 385-3797";
const phoneHref = "tel:+17603853797";
```

To rebuild the ready-to-publish `docs` folder after changing the source, use Node.js 22.13 or newer and run:

```sh
npm ci
npm run build:pages
```

Commit the updated source AND the regenerated `docs` folder when publishing from the main branch's `/docs` folder.

To work locally:

```sh
npm run dev:pages
```

To inspect the production build locally:

```sh
npm run preview:pages
```

## Optional automatic builds from source

The included `.github/workflows/pages.yml` builds and publishes the website whenever code is pushed to `main`.

To use that workflow instead of publishing the prebuilt folder, upload `.github` as well and set **Settings → Pages → Source** to **GitHub Actions**. On a Mac, **Command + Shift + Period** shows hidden files and folders such as `.github`. The workflow will build `docs` and deploy it without requiring local rebuilds.

## Existing sample behavior

Service rows open their service descriptions. Call links dial **+1 760-385-3797**. The request forms show the existing demo confirmation; they are not connected to an email or booking backend.

The original framework and Worker source files are retained for completeness. GitHub Pages uses `github-pages.tsx`, `vite.pages.config.ts`, and `npm run build:pages`; it does not need a server or database.

Official GitHub Pages setup instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
