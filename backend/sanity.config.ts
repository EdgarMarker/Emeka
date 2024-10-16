import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  name: 'default',
  title: 'backend',

  projectId: 'nprovn8b',
  dataset: 'production',

  plugins: [
    colorInput(),
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
                  .title('Ajustes para la empresa')
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
                  .title('Ajustes para las secciones')
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
            S.listItem()
              .title('Lista de desarrollos')
              .child(
                S.list()
                  .title('Gestión de Productos')
                  .items([
                    S.listItem()
                      .title('Desarrollos')
                      .schemaType('products')
                      .child(S.documentTypeList('products').title('Productos')),
                    S.listItem()
                      .title('Categorías')
                      .schemaType('category')
                      .child(S.documentTypeList('category').title('Categorías')),
                  ])
              ),
            S.listItem()
              .title('Lista de artículos de blog')
              .child(
                S.list()
                  .title('Gestión de artículos')
                  .items([
                    S.listItem()
                      .title('Artículos')
                      .schemaType('post')
                      .child(S.documentTypeList('post').title('Artículos')),
                    S.listItem()
                      .title('Categorías')
                      .schemaType('post-category')
                      .child(S.documentTypeList('post-category').title('Categorías')),
                    S.listItem()
                      .title('Autores')
                      .schemaType('author')
                      .child(S.documentTypeList('author').title('Autores')),
                  ])
              ),
            // Filtrar los elementos de la lista
            ...S.documentTypeListItems().filter(
              (listItem) => {
                const id = listItem.getId();
                return id && !['inicio', 'nosotros', 'productos', 'blog', 'contact', 'aviso', 'empresa', 'social', 'products', 'category', 'author', 'post', 'post-category'].includes(id);
              }
            ),
          ]),
    }),

    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
