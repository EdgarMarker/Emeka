const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "category"]{
  titleseo,
  descseo,
  keyseo,
  title,
    slug,
  "products": *[_type == "products" && references(^._id)]{
    title,
    slug,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
  }
}`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};