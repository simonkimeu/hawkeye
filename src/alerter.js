const fs = require('fs');
const path = require('path');

const LOG_PATH = path.join(__dirname, '../alerts.log');

// Append timestamped entry to log file when change is detected
const logAlert = (url, content) => {
  const entry = `[${new Date().toISOString()}] CHANGE DETECTED on ${url}\n${content}\n---\n`;
  fs.appendFileSync(LOG_PATH, entry);
  console.log(`Change detected on ${url}`);
};

module.exports = { logAlert };