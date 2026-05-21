# Hawkeye

Scheduled web scraper that watches URLs for content changes and logs alerts when something shifts. Built to understand how scraping works — fetching raw HTML, parsing it by selector, and diffing content over time.

Cron triggers a scrape on schedule. Axios fetches the HTML, Cheerio pulls content by CSS selector, differ.js compares it to the last snapshot. If it changed, alerter.js appends a timestamped entry to a log file. Each file does one thing.

The snapshot lives in memory — it resets on restart. A production version would persist it to disk or a database.

## Configuration

Target URL and selector are set in `index.js`:

```js
const TARGET_URL = 'https://news.ycombinator.com';
const SELECTOR = '.titleline > a';
```

Change these to watch any page and any element.

## Run locally

```bash
npm install
node index.js
```

Alerts are written to `alerts.log` in the project root.

## Stack

Node.js · Axios · Cheerio · node-cron
