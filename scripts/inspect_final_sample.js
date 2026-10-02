const fs = require('fs');

const html = fs.readFileSync('servicecenter/samsung-service-center-coimbatore.html', 'utf8');
const matches = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi) || [];

console.log('Scripts count:', matches.length);
matches.forEach((m, i) => {
  console.log(`\n--- Script #${i + 1} ---`);
  console.log(m);
});
