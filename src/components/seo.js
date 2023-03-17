import { graphql, useStaticQuery } from "gatsby"
import React from "react"


export default function Seo ({ title, description, pathname, children }) {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `)
  const { title: defaultTitle, description: defaultDescription, siteUrl, image } = data.site.siteMetadata
    
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }


  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/*<!-- Googel fonts para nombre -->*/}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>

      {/*<-- Font Awesome -->*/}
      <script src="https://kit.fontawesome.com/e73cef28c0.js" crossOrigin="anonymous"></script>
      
      {children}

    </>
  )
}