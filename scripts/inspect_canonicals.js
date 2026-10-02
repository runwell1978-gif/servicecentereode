const fs = require('fs');

const sampleFiles = [
  'index.html',
  'servicecenter/samsung-service-center-coimbatore.html',
  'ac/daikin-ac-repair-service-in-coimbatore.html',
  'fridge/samsung-refrigerator-repair-service-in-coimbatore.html',
  'washing-machine/bosch-washing-machine-repair-service-in-coimbatore.html',
  'tv/sony-tv-repair-service-in-coimbatore.html',
  'sitemap.html'
];

sampleFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const canon = html.match(/<link rel="canonical"[^>]*href="([^"]+)"/i);
    const title = html.match(/<title>(.*?)<\/title>/i);
    console.log(`FILE: ${f}`);
    console.log(`  Canonical: ${canon ? canon[1] : 'NONE'}`);
    console.log(`  Title: ${title ? title[1] : 'NONE'}`);
  }
});
