import React from 'react'
import Layout from '../components/layout'
import Carousel from 'react-bootstrap/Carousel';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {  graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/seo';



export default function Rollers() {
  
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        rollercarrousel {
          titulo
          parrafo
          imagen {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        rollertext {
          title
          body
        }
      }
    }
  `)


  return (

    <Layout>
      <Carousel style={{padding:"20px", maxWidth:"800px", margin:"0 auto"}}>
      {data.dataJson.rollercarrousel.map((item)=>{
        const image=getImage(item.imagen.childrenImageSharp[0].gatsbyImageData)
        return(
          <Carousel.Item key={item.titulo} className='box'>
          <GatsbyImage image={image} alt={item.titulo} 
            placeholder="blurred"
            layout="constrained"
            className="d-block w-100"
            />  
            <Carousel.Caption >
              <h3 style={{textShadow:" 2px 2px black"}}>{item.titulo}</h3>
              <p style={{textShadow:" 2px 2px black"}}>{item.parrafo}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
        
      })}
      
      </Carousel>

      <div>
        <h3 style={{padding:"80px 0px", textAlign:"center"}}>{data.dataJson.rollertext[0].title}</h3>
        
        <div style={{margin: "0 auto", maxWidth: "800px"}} dangerouslySetInnerHTML={{ __html: data.dataJson.rollertext[0].body }}/>
        
      </div>  
    </Layout>
        
  
  )
}

export const Head = () => (<Seo />)