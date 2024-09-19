export default {
  name: 'empresa',
  title: 'Datos de la empresa',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Nombre de la empresa',
      type: 'string'
    },
    {
      name: 'brandLogo',
      title: 'Logo de la empresa para el menú principal',
      type: 'image',
      options: {
          hotspot: true,
      },
    },
    {
      name: 'brandIndustry',
      title: 'Giro o industria',
      type: 'string',
    },
    {
      name: 'brandTagLine',
      title: 'Eslogan',
      type: 'string',
    },
    {
      name: 'brandPhone',
      title: 'Teléfono',
      description: '*Escribir solo los 10 dígitos, sin lada y sin espacios',
      type: 'string',
    },
    {
      name: 'brandEmail',
      title: 'Correo electrónico',
      type: 'string',
    },
    {
      name: 'brandAddress',
      title: 'Dirección de oficinas',
      type: 'string',
    },
    {
      name: 'brandAddressUrl',
      title: 'URL de Google Maps de las oficinas',
      type: 'string',
    },
    {
      name: 'footLogo',
      title: 'Logo de la empresa para el pie del sitio',
      type: 'image',
      options: {
          hotspot: true,
      },
    },
  ]
}