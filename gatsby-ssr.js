/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 * 
 * Agrega etiqueta "lang = es" en el html
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes }) => {

  setHtmlAttributes({ lang: `es` })

  
}

