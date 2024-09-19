const Image = require("@11ty/eleventy-img");

async function processImages(imageData) {
  if (!imageData || !imageData.url) {
    console.log("No image data or URL found.");
    return null;
  }

  // Detectar si la imagen es PNG o SVG
  const isPng = imageData.url.endsWith('.png');
  const isSvg = imageData.url.endsWith('.svg');

  // Si es SVG, no procesarla con Eleventy Image
  if (isSvg) {
    return {
      url: imageData.url,
      format: 'svg',
    };
  }

  let metadata;
  try {
    // Si la imagen es PNG, solo procesarla como PNG y WebP
    if (isPng) {
      metadata = await Image(imageData.url, {
        widths: [300, 600, 900, 1200, 1800],
        formats: ["png", "webp"], // Mantener PNG y WebP para conservar la transparencia
        urlPath: "/images/",
        outputDir: "./public/images/",
      });
    } else {
      // Si no es PNG, procesarla como JPEG y WebP
      metadata = await Image(imageData.url, {
        widths: [300, 600, 900, 1200, 1800],
        formats: ["jpeg", "webp"],
        urlPath: "/images/",
        outputDir: "./public/images/",
      });
    }
  } catch (error) {
    console.error("Error processing image:", error);
    return null;
  }
  
  return metadata;
}

module.exports = processImages;