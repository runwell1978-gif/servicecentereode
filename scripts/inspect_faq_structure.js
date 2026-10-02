const fs = require('fs');
const path = require('path');

function inspectPage(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  console.log('Inspecting:', filePath);
  
  // Find FAQ section
  const faqRegex = /<section[^>]*id=["']faq["'][^>]*>([\s\S]*?)<\/section>/i;
  const match = html.match(faqRegex);
  if (match) {
    console.log('FAQ section found. Length:', match[0].length);
    console.log('Sample content (first 600 chars):');
    console.log(match[0].slice(0, 600));
    console.log('--- end sample ---');
  } else {
    console.log('No section id="faq" found. Checking class or other matches:');
    const m2 = html.match(/<section[^>]*class=["'][^"']*faq[^"']*["'][^>]*>([\s\S]*?)<\/section>/i);
    if (m2) {
      console.log('FAQ class section found. Length:', m2[0].length);
      console.log(m2[0].slice(0, 600));
    }
  }

  // Check Schema
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = schemaRegex.exec(html)) !== null) {
    if (sm[1].includes('FAQPage')) {
      console.log('FAQPage schema found! Length:', sm[1].length);
      console.log('Schema sample:', sm[1].slice(0, 400));
    }
  }

  // Check appliances listed on page
  const appliancesSection = html.match(/<section[^>]*id=["']appliances["'][^>]*>([\s\S]*?)<\/section>/i)
    || html.match(/Home Appliances We Service[\s\S]*?<\/section>/i);
  if (appliancesSection) {
    console.log('Appliances section found. Length:', appliancesSection[0].length);
    // Find headings or cards inside
    const cards = appliancesSection[0].match(/<h[34][^>]*>(.*?)<\/h[34]>/gi);
    console.log('Appliance headings detected:', cards);
  }
}

inspectPage(path.join(__dirname, '../servicecenter/liebherr-service-center-coimbatore.html'));
console.log('\n======================================\n');
inspectPage(path.join(__dirname, '../refrigerator/samsung-refrigerator-service-coimbatore.html'));
console.log('\n======================================\n');
inspectPage(path.join(__dirname, '../index.html'));
