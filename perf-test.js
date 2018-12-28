const puppeteer = require('puppeteer');
const tracealyzer = require('tracealyzer');
const chalk = require('chalk');
const prettyjson = require('prettyjson');

const TRACE_FILE = 'trace.json';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({ path: TRACE_FILE });
  // serve defaults to http://localhost:5000
  await page.goto('http://localhost:5000');
  await page.tracing.stop();

  let performance = JSON.parse(
    await page.evaluate(() => {
      let total = window.performance
      let entries = total.getEntries()
      return JSON.stringify({ total, entries })
    })
  );

  const pageMetrics = await page.metrics();
  await browser.close();

  const tracealyzerMetrics = tracealyzer(TRACE_FILE);

  console.log((chalk.yellow.underline.bold('Total page time from start to load\n')));
  const totalTime = performance.total.timing.loadEventEnd - performance.total.timing.fetchStart;
  console.log((chalk.cyan.bold(`${totalTime}ms\n`)));

  console.log((chalk.yellow.underline.bold('Time spent constructing the DOM tree\n')));
  const domConstructionTime = performance.total.timing.domComplete - performance.total.timing.domInteractive;
  console.log((chalk.cyan.bold(`${domConstructionTime}ms\n`)));

  console.log((chalk.yellow.underline.bold('Time spent rendering\n')));
  const renderingTime = performance.total.timing.domComplete - performance.total.timing.domLoading;
  console.log((chalk.cyan.bold(`${renderingTime}ms\n`)));
})();