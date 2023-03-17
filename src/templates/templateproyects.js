import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import {gitywsp, cuadrocel, cuadrodescktop, proyectcard} from '../styles/proyectos.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap'

export default function TemplateProyects (props) {
  

  const {pageContext} = props
  const {titulo, stack, texto, urlexterna, imagen, imagencel, fecha} = pageContext

  const image=getImage(imagen.childrenImageSharp[0].gatsbyImageData)
  const imagecel=getImage(imagencel.childrenImageSharp[0].gatsbyImageData)
  console.log(image)
  console.log(pageContext)

  return (
    <Layout >
      <Container className={proyectcard}>
            <Row style={{padding:"20px", maxWidth:"700px", margin:"0 auto"}}>
              <GatsbyImage image={image} alt={titulo} 
                  placeholder="blurred"
                  layout="constrained"
                  className={cuadrodescktop}

                />
            </Row>
            <Row>
              
              <Col xs ="12" md="6" className="d-flex align-items-center">
                <div className="text-center">
                  <h3>{titulo}</h3>
                  <h4>{stack}</h4>
                  <h4>{fecha}</h4>
                  <h5><Link className={gitywsp} to={urlexterna}>{urlexterna}</Link></h5>
                  
                  <p className='pt-5 text-start '><div dangerouslySetInnerHTML={{ __html: texto }}/></p>
                </div>
                

              </Col>
              <Col  xs ="12" md="6" className="d-flex align-items-center justify-content-center" 
              style={{padding:"20px", maxWidth:"350px", margin:"0 auto"}}> 
                
                
                
                <GatsbyImage image={imagecel} alt={titulo} 
                  placeholder="blurred"
                  layout="constrained"
                  className={cuadrocel}
                />

              </Col>
            </Row>
          

          </Container>
    </Layout>
  )
}

export const Head = () => (<Seo />)

