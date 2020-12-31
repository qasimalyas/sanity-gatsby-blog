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
                  buildHookId: '5fee2369352e130a8be6bf27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1cve996u',
                  apiId: '766ea471-40ce-457d-bef4-92b6bdf0f325'
                },
                {
                  buildHookId: '5fee236aff43c63aed868c6e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ri99n3at',
                  apiId: '31117ca4-0236-4ad7-97f8-7114e8b51397'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qasimalyas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ri99n3at.netlify.app', category: 'apps' }
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
