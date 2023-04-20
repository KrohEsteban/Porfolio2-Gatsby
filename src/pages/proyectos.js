import { graphql, Link } from 'gatsby'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from '../components/layout'
import {gitywsp, proyectitle, cuadrocel, cuadrodescktop, proyectcard} from '../styles/proyectos.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

export default function Proyectos({data}) {

  

  return (
   
    <Layout>
      <div className={proyectitle}>
        <h3>Proyectos</h3>
        <p>Estos son algunos de los proyectos en los que he trabajado en este ultimo tiempo.</p>
        <p>Podes encontrar los proyectos en la plataforma de Git Hub : <a className={gitywsp} href="https://github.com/KrohEsteban">https://github.com/KrohEsteban</a></p>
        <p>Por cualquier consulta me pueden escribir al whatsapp personal: <a className={gitywsp} href="https://api.whatsapp.com/send?phone=+542954442060&text=Hola, necesito más informacion sobre las páginas web!" target="_blank" rel="noopener noreferrer">+542954442060</a></p>
        <p>O mandarme un correo a: <a className={gitywsp} href="mailto:krohesteban@gmail.com?Subject=Me%20contacto%20desde%20su%20página%20web" target="_blank" rel="noopener noreferrer">krohesteban@gmail.com</a></p>
      </div>

    {data.dataJson.project.map((item)=>{
      
      const image=getImage(item.imagen.childrenImageSharp[0].gatsbyImageData)
      const imagecel=getImage(item.imagencel.childrenImageSharp[0].gatsbyImageData)

      return(
        
          <Container className={proyectcard} key={item.titulo}>
            <Row>
              <Col xs ="12" md="6" className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h4> <Link className={gitywsp} to={item.slug}>{item.titulo}</Link> </h4>
                  <h5>{item.stack}</h5>
                  <p>{item.parrafo}</p>
                </div>
                

              </Col>
              <Col  xs ="12" md="6" className="d-flex align-items-center justify-content-center" > 
                
                <GatsbyImage image={image} alt={item.titulo} 
                  placeholder="blurred"
                  layout="constrained"
                  className={cuadrodescktop}
                />
                
                <GatsbyImage image={imagecel} alt={item.titulo} 
                  placeholder="blurred"
                  layout="constrained"
                  className={cuadrocel}
                />

              </Col>
            </Row>
          

          </Container>

       
      )
    })

    }


        
    </Layout>
        
   
  )
}

export const Head = () => (<Seo />)

export const data = graphql`
    query {
      dataJson {
        project {
          imagen {
            childrenImageSharp {
              gatsbyImageData (height: 870, width: 1547)
            }
          }
          imagencel {
            childrenImageSharp {
              gatsbyImageData (width: 392, height: 698)
            }
          }
          parrafo
          stack
          titulo
          slug
        }
      }
    }
    
  `