// Simple favicon generator for SNK
const fs = require('fs');
const path = require('path');

// Create a simple 16x16 favicon with SNK text
const faviconData = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <rect width="16" height="16" fill="#1E3A8A"/>
  <text x="8" y="12" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="white">SNK</text>
</svg>
`;

// Write the SVG file
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), faviconData.trim());

console.log('Favicon SVG created successfully!');