const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let withFavicon = 0;
let withoutFavicon = 0;
const missingFiles = [];

allFiles.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  if (html.includes('rel="icon"') || html.includes('rel="shortcut icon"')) {
    withFavicon++;
  } else {
    withoutFavicon++;
    missingFiles.push(f);
  }
});

console.log(`Files with favicon link: ${withFavicon} / ${allFiles.length}`);
console.log(`Files without favicon link: ${withoutFavicon}`);
if (missingFiles.length > 0) {
  console.log('Missing sample:', missingFiles.slice(0, 10));
}
