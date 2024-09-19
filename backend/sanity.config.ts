import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'backend',

  projectId: 'nprovn8b',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Empresa')
        .id('empresaAll')
        .child(
          S.list()
          // Sets a title for our new list
          .title('Ajustes para la empresa')
          // Add items to the array
          // Each will pull one of our new singletons
          .items([
            S.listItem()
              .title('Datos de la Empresa')
              .child(S.document().schemaType('empresa').documentId('empresa')),
            S.listItem()
              .title('Social Media')
              .child(S.document().schemaType('social').documentId('social')),
            S.listItem()
              .title('Aviso de Privacidad')
              .child(S.document().schemaType('aviso').documentId('aviso')),
          ])
        ),
        S.listItem()
        .title('Secciones')
        .id('sectionsAll')
        .child(
          S.list()
          // Sets a title for our new list
          .title('Ajustes para las secciones')
          // Add items to the array
          // Each will pull one of our new singletons
          .items([
            S.listItem()
              .title('Inicio')
              .id('home')
              .child(S.document().schemaType('inicio').documentId('inicio')),
            S.listItem()
              .title('Nosotros')
              .id('about')
              .child(S.document().schemaType('nosotros').documentId('nosotros')),
            S.listItem()
              .title('Productos')
              .id('productos')
              .child(S.document().schemaType('productos').documentId('productos')),
            S.listItem()
              .title('Artículos')
              .id('blog')
              .child(S.document().schemaType('blog').documentId('blog')),
            S.listItem()
              .title('Contacto')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),
          ])
        ),

        // Crea un nuevo grupo llamado "Productos"
        S.listItem()
        .title('Lista de productos')
        .child(
          S.list()
            .title('Gestión de Productos')
            .items([
              S.listItem()
                .title('Productos')
                .schemaType('products') // Asegúrate de que 'product' corresponde al nombre del schema en tu esquema de productos
                .child(S.documentTypeList('products').title('Productos')),
              S.listItem()
                .title('Categorías')
                .schemaType('category') // Asegúrate de que 'category' corresponde al nombre del schema en tu esquema de categorías
                .child(S.documentTypeList('category').title('Categorías'))
            ])
        ),

        // Crea un nuevo grupo llamado "Productos"
        S.listItem()
        .title('Lista de artículos de blog')
        .child(
          S.list()
            .title('Gestión de artículos')
            .items([
              S.listItem()
                .title('Artículos')
                .schemaType('post') // Asegúrate de que 'product' corresponde al nombre del schema en tu esquema de productos
                .child(S.documentTypeList('post').title('Artículos')),
              S.listItem()
                .title('Categorías')
                .schemaType('post-category') // Asegúrate de que 'category' corresponde al nombre del schema en tu esquema de categorías
                .child(S.documentTypeList('post-category').title('Categorías')),
                S.listItem()
                .title('Autores')
                .schemaType('author') // Asegúrate de que 'category' corresponde al nombre del schema en tu esquema de categorías
                .child(S.documentTypeList('author').title('Autores'))
            ])
        ),


        // We also need to remove the new singletons from the main list
        ...S.documentTypeListItems().filter(
          (listItem) => !['inicio', 'nosotros', 'productos', 'blog', 'contact', 'aviso', 'empresa', 'social', 'products', 'category', 'author', 'post', 'post-category'].includes(listItem.getId())
        ),


      ]),
    }),

    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
