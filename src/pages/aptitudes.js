import * as React from "react"
import Layout from "../components/layout" 
import Seo from "../components/seo"
import { aptitudes} from '../styles/index.module.css'
import { graphql } from "gatsby"
import Progresbar from "../components/progresbar"
import { useInView } from 'react-intersection-observer';

export default function Aptitudes({data}){

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      });

    return(
        <Layout>
            <div className={aptitudes}>
            <h3>Aptitudes</h3>
            <div dangerouslySetInnerHTML={{ __html: data.dataJson.aptitudes[0].texto }}/>
            <br />  <br />  <br />
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

export const Head = () => (<Seo/>) 

export const data = graphql`
    query {
      dataJson {
        aptitudes {
          texto
        }
        tecnologias {
          stack
          progress
        }
      }
    }
  `
