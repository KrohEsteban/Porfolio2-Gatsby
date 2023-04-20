import React from 'react'
import "bootswatch/dist/slate/bootstrap.min.css"
import { Link } from 'gatsby'
import { textoperfil} from '../styles/index.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



export default function Header() {
  return (
    <>
        <header>
          
            <Navbar expand="md" className='navbar-dark bg-primary'>
                <Container fluid="sm">
                    <Link className="navbar-brand"  to='/'><h1 className={textoperfil}>Esteban Kroh</h1></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className = "justify-content-end" id = "basic-navbar-nav" >
                    <Nav >
                        <Link to='/' className="nav-link">Home</Link>
                        <Link to='/aptitudes' className="nav-link">Aptitudes</Link> 
                        <Link to='/tu-web' className="nav-link">Tu Web</Link>
                        <Link to='/proyectos' className="nav-link">Proyectos</Link>
                        <Link to='/rollers' className="nav-link">Hobby</Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
  )
}
