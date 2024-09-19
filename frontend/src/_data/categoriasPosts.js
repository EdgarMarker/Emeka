const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  // Obtener todas las categorías y sus productos asociados
  const data = await client.fetch(`*[_type == "post-category"]{
    titleseo,
    descseo,
    keyseo,
    title,
    slug,
    "posts": *[_type == "post" && references(^._id)]{
      title,
      slug,
      publishedAt,
      "author": author->name,
      excerpt,
      mainImage{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};