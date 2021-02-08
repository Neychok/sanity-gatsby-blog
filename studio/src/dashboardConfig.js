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
                  buildHookId: '602091d8bcf6cdaa5d01c0b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cmz5p83t',
                  apiId: '571c300a-41b2-46aa-8510-11476f40b044'
                },
                {
                  buildHookId: '602091d9b9896fc4d84c3e82',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bcj84rtc',
                  apiId: 'fed93b82-43ca-4ed8-bbc2-96e38a76ccb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Neychok/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bcj84rtc.netlify.app', category: 'apps' }
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
