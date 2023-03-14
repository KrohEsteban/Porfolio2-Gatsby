/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const TemplateProyects = path.resolve("./src/templates/templateproyects.js")

  const result = await graphql(`
        query {
            dataJson {
                project {
                    slug
                    titulo
                    parrafo
                    stack
                    texto
                    urlexterna
                    imagen {
                        childrenImageSharp {
                          gatsbyImageData 
                        }
                      }
                    imagencel {
                        childrenImageSharp {
                          gatsbyImageData 
                        }
                      }

                }
            }
        }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.dataJson.project.map((item => {

    createPage({
      path: `${item.slug}`,
      component: TemplateProyects,
      context: {
        slug: item.slug,
        titulo: item.titulo,
        parrafo: item.parrafo,
        stack: item.stack,
        texto: item.texto,
        urlexterna: item.urlexterna,
        imagen: item.imagen,
        imagencel: item.imagencel,
      }
    })
  }))
}