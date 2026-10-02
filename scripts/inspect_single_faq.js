const fs = require('fs');

const html = fs.readFileSync('servicecenter/samsung-service-center-coimbatore.html', 'utf8');
const startIdx = html.indexOf('id="faqSection"');
if (startIdx !== -1) {
  const sectionStart = html.lastIndexOf('<section', startIdx);
  const sectionEnd = html.indexOf('</section>', startIdx) + '</section>'.length;
  console.log(html.slice(sectionStart, sectionEnd));
} else {
  console.log('id="faqSection" not found');
}
