const express = require('express');
const html_to_pdf = require('html-pdf-node');
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
    const options = {
      // format: "A4", // width or height will be override
      width: '800px',
      height: '2600px',
      path: 'david-yappeter.pdf',
      printBackground: true, // to apply background colour
    };
    const file = { url };
    await html_to_pdf.generatePdf(file, options);

    server.close();
  });
});
