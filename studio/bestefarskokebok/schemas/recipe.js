export default {
    name: 'recipe',
    title: 'Oppskrift',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        description: 'Navn på oppskriften',
        type: 'string'
      },
      {
        name: 'intructions',
        title: 'Fremgangsmåte',
        description: 'Hvordan lager man retten?',
        type: 'text'
      },
      {
        name: 'duration',
        title: 'Tid',
        description: 'Hvor lang tid tar retten i minutter?',
        type: 'number'
      },
      {
        name: 'vegetarian',
        title: 'Vegetar?',
        type: 'boolean',
        initialValue: false
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
            source: 'name',
            slugify: input => input.toLowerCase().replace(/\s+/g,'-').slice(0,200)
        }
      }
    ]
  }