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
  ],
  fields: [
    defineField({
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: rule => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
    }),
    defineField({
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: rule => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
    }),
    defineField({
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo'
    }),
    defineField({
      name: 'title',
      title: 'Nombre del producto',
      type: 'string',
      group: 'product'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'product'
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal del producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product'
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categoría del producto',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      options: {
        layout: 'tags'
      },
      group: 'product'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'product'
    }),
    defineField({
      name: 'body',
      title: 'Descripción del producto',
      type: 'blockContent',
      group: 'product'
    }),
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