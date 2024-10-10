interface ArrayValidationRule {
    max: (n: number) => any
    error: (message: string) => any,
    warning: (message: string) => any
}
export default {
    name: 'inicio',
    title: 'Inicio',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'hero',
            title: 'Hero',
        },
        {
            name: 'intro',
            title: 'Introducción',
        },
        {
            name: 'prod',
            title: 'Productos recientes',
        },
    ],
    fields: [
        {
            name: 'titleseo',
            title: 'Título para posicionar esta página en buscadores',
            type: 'string',
            description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
            group: 'seo',
            validation: (rule: ArrayValidationRule) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
        },
        {
            name: 'descseo',
            title: 'Descripción para posicionar esta página en buscadores',
            type: 'text',
            description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
            group: 'seo',
            validation: (rule: ArrayValidationRule) => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
        },
        {
            name: 'keyseo',
            title: 'Palabras clave para posicionar esta página en buscadores',
            type: 'text',
            description: '*Separar palabras con comas',
            group: 'seo'
        },
        {
            name: 'heroH1',
            title: 'Subtítulo de apertura',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'heroH2',
            title: 'Título principal',
            type: 'blockContent',
            group: 'hero',
            description: '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)'
        },
        {
            name: 'heroP',
            title: 'Descripción',
            type: 'text',
            group: 'hero'
        },
        {
            name: 'heroBtn',
            title: 'Texto del botón',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'heroImg',
            title: 'Imagen principal',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroGallery1',
            title: 'Galería de imágenes imagen numero 1',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroGallery2',
            title: 'Galería de imágenes imagen numero 2',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroGallery3',
            title: 'Galería de imágenes imagen numero 3',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroGallery4',
            title: 'Galería de imágenes imagen numero 4',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'introRichText1',
            title: 'Descripción para la introducción primera parte',
            type: 'blockContent',
            group: 'intro'
        },
        {
            name: 'introBand1',
            title: 'Tira de imágenes para la introducción',
            type: 'array',
            group: 'intro',
            of: [{type: 'image'}]
        },
        {
            name: 'introBand2',
            title: 'Tira de imágenes para la introducción',
            type: 'array',
            group: 'intro',
            of: [{type: 'image'}]
        },
        {
            name: 'intro2',
            title: 'Segunda sección de introducción',
            group: 'intro',
            type: 'object',
            fields: [
                {
                    name: 'intro2Title',
                    title: 'Título para la segunda introducción',
                    type: 'string',
                },
                {
                    name: 'intro2RichText',
                    title: 'Descripción para la introducción segunda parte',
                    type: 'blockContent',
                },
                {
                    name: 'intro2Img',
                    title: 'Imagen',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }
            ]
        },
        {
            name: 'recentProdRef',
            type: 'object',
            group: 'prod',
            fields: [
              {
                title: 'Productos recientes',
                name: 'recentProducts',
                type: 'array',  // Cambiado de 'reference' a 'array'
                of: [{type: 'reference', to: [{type: 'products'}]}]  // Especifica que es un array de referencias
              }
            ]
          }
    ]
  }