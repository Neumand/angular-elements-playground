const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/elementsApp/runtime-es2015.js',
    './dist/elementsApp/polyfills-es2015.js',
    './dist/elementsApp/main-es2015.js',
  ];

  await fs.ensureDir('angular-elements');

  await concat(files, 'angular-elements/elementsApp.js');
  await fs.copyFile(
    './dist/elementsApp/styles.css',
    'angular-elements/styles.css',
  );
  // await fs.copy('./dist/elementsApp/assets/', 'angular-elements/assets/');
})();
