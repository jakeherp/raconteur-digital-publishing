const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const reportTemplate = path.resolve(`./src/templates/report.tsx`)

  return graphql(`
    {
      allContentfulReport {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const reports = result.data.allContentfulReport.edges

    reports.forEach(report => {
      createPage({
        path: `${report.node.slug}`,
        component: reportTemplate,
        context: {
          slug: report.node.slug,
        },
      })
    })
  })
}
