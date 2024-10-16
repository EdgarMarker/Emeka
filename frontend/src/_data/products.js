const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "products"]{
    titleseo,
    descseo,
    color{hex},
    keyseo,
    title,
    place,
    slug,
    publishedAt,
    galleryImages[]{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
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
    introImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introTitle,
    introRichText,
    introProductWeb,
    introProductBrochure,
    logoImg{
        "media": asset->{url},
        "alt": asset->{altText}
    },
    characteristicsTitle,
    characteristicsRichText,
    characteristicsSpecifications,
    divisorImg{
        "media": asset->{url},
        "alt": asset->{altText},
        "desc": asset->{description}
    },
     amenitiesTitle,
     "amenities": amenities[]{
        title,
        icon{
          "media": asset->{url},
          "alt": asset->{altText
        }
    },
  },
    mapTitle,
    mapRichText,
    mapLink,
    map,
}`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};
