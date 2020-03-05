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
                  buildHookId: '5e61793c9fa9d17d47d108c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio2222-studio',
                  apiId: '23ad5332-12c6-48d5-b4d6-99fac359987c'
                },
                {
                  buildHookId: '5e61793c71e570b9ef12e31e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio2222',
                  apiId: 'a1208b53-ffdd-4593-957b-fcc5a253121f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-portfolio2222',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio2222.netlify.com',
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
