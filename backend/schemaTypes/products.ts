import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Productos',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'product',
      title: 'Producto',
    },
    {
      name: 'logo',
      title: 'Logo',
    },
    {
      name: 'color',
      title: 'Color',
    },
  ],
  fields: [
    defineField({
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    }),
    defineField({
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule) =>
        rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
    }),
    defineField({
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      title: 'Nombre del producto',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'product',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal del producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product',
    }),
    defineField({
      name: 'introImage',
      title: 'Imagen de introducción',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product',
    }),
    defineField({
      name: 'introTitle',
      title: 'Título de introducción',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'introRichText',
      title: 'Descripción de introducción',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'introProductWeb',
      title: 'Sitio web del producto',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'introProductBrochure',
      title: 'Brochure del producto',
      type: 'file',
      group: 'product',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categoría del producto',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      options: {
        layout: 'tags',
      },
      group: 'product',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'product',
    }),
    defineField({
      name: 'body',
      title: 'Descripción del producto',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'logoImg',
      title: 'Logo',
      type: 'image',
      group: 'logo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'characteristicsTitle',
      title: 'Título de Características',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'characteristicsRichText',
      title: 'Descripción de Características',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'characteristicsSpecifications',
      title: 'Especificaciones',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'divisorImg',
      title: 'Divisor',
      type: 'image',
      group: 'product',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'amenitiesTitle',
      title: 'Título de la sección amenidades',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenidades',
      type: 'array',
      group: 'product',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icono',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
      validation: (rule) => rule.max(3).warning('Un máximo de 10 amenidades'),
    }),
    defineField({
      name: 'mapTitle',
      title: 'Título de sección mapa',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'mapRichText',
      title: 'Descripción sección del mapa',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'mapLink',
      title: 'Link de google maps del mapa',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'map',
      title: 'Iframe del mapa',
      type: 'text',
      group: 'product',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galería de imágenes de sección',
      group: 'product',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'color',
      title: 'Color destacado de producto',
      type: 'color',
      group: 'color',
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
