const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "post"]{
    titleseo,
    descseo,
    keyseo,
    title,
    slug,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
    excerpt,
    body[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};