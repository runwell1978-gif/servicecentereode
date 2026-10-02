const fs = require('fs');

const sampleFiles = [
  'index.html',
  'servicecenter/liebherr-service-center-coimbatore.html',
  'servicecenter/samsung-service-center-coimbatore.html',
  'ac/daikin-ac-repair-service-in-coimbatore.html',
  'washing-machine/bosch-washing-machine-repair-service-in-coimbatore.html',
  'fridge/lg-refrigerator-repair-service-in-coimbatore.html',
  'tv/sony-tv-repair-service-in-coimbatore.html'
];

sampleFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    console.log(`\n=== FILE: ${file} ===`);
    const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
    let match;
    let idx = 0;
    while ((match = scriptRegex.exec(html)) !== null) {
      idx++;
      try {
        const parsed = JSON.parse(match[1]);
        const type = parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Unknown');
        console.log(`Script #${idx}: @type = ${type}`);
        if (type === 'LocalBusiness' || type === 'HomeAndConstructionBusiness' || (Array.isArray(type) && type.includes('LocalBusiness'))) {
          console.log('LocalBusiness JSON:');
          console.log(JSON.stringify(parsed, null, 2));
        }
      } catch (e) {
        console.log(`Script #${idx}: JSON parse error: ${e.message}`);
        console.log(match[1].slice(0, 300));
      }
    }
  }
});
