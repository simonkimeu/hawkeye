const axios = require('axios');
const cheerio = require('cheerio');

// Fetch page and extract text content by CSS selector
const scrape = async (url, selector) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $(selector).text().trim();
};

module.exports = { scrape };