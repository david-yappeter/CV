## ATS Friendly CV and HTML to PDF Generator

### Command List:

| command | content | description |
| ------- | ------- | ----------- |
| `npm run gulp-clean` | `gulp clean` | Delete minify generated files |
| `npm run gulp-page` | `gulp pages` | Generate minified `index.html` file |
| `npm run gulp-style` | `gulp styles` | Generate minified `style.css` file |
| `npm run pdf` | `node ./pdf-gen.js` | Generating Pdf (set path from `pdf-gen.js`) |
| `npm run build` | `gulp clean && gulp pages && gulp styles && node ./pdf-gen.js` | Run all things above in sequence

