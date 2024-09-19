const client = require('../utils/sanityClient');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "empresa"]{
    brandName,
    brandLogo{
    "media": asset->{url},
    "alt": asset->{altText}
    },
    brandIndustry,
    brandTagLine,
    brandPhone,
    brandEmail,
    brandAddress,
    brandAddressUrl,
    footLogo{
    "media": asset->{url},
    "alt": asset->{altText}
    },
    }`);

  return await Promise.all(data.map(async item => {
    return {
      ...item,
      
    };
  }));
};