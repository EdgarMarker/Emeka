export default {
    name: 'social',
    title: 'Social Media',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'facebook',
        title: 'URL cuenta de Facebook',
        type: 'string'
      },
      {
        name: 'instagram',
        title: 'URL cuenta de Instagram',
        type: 'string'
      },
      {
        name: 'metaPixel',
        title: 'Pixel de Meta',
        description: '*Pegar el código completo, incluidas las etiquetas <script></script>',
        type: 'text'
      },
      {
        name: 'googleTag',
        title: 'Google Tag',
        description: '*Pegar el código completo, incluidas las etiquetas <script></script>',
        type: 'text'
      },
    ],

    preview: {
        select: {
          title: 'Social Media',
        },
      },
    
  }