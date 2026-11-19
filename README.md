# jotbit-labs.github.io

The Jotbit website: https://jotbit-labs.github.io

Plain HTML, CSS and a little JavaScript. No build step, no external requests, no cookies or tracking.

## Files

```
index.html                          the page (title, description, link previews, structured data)
assets/jotbit.css                   styles (light and dark follow the visitor's system)
assets/jotbit.js                    download buttons and device detection
assets/jotbit-logo.svg              logo and browser favicon
assets/jotbit-favicon-48.png        favicon for search results
assets/jotbit-apple-touch-icon.png  home screen icon (180 x 180)
assets/jotbit-logo-512.png          logo for search engines
assets/jotbit-social-card.png       link preview image (1200 x 630)
robots.txt, sitemap.xml             for search engines
.nojekyll                           serve files as they are (no Jekyll processing)
```

## Turning on a download

Edit the `DOWNLOADS` block at the top of `assets/jotbit.js`: set `available: true` and fill in `url`.
Until then the button shows "Coming soon".

| Platform | URL |
|---|---|
| Mac | `https://github.com/Jotbit-Labs/jotbit-mac/releases/latest/download/Jotbit.dmg` (needs a release with that file) |
| Windows | release asset, once `jotbit-windows` exists |
| Android | `https://play.google.com/store/apps/details?id=<application id>` |
| iPhone and iPad | `https://apps.apple.com/app/id<numeric app id>` |

The visitor's device is detected and its card is highlighted.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish

Push to the `main` branch of `Jotbit-Labs/jotbit-labs.github.io`, then in the repo settings under
Pages choose "Deploy from a branch", branch `main`, folder `/ (root)`.

## Search engines

After the first deploy:

1. Google Search Console (https://search.google.com/search-console): add the URL-prefix property
   `https://jotbit-labs.github.io/`, verify it with the HTML file method (put the downloaded
   `google….html` file in the repo root and push), then submit `sitemap.xml` and use
   "Request indexing" on the home page.
2. Bing Webmaster Tools (https://www.bing.com/webmasters): import the site from Search Console.
   Bing also feeds DuckDuckGo and Yahoo.
3. When the page changes a lot, update `<lastmod>` in `sitemap.xml`.

If a custom domain is added later, change every `https://jotbit-labs.github.io/` in `index.html`,
`robots.txt` and `sitemap.xml` to the new address.

## License

Copyright (c) 2026 Jotbit Labs. Licensed under
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). See [LICENSE](LICENSE).
