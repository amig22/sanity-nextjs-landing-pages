export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9497efc4dc6d6e47a87280',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ifw9na3w',
                  apiId: 'b2b6f04e-f6aa-4788-9849-4aa43628677e'
                },
                {
                  buildHookId: '5d9497ef77aa1d609d8a8c82',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3q5r6h7s',
                  apiId: 'fbd022d0-057f-4059-9b57-9b8a26215de0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amig22/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3q5r6h7s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
