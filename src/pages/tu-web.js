import * as React from "react"
import Layout from "../components/layout" 
import Seo from "../components/seo"
import { Row, Col, Card } from 'react-bootstrap';
import {gitywsp} from '../styles/proyectos.module.css'
import { aptitudes, perfil} from '../styles/index.module.css'
import { Link } from "gatsby";

export default function Tuweb(){

    const [height, setHeight] = React.useState(0);
    const [width, setWidth] = React.useState(0);
  
    React.useEffect(() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }, []);
  
    const style = {
      position: "static",
      top: 0,
      left: 0,
      height: "800px",
      width: "800px",
      backgroundColor: "black",
      color: "#0F0",
      overflow: "hidden",
      fontSize: "1em",
      zIndex: "-1",
      fontFamily: "monospace",
      transform: "rotate(90deg)",
    };
  
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  
    const generateChar = () => {
      return chars[Math.floor(Math.random() * chars.length)];
    };
  
    const [columns, setColumns] = React.useState([]);
  
    React.useEffect(() => {
      const newColumns = [];
      for (let i = 0; i < Math.floor(width / 20); i++) {
        const newChars = [];
        for (let j = 0; j < Math.floor(height / 20); j++) {
          newChars.push(generateChar());
        }
        newColumns.push(newChars);
      }
      setColumns(newColumns);
    }, [height, width]);
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setColumns((cols) => {
          const newCols = [...cols];
          for (let i = 0; i < newCols.length; i++) {
            if (Math.random() > 0.95) {
              newCols[i] = newCols[i].slice(1);
              newCols[i].push(generateChar());
            }
          }
          return newCols;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return(

        <Layout>
        <section className={aptitudes} id="info-section">
        <br />
        <div style={{height:"200px", overflow: "hidden", border: "#beb8b8 1px solid", borderRadius:"5px"}}>
                <div style={style}>
                {columns.map((chars, index) => (
                    <div key={index}>{chars.join("")}</div>
                ))}
                </div>
          
        </div>
           
        
        
        
        <div className={perfil}>
        <h3>Lo primero en el desarrollo web:<br />¿Como empiezo?</h3>
        
        <p>A la hora de desarrollar una página web, es importante elegir la herramienta adecuada para construir y gestionar su contenido. Las opciones más comunes son WordPress, handless CMS y la programación personalizada.</p>
       <p>Es esencial elegir la herramienta adecuada al iniciar un proyecto web porque puede tener un impacto significativo en la eficiencia, el tiempo y los costos de desarrollo, así como en el rendimiento y la escalabilidad de la aplicación final. Cada herramienta tiene sus propias fortalezas y debilidades, y no todas son adecuadas para todos los proyectos. Por ejemplo, si necesita crear un sitio web simple sin muchas funcionalidades, puede ser más rápido y fácil usar una plataforma CMS. Sin embargo, si está construyendo una aplicación web compleja y personalizada, puede necesitar una herramienta de desarrollo web personalizada.</p>
       <p>
Además, elegir la herramienta correcta también puede tener un impacto en la calidad del producto final. Si elige una herramienta que no sea adecuada para el proyecto, puede enfrentar problemas como falta de escalabilidad, problemas de seguridad y errores de rendimiento. Por lo tanto, es importante hacer una investigación exhaustiva sobre las opciones disponibles y elegir la herramienta adecuada para satisfacer las necesidades del proyecto y los objetivos comerciales.</p>
       </div>
       
       <div className={perfil}>
        <h3>¿WordPress, headless CMS o programación? ¿Cuál elegir?</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>WordPress</Card.Title>
                <Card.Text>
                  WordPress es un CMS muy popular que se enfoca en la facilidad de uso y la flexibilidad. Es ideal para sitios web de contenido estático, blogs y tiendas en línea pequeñas.
                </Card.Text>
                <Link href="#">Leer más</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Headless CMS</Card.Title>
                <Card.Text>
                  Un headless CMS es una plataforma de gestión de contenido que se enfoca en la creación y administración de contenido. La presentación del contenido se realiza por separado, lo que permite mayor flexibilidad y escalabilidad.
                </Card.Text>
                <Link href="#">Leer más</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Programación</Card.Title>
                <Card.Text>
                  La programación a medida implica la creación de un sitio web desde cero utilizando tecnologías y lenguajes de programación personalizados. Es ideal para proyectos de gran escala y alta complejidad.
                </Card.Text>
                <Link href="#">Leer más</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
        
        <div>
        <h3>Por qué elegir un handless CMS para el desarrollo web: la mejor opción para escalabilidad y rendimiento</h3>
        <p>Un headless CMS te ofrece las siguientes ventajas:</p>
        <ul>
          <li>Flexibilidad para adaptarse a diferentes necesidades de diseño y presentación.</li>
          <li>Escalabilidad para manejar grandes volúmenes de contenido y tráfico.</li>
          <li>Seguridad y control total sobre el sitio web.</li>
          <li>Facilidad de integración con otras herramientas y sistemas.</li>
        </ul>
        <p>Cuando se trata de desarrollo web, elegir la herramienta adecuada es esencial para el éxito del proyecto. Aunque hay varias opciones disponibles, una de las opciones más populares y efectivas es utilizar un handless CMS. A diferencia de WordPress o la programación personalizada, un handless CMS ofrece una solución más escalable, segura y rápida para el desarrollo web.</p>  <p>

Al elegir un handless CMS para su proyecto, podrá disfrutar de una plataforma altamente personalizable que le permitirá crear una aplicación web de alta calidad que se adapte perfectamente a sus necesidades y objetivos comerciales. Además, un handless CMS es ideal para proyectos que requieren una alta escalabilidad y rendimiento, lo que lo hace perfecto para aplicaciones web complejas y de gran escala.
</p>  <p>
En resumen, si está buscando una solución eficiente y efectiva para el desarrollo web, un handless CMS es una excelente opción. Al elegir esta herramienta, puede estar seguro de que su proyecto se construirá de manera segura y escalable, y que cumplirá con sus objetivos comerciales y de calidad. </p>
        <p>¡Echa un vistazo a mi <a className={gitywsp} href="https://github.com/KrohEsteban">GitHub</a> para ver cómo he implementado headless CMS en mis proyectos web!</p>
    </div>
    </section>
   
        </Layout>
    )
}

export const Head = () => (<Seo/>)