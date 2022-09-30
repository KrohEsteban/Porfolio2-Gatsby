import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


export default function NotFoundPage () {

  return (
  <Layout>
    <h1>404: La página que buscas no existe...</h1>
    
  </Layout>
 )
} 

export const Head = () => (<Seo />)


