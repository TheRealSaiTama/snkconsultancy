const fs = require('fs');
const path = require('path');

// Create a simple SVG favicon
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#1E3A8A"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">SNK</text>
</svg>
`;

// Write SVG to file
const svgPath = path.join(__dirname, 'public', 'favicon-temp.svg');
fs.writeFileSync(svgPath, svgContent.trim());

console.log('Temporary SVG created for favicon conversion');