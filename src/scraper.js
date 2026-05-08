const axios = require("axios");
const cheerio = require("cheerio");

async function scrape(url, selector) {
  const { data } = await axios.get(url);
    const $ = cheerio.load(data);
      return $(selector).text().trim();
      }

      module.exports = { scrape };