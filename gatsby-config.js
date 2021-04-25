module.exports = {
    siteMetadata: {
        siteUrl: `https://www.jadechen170.github.io`,
        title: `Jade Chen`,
        description: `Personal Website`,
        author: `Jade Chen`,
    
        menuLinks: [
          {
            title: "Jade Chen",
            link: "/"
          },
          {
            title: "Projects",
            link: "/projects/"
          },
          {
            title: "Other Work",
            link: "/other-work/"
          },
          {
            title: "About",
            link: "/about/"
          }
        ],
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                  allSitePage {
                    nodes {
                      path
                    }
                  }
                }`,
      
              resolveSiteUrl: ({site, allSitePage}) => {
                //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
                return site.siteMetadata.siteUrl
              },
              serialize: ({ site, allSitePage }) =>
                allSitePage.nodes.map(node => {
                  return {
                    url: `${site.siteMetadata.siteUrl}${node.path}`,
                    changefreq: `yearly`,
                    priority: 0.7,
                  }
                })
            }
          }
    ]
}