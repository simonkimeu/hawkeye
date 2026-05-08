const cron = require("node-cron");
const { scrape } = require("./scraper");
const { hasChanged } = require("./differ");
const { logAlert } = require("./alerter");

const TARGET_URL = "https://news.ycombinator.com";
const SELECTOR = ".titleline > a";

console.log("👁️ Hawkeye is watching...");

cron.schedule("*/1 * * * *", async () => {
  try {
      const content = await scrape(TARGET_URL, SELECTOR);
          if (hasChanged(content)) {
                logAlert(TARGET_URL, content);
                    } else {
                          console.log(`[${new Date().toISOString()}] No changes detected.`);
                              }
                                } catch (err) {
                                    console.error("Scrape error:", err.message);
                                      }
                                      });