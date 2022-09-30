import * as React from "react"
import Layout from "../components/layout" 
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import {perfil, fotoperfil, textoperfil, presentacion, aptitudes} from '../styles/index.module.css'
import "bootswatch/dist/slate/bootstrap.min.css"
import { graphql, useStaticQuery } from "gatsby"
import Progresbar from "../components/progresbar"
import { useInView } from 'react-intersection-observer';

export default function Home(){

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        presentacion {
          title
          body
        }
        tecnologias {
          stack
          progress
        }
      }
    }
  `)

    
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

   
  return(
 
    <Layout>
      <div className={perfil}>
    
    
        <StaticImage src="../images/perfil.jpg" alt="Foto de perfil de Esteban Kroh" 
          className={fotoperfil}
          placeholder="blurred"
          layout="fixed"
          width={200}
          />
                
                  
        <div className={textoperfil}>
          <h1>Esteban Kroh</h1>
          <h2>Programador web</h2>
          <div>
              <h2>Contacto: </h2>
              <h2>
                <a href="https://www.linkedin.com/in/esteban-kroh-581ab9226/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i><p class="visually-hidden">LinkedIn</p></a>
                <a href="https://api.whatsapp.com/send?phone=+542954442060&text=Hola, necesito más informacion sobre las páginas web!" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i><p class="visually-hidden">WhatsApp</p></a>
                <a href="https://github.com/KrohEsteban" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><p class="visually-hidden">GitHub</p></a>               
              </h2>
          </div>
        </div>
      </div>
      <div className={presentacion}>
        <h3>{data.dataJson.presentacion[0].title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.dataJson.presentacion[0].body }}/>
        
        
      </div>  
      <div className={aptitudes}>
        <h3>Aptitudes</h3>
        
        <div ref={ref}>
           {data.dataJson.tecnologias.map((item)=>{
            return(
            <div key={item.stack}>
              <Progresbar stack={item.stack} progress={item.progress} inView={inView}/>
            </div>

            )
          })}
        </div>
        
        
      </div>
          
        
        
      
    </Layout>

  )
}

export const Head = () => (<Seo />)
