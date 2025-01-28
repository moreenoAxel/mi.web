// Selección de elementos
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Evento de clic para mostrar/ocultar el menú móvil
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); 
    mobileMenu.classList.toggle('flex');  
});

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './images';
const outputDir = '/optimized-images';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  // Leer todas las imágenes del directorio
  fs.readdirSync(inputDir).forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);
  
    // Optimizar la imagen
    sharp(inputFilePath)
      .resize({ width: 800 }) // Cambia el ancho según lo que necesites
      .toFormat('webp') // Convierte a formato WebP para mejor compresión
      .webp({ quality: 80 }) // Calidad de la compresión (ajusta según lo necesites)
      .toFile(outputFilePath)
      .then(() => {
        console.log(`Optimizado: ${file}`);
      })
      .catch(err => {
        console.error(`Error optimizando ${file}:`, err);
      });
  });