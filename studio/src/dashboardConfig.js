export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e5127b1fa14eb05ffc915e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yttnni17',
                  apiId: 'c9f56a92-c25b-4667-b50d-6ced032b1b50'
                },
                {
                  buildHookId: '5e5127b222193a1587c0a18a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rsk6y4h7',
                  apiId: '65493ac7-4b7f-45b4-aaa3-096cd5f9160c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/50bbx/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rsk6y4h7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
