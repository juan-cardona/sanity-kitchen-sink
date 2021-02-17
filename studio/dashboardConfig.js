export default {
  widgets: [
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
                  buildHookId: '602d6c344a4290308bcc80a6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qmx6ivdj',
                  apiId: 'd561a90f-e6b0-4e7e-b32f-f9291f2ec638'
                },
                {
                  buildHookId: '602d6c34586cbd36ec02bb05',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kynbqhji',
                  apiId: '5d1ddac3-e76d-4430-9b5e-3daf1cf03d11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juan-cardona/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kynbqhji.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
