const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('scripts/coimbatore_rebuilt_faqs.json', 'utf8'));

const testFiles = [
  'servicecenter/lloyd-service-center-coimbatore.html',
  'servicecenter/samsung-service-center-coimbatore.html',
  'servicecenter/bosch-service-center-coimbatore.html',
  'ac/daikin-ac-service-coimbatore.html',
  'fridge/samsung-refrigerator-service.html',
  'index.html'
];

testFiles.forEach(f => {
  const p = faqs[f];
  if (!p) {
    console.log('Not found in json:', f);
    return;
  }
  console.log(`\n==================================================`);
  console.log(`PAGE: ${f}`);
  console.log(`Brand: ${p.brand}, Category: ${p.category}, Total FAQs: ${p.totalQuestions}`);
  console.log(`Groups (${p.groups.length}):`);
  p.groups.forEach(g => {
    console.log(`  - ${g.title} (${g.items.length} questions)`);
    g.items.slice(0, 2).forEach(it => {
      console.log(`      Q: ${it.q}`);
      console.log(`      A: ${it.a.slice(0, 100)}...`);
    });
  });
});
