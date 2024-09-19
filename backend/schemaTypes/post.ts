import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artículos',
  type: 'document',
  groups: [
    {
        name: 'seo',
        title: 'SEO',
    },
    {
        name: 'post',
        title: 'Artículo',
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
      title: 'Título del artículo',
      type: 'string',
      group: 'post'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      group: 'post',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categoría del artículo',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post-category'}}],
      options: {
        layout: 'tags'
      },
      group: 'post'
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal del artículo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'post'
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto del texto para tarjeta en listado',
      description: '*Pegar en este campo la parte inicial del artículo',
      type: 'text',
      group: 'post'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'post'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'post'
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
