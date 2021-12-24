export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61c52b3d95163485a6ace8a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-muupyyxk',
                  apiId: '1ea24b67-7678-4e9b-97e7-d808da8abbe7'
                },
                {
                  buildHookId: '61c52b3e30f2066a7e46e6c2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bficd9sv',
                  apiId: '345d04a4-9789-4f9f-bb19-a88535b664d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/san-dev001/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bficd9sv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
