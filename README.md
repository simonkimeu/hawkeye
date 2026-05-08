# Hawkeye

A scheduled web scraper and change detection bot built with Node.js.
Hawkeye silently watches a target URL at regular intervals, extracts
content using a CSS selector, and compares it against the previous
snapshot. When a change is detected, it logs a timestamped alert to
a file so nothing slips past unnoticed.

## Install

git clone https://github.com/simonkimeu/hawkeye.git
cd hawkeye
npm install

## Run

node src/index.js

Hawkeye will immediately begin watching and check every minute.

## Example Output

👁️ Hawkeye is watching...
[2026-05-08T19:39:01.639Z] No changes detected.
[2026-05-08T19:40:09.339Z] No changes detected.
🚨 Change detected on https://news.ycombinator.com

## Alerts Log

All detected changes are appended to alerts.log with full content snapshot:

[2026-05-08T19:41:01.552Z] CHANGE DETECTED on https://news.ycombinator.com
Google Cloud Fraud Defence is just WEI repackaged
AI Is Breaking Two Vulnerability Cultures
...
---

## Configuration

Edit these values in src/index.js to watch any site:

TARGET_URL — the URL to monitor
SELECTOR  — CSS selector targeting the content to track
cron.schedule("*/1 * * * *") — frequency (default: every 1 minute)

Example: watch a blog's latest post title
TARGET_URL = "https://someblog.com"
SELECTOR = "h1.post-title"

## How It Works

1. node-cron triggers a scrape on the defined schedule
2. axios fetches the page HTML
3. cheerio extracts text matching the CSS selector
4. differ.js compares current content to previous snapshot
5. If changed, alerter.js appends a timestamped entry to alerts.log

## Tech Stack
- Node.js
- axios (HTTP requests)
- cheerio (HTML parsing)
- node-cron (task scheduling)

## Author
Simon Kimeu — github.com/simonkimeu