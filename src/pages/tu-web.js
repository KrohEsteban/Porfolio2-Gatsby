import * as React from "react"
import Layout from "../components/layout" 
import Seo from "../components/seo"
import { Row, Col, Card } from 'react-bootstrap';
import {gitywsp} from '../styles/proyectos.module.css'
import { aptitudes, perfil, bordermatrix, matrix, contactostuweb} from '../styles/index.module.css'
import { Link } from "gatsby";
import { useEffect } from "react";
import { useState } from "react";

export default function Tuweb(){

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [expandedWP, setExpandedWP] = useState(false);
    const [expandedHCMS, setExpandedHCMS] = useState(false);
    const [expandedP, setExpandedP] = useState(false);
  
    useEffect(() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }, []);
  
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  
    const generateChar = () => {
      return chars[Math.floor(Math.random() * chars.length)];
    };
  
    const [columns, setColumns] = useState([]);
  
    useEffect(() => {
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
  
    useEffect(() => {
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
        <div className={bordermatrix}>
                <div className={matrix}>
                {columns.map((chars, index) => (
                    <div key={index}>{chars.join("")}</div>
                ))}
                </div>
          
        </div>
           
        
        
        
        <div className={perfil}>
        <h3>¿Como empezar en el desarrollo web?</h3>
        
        <p>A la hora de desarrollar una página web, es importante elegir la herramienta adecuada para construir y gestionar su contenido. Las opciones más comunes son WordPress, headless CMS y la programación personalizada.</p>
       <p>Es esencial elegir la herramienta adecuada al iniciar un proyecto web porque puede tener un impacto significativo en la eficiencia, el tiempo y los costos de desarrollo, así como en el rendimiento y la escalabilidad de la aplicación final. Cada herramienta tiene sus propias fortalezas y debilidades, y no todas son adecuadas para todos los proyectos. Por ejemplo, si necesita crear un sitio web simple sin muchas funcionalidades, puede ser más rápido y fácil usar una plataforma CMS. Sin embargo, si está construyendo una aplicación web compleja y personalizada, puede necesitar una herramienta de desarrollo web personalizada.</p>
       <p>
Además, elegir la herramienta correcta también puede tener un impacto en la calidad del producto final. Si elige una herramienta que no sea adecuada para el proyecto, puede enfrentar problemas como falta de escalabilidad, problemas de seguridad y errores de rendimiento. Por lo tanto, es importante hacer una investigación exhaustiva sobre las opciones disponibles y elegir la herramienta adecuada para satisfacer las necesidades del proyecto y los objetivos comerciales.</p>
       </div>
       
       <div className={perfil}>
        <h3>¿WordPress, headless CMS o programación? ¿Cuál elegir?</h3>
        <Row>
          <Col md={12} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>WordPress</Card.Title>
                <Card.Text>
                  WordPress es un CMS muy popular que se enfoca en la facilidad de uso y la flexibilidad. Es ideal para sitios web de contenido estático, blogs y tiendas en línea pequeñas.
                </Card.Text> 
                {expandedWP ? <Card.Text><p>WordPress es uno de los sistemas de gestión de contenido más populares y ampliamente utilizados en la actualidad. Ofrece una variedad de opciones y herramientas para la creación de sitios web, y su popularidad se debe en gran parte a su facilidad de uso y accesibilidad. Sin embargo, hay ciertas desventajas que debemos tener en cuenta antes de decidir utilizar WordPress para nuestro sitio web.</p><p>

                Una de las principales desventajas de WordPress es que puede ser bastante lento. Al agregar muchos plugins y características adicionales, la velocidad de carga del sitio web puede verse afectada significativamente. Esto puede ser especialmente problemático para los sitios web de comercio electrónico y aquellos que requieren una alta velocidad de carga.</p><p>

                Otra desventaja de WordPress es la falta de flexibilidad en cuanto a diseño y personalización. Si bien hay muchas plantillas y temas disponibles, puede ser difícil modificarlos o personalizarlos para adaptarse a las necesidades específicas de su sitio web. Esto puede ser especialmente problemático si necesita un diseño único y personalizado para su sitio web.</p><p>

                Además, WordPress es conocido por tener problemas de seguridad. Como es un sistema de código abierto, cualquier persona puede ver el código fuente y encontrar vulnerabilidades o debilidades en el sistema. Esto puede hacer que su sitio web sea vulnerable a ataques de hackers y malware, lo que puede ser muy problemático y costoso de solucionar.</p><p>

                En resumen, WordPress puede ser una gran herramienta para la creación de sitios web, especialmente si necesitas algo rapido y económico. Sin embargo, es importante tener en cuenta sus desventajas y limitaciones antes de decidir utilizarlo para su sitio web. Si necesita un sitio web mas personalizado, de alta velocidad o seguro, puede ser mejor considerar otras opciones.</p>
                <p>Si te decides por esta opción, puedes encontrar una gran variedad de plantillas gratuitas y personalizables para WordPress en <a className={gitywsp} target="_blank" rel="noopener noreferrer" href="https://wordpress.org/themes/">https://wordpress.org.</a> ¡Explora y encuentra el diseño adecuado para tu sitio web!</p></Card.Text> : null}
                <button style={{textDecoration:"underline", color: "#b85b22", background:"none", border: "none"}} onClick={()=>{setExpandedWP(!expandedWP);}}>
                  {expandedWP ? "Leer menos" : "Leer más"}
                </button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={12} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Headless CMS</Card.Title>
                <Card.Text>
                  Un headless CMS es una plataforma de gestión de contenido que se enfoca en la creación y administración de contenido. La presentación del contenido se realiza por separado, lo que permite mayor flexibilidad y escalabilidad.
                </Card.Text>
                {expandedHCMS ? <Card.Text><p>Un headless CMS es una herramienta de gestión de contenido mas actual, que permite a los usuarios crear y editar contenido sin preocuparse por el diseño y la presentación visual. A diferencia de un CMS tradicional como WordPress, un headless CMS separa el contenido de la presentación, lo que significa que el contenido se almacena en una base de datos y se entrega a través de una API a una aplicación o sitio web que lo presenta en un formato personalizado.</p><p>

                Utilizar un headless CMS tiene varias ventajas. En primer lugar, le da a los desarrolladores mayor flexibilidad para construir la aplicación o sitio web de acuerdo a las necesidades del negocio. Al separar el contenido de la presentación, los desarrolladores pueden diseñar una experiencia de usuario única y personalizada. Además, un headless CMS puede ser más escalable y seguro que un CMS tradicional, ya que el contenido se entrega a través de una API y se puede almacenar en la nube.</p><p>
                
                Un headless CMS es muy flexible y puede utilizarse para crear todo tipos de páginas web. Algunos ejemplos incluyen:</p><p>
                <ul>
                <li>Sitios web corporativos: puede crear un sitio web completo para su empresa, que incluya información sobre sus productos o servicios, su equipo, su historia y más.</li>
                <li>Tiendas en línea: puede utilizar un headless CMS para gestionar el contenido de su tienda en línea, incluyendo la descripción de los productos, las imágenes, los precios y las existencias.</li>
                <li>Portales de noticias: puede utilizar un headless CMS para gestionar las noticias de su sitio web, lo que permite a los periodistas publicar artículos fácilmente y a los usuarios buscar noticias por categoría o fecha.</li>
                <li>Sitios web de eventos: puede utilizar un headless CMS para gestionar la información de eventos, incluyendo la fecha, hora, lugar, descripción y más.</li>
                <li>Menu online: los propietarios de restaurantes pueden agregar fácilmente nuevos elementos de menú, ajustar los precios y actualizar la disponibilidad de los artículos en tiempo real. Además, los clientes pueden acceder al menú actualizado en cualquier momento y lugar, lo que aumenta la comodidad y la satisfacción del cliente.</li>
              </ul>
                </p><p>
                En resumen, un headless CMS puede utilizarse para cualquier tipo de sitio web que requiera contenido dinámico y actualizable de manera frecuente. Y es especialmente útil en proyectos web escalables, donde se requiere una mayor flexibilidad y personalización en el diseño y la gestión del contenido.</p><p>

                En resumen, si estás buscando una solución de gestión de contenido que te permita crear y entregar contenido de manera más eficiente, mientras te brinda la flexibilidad y la escalabilidad necesarias para mantener tu aplicación o sitio web en crecimiento, un headless CMS es la mejor opción para vos.</p></Card.Text> : null}
                <button style={{textDecoration:"underline", color: "#b85b22", background:"none", border: "none"}} onClick={()=>{setExpandedHCMS(!expandedHCMS);}}>
                  {expandedHCMS ? "Leer menos" : "Leer más"}
                </button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Programación</Card.Title>
                <Card.Text>
                  La programación a medida implica la creación de un sitio web desde cero utilizando tecnologías y lenguajes de programación personalizados. Es ideal para proyectos de gran escala y alta complejidad.
                </Card.Text>
                {expandedP ? <Card.Text><p>Crear un sitio web con programación personalizada implica un alto nivel de personalización y control, pero también puede ser un proceso más complejo y costoso en comparación con otras opciones de desarrollo web como WordPress o handless CMS.</p><p>

                La programación personalizada permite a los desarrolladores crear una solución web completamente personalizada para un proyecto específico, lo que significa que pueden trabajar con una amplia gama de lenguajes de programación y herramientas de desarrollo para construir una solución única y adaptada a las necesidades del cliente.</p><p>

                Sin embargo, este nivel de personalización también puede llevar más tiempo y esfuerzo, ya que todo debe ser construido desde cero, desde el diseño y la interfaz de usuario hasta la lógica de negocios y la integración de terceros. Además, cualquier actualización o cambio en el futuro también requerirá trabajo personalizado.</p><p>

                Además, la programación personalizada también puede requerir una mayor inversión financiera. Debido al nivel de personalización, el costo de desarrollo puede ser significativamente más alto que otras opciones de desarrollo web. También es importante tener en cuenta los costos continuos, como el alojamiento y el mantenimiento, que pueden ser más costosos debido al trabajo personalizado.</p><p>

                El beneficio principal de la programación personalizada es que le brinda al desarrollador un control total sobre el sitio web. Al crear un sitio web con programación personalizada, el desarrollador puede crear una solución completamente única y adaptada a las necesidades específicas del proyecto y los objetivos comerciales.</p><p>

                Además, la programación personalizada permite un mayor control sobre la funcionalidad y el rendimiento del sitio web. Los desarrolladores pueden optimizar el código para mejorar la velocidad de carga y la eficiencia del sitio web, lo que puede mejorar la experiencia del usuario y el posicionamiento en los motores de búsqueda.</p><p>

                Otro beneficio importante de la programación personalizada es la seguridad. Al crear un sitio web con código personalizado, los desarrolladores pueden implementar medidas de seguridad adicionales que pueden proteger el sitio web contra ataques maliciosos y vulnerabilidades de seguridad conocidas.</p><p>
                En general, la programación personalizada puede ser la mejor opción para proyectos web complejos y personalizados que requieren un alto nivel de control y personalización. Pero, es importante tener en cuenta los costos, el tiempo y la complejidad involucrados en el proceso de desarrollo, y compararlo con otras opciones disponibles antes de tomar una decisión final.</p></Card.Text> : null}
                <button style={{textDecoration:"underline", color: "#b85b22", background:"none", border: "none"}} onClick={()=>{setExpandedP(!expandedP);}}>
                  {expandedP ? "Leer menos" : "Leer más"}
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
        
        <div className={perfil}>
        <h3>Por qué elegir un handless CMS para el desarrollo web: la mejor opción para escalabilidad y rendimiento</h3>
        <p>Un headless CMS te ofrece las siguientes ventajas:</p>
        <ul>
          <li>Flexibilidad para adaptarse a diferentes necesidades de diseño y presentación.</li>
          <li>Escalabilidad para manejar grandes volúmenes de contenido y tráfico.</li>
          <li>Seguridad y control total sobre el sitio web.</li>
          <li>Facilidad de integración con otras herramientas y sistemas.</li>
          <li>Un desarollo visual completamente único y personalizado.</li>
        </ul>
        <p>Cuando se trata de desarrollo web, elegir la herramienta adecuada es esencial para el éxito del proyecto. Aunque hay varias opciones disponibles, una de las opciones más populares y efectivas es utilizar un handless CMS. A diferencia de WordPress un handless CMS ofrece una solución más escalable, segura y rápida para el desarrollo web, y a diferencia de la programación personalizada el costo y el tiempo de desarollo es mucho menor.</p>  <p>

Al elegir un handless CMS para su proyecto, podrá disfrutar de una plataforma altamente personalizable que le permitirá crear una aplicación web de alta calidad que se adapte perfectamente a sus necesidades y objetivos comerciales. Además, un handless CMS es ideal para proyectos que requieren una alta escalabilidad y rendimiento, lo que lo hace perfecto para aplicaciones web complejas y de gran escala.
</p>  <p>
En resumen, si está buscando una solución eficiente y efectiva para el desarrollo web, un handless CMS es una excelente opción. Al elegir esta herramienta, puede estar seguro de que su proyecto se construirá de manera segura y escalable, y que cumplirá con sus objetivos comerciales y de calidad. </p>
        <p>¡Echa un vistazo a mis <Link className={gitywsp} href="/proyectos">proyectos</Link>, para ver cómo he implementado las 3 opciones de desarollo web!</p>
    </div>
    
    </section>
    <div className={contactostuweb}>
      <h3>Contacto: </h3>
              <h3>
                <a href="https://www.linkedin.com/in/estebankroh" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i><p className="visually-hidden">LinkedIn</p></a>
                <a href="https://api.whatsapp.com/send?phone=+542954442060&text=Hola, necesito más informacion sobre las páginas web!" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i><p className="visually-hidden">WhatsApp</p></a>
                <a href="https://github.com/KrohEsteban" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><p className="visually-hidden">GitHub</p></a>  
                <a href="mailto:krohesteban@gmail.com?Subject=Me%20contacto%20desde%20su%20página%20web" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i><p className="visually-hidden">Gmail</p></a>             
              </h3>
    </div>
    
   
        </Layout>
    )
}

export const Head = () => (<Seo

    title= "Esteban Kroh, desarollador web."
    description= "Soy Esteban Kroh, desarollador web de Santa Rosa, La Pampa. Informático por vocación y emprendedor por naturaleza, contáctame para completar tus proyectos!"
    />)