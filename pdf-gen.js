const express = require('express');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const template = fs.readFileSync(
  path.resolve(__dirname, './index.html'),
  'utf8'
);
const content = ejs.render(template, { title: 'Awesome title!' });
fs.writeFile(path.resolve(__dirname, './public/index.html'), content, () => {
  app.use(express.static('dist'));

  const server = app.listen(port, async () => {
    const url = `http://localhost:${port}`;

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const contentHeight = await page.evaluate(() => {
      const container = document.querySelector('.cv-container');
      return container.scrollHeight;
    });

    const pageWidth = 8.5;
    const marginInches = 0.5;
    const pxPerInch = 96;

    const contentHeightInches = contentHeight / pxPerInch;
    const totalHeight = contentHeightInches + (marginInches * 2);

    console.log(`Content height: ${contentHeight}px (${contentHeightInches.toFixed(2)} inches)`);
    console.log(`Page size: ${pageWidth}" × ${totalHeight.toFixed(2)}"`);
    console.log(`Margins: ${marginInches}" on all sides`);

    await page.pdf({
      path: 'david-yappeter.pdf',
      width: `${pageWidth}in`,
      height: `${totalHeight}in`,
      printBackground: true,
      margin: {
        top: `${marginInches}in`,
        right: `${marginInches}in`,
        bottom: `${marginInches}in`,
        left: `${marginInches}in`
      }
    });

    await browser.close();
    console.log('PDF generated successfully: david-yappeter.pdf');

    server.close();
  });
});
