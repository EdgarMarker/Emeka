const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "inicio"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroP,
    heroBtn,
    heroImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    heroGallery1{
      ...,
      _type == 'image' => {
        "media": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroGallery2{
      ...,
      _type == 'image' => {
        "media": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroGallery3{
      ...,
      _type == 'image' => {
        "media": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroGallery4{
      ...,
      _type == 'image' => {
        "media": asset->{
          url,
          "alt": altText
        }
      }
    },
    introRichText1,
    intro2{
      intro2Title,
      intro2RichText,
      intro2Img{
        "media": asset->{url},
        "alt": asset->{altText}
      }
    },
    recentProdRef{
      "recentProducts": recentProducts[]->{
        title,
    slug,
    publishedAt,
    "categories": categories[]->title,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
      }
    }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};