module.exports = {
  /* -----------------------------------------------------------------
              Metadata del sitio (lo que aparece en el buscador)
    --------------------------------------------------------------------*/
  siteMetadata: {
    title: `Esteban Kroh, programador web.`,
    description: `Página de perfil de Esteban Kroh, programador web de Santa Rosa, La Pampa.`,
    siteUrl: `https://www.estebankroh.com/`,
  },
  plugins: [
    /* -----------------------------------------------------------------
                      para minificar el html en build
    --------------------------------------------------------------------*/
    `gatsby-plugin-minify`,
    /* -----------------------------------------------------------------
                      para generar el mapa del sitio
    --------------------------------------------------------------------*/
    `gatsby-plugin-sitemap`,
    /* -----------------------------------------------------------------
                    para generar el robot.txt para google
    --------------------------------------------------------------------*/
    "gatsby-plugin-robots-txt",
    /* -----------------------------------------------------------------
                        para tratar las imagenes
    --------------------------------------------------------------------*/

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /* -----------------------------------------------------------------
            para leer los archivos que trajimos en formato json
    --------------------------------------------------------------------*/
    `gatsby-transformer-json`,
    /* -----------------------------------------------------------------
                    para traer datos de un archivo interno
    --------------------------------------------------------------------*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    /* -----------------------------------------------------------------
      para generar el archivo maniefst (icono en descktop del celu)
    --------------------------------------------------------------------*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Perfil de Esteban Kroh `,
        short_name: `E.K.`,
        start_url: `/`,
        background_color: `#b85b22`,
        theme_color: `#b85b22`,
        display: `standalone`,
        icon: `src/static/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    /* -----------------------------------------------------------------
                  genera la etiqueta metadata start_url
    --------------------------------------------------------------------*/
    `gatsby-plugin-offline`,

    /* -----------------------------------------------------------------
                  crea las paginas dinamicas
    --------------------------------------------------------------------*/
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
