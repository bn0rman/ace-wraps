import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a placeholder image
function createPlaceholderImage(width, height, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#6b7280';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
}

// Create directories if they don't exist
const directories = [
  'public/images',
  'public/images/services',
  'public/images/gallery',
  'public/images/team',
  'public/images/about',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate service images
const services = [
  'car-wrap',
  'ppf',
  'ceramic',
  'commercial',
  'chrome-delete',
  'window-tint',
];

services.forEach(service => {
  createPlaceholderImage(
    800,
    600,
    `${service} Image`,
    path.join('public/images/services', `${service}.jpg`)
  );
});

// Generate gallery images
for (let i = 1; i <= 6; i++) {
  createPlaceholderImage(
    800,
    600,
    `Before Image ${i}`,
    path.join('public/images/gallery', `before-${i}.jpg`)
  );
  createPlaceholderImage(
    800,
    600,
    `After Image ${i}`,
    path.join('public/images/gallery', `after-${i}.jpg`)
  );
}

// Generate team member images
const team = ['john', 'sarah', 'mike'];
team.forEach(member => {
  createPlaceholderImage(
    400,
    400,
    `${member}'s Photo`,
    path.join('public/images/team', `${member}.jpg`)
  );
});

// Generate about page images
createPlaceholderImage(
  1200,
  800,
  'Workshop Image',
  path.join('public/images/about', 'workshop.jpg')
);

// Generate logo
createPlaceholderImage(
  300,
  100,
  'Ace Wraps Logo',
  path.join('public/images', 'logo.png')
);

// Generate hero background
createPlaceholderImage(
  1920,
  1080,
  'Hero Background',
  path.join('public/images', 'hero-bg.jpg')
);

console.log('Placeholder images generated successfully!'); 