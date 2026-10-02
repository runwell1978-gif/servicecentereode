const fs = require('fs');
const path = require('path');

const sampleFiles = [
  'servicecenter/liebherr-service-center-coimbatore.html',
  'servicecenter/samsung-service-center-coimbatore.html',
  'washing-machine/samsung-washing-machine-service-coimbatore.html',
  'refrigerator/samsung-refrigerator-service.html',
  'index.html'
];

sampleFiles.forEach(f => {
  const fullPath = path.join(__dirname, '..', f);
  if (fs.existsSync(fullPath)) {
    const html = fs.readFileSync(fullPath, 'utf8');
    console.log('FILE:', f);
    
    // Look for FAQ container
    const faqMatch = html.match(/<!-- FAQ Section -->([\s\S]*?)<!-- \/FAQ Section -->/i)
      || html.match(/<section[^>]*class=["'][^"']*faq[^"']*["'][^>]*>([\s\S]*?)<\/section>/i)
      || html.match(/<section[^>]*>([\s\S]*?Frequently Asked Questions[\s\S]*?)<\/section>/i)
      || html.match(/<section[^>]*>([\s\S]*?faq-container[\s\S]*?)<\/section>/i);
      
    if (faqMatch) {
      console.log('FAQ match length:', faqMatch[0].length);
      console.log('Start of FAQ:', faqMatch[0].slice(0, 400));
      console.log('End of FAQ:', faqMatch[0].slice(-300));
    } else {
      // search for "Frequently Asked Questions"
      const idx = html.indexOf('Frequently Asked Questions');
      if (idx !== -1) {
        console.log('Found "Frequently Asked Questions" at index', idx);
        console.log('Context:', html.slice(idx - 200, idx + 400));
      } else {
        console.log('No FAQ found in', f);
      }
    }
    console.log('--------------------------------------------------');
  } else {
    console.log('NOT FOUND:', f);
  }
});
