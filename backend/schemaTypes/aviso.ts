export default {
    name: 'aviso',
    title: 'Aviso de Privacidad',
    type: 'document',
    fields: [
      {
        name: 'heroH1',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'heroH1',
          maxLength: 96,
        }
      },
      {
        name: 'avisoText',
        title: 'Aviso de privacidad',
        type: 'blockContent',
        description: '*Agregar texto con formato normal y subtítulos con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)'
    },
    ]
  }