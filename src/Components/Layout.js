import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"

const Layout = () => {
    const [navbarColor, setNavbarColor]=useState("")
    const [collapsed, setCollapsed]=useState(true)
    const location = useLocation()

    useEffect(() => {
        setCollapsed(false);
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        
    }, [location]);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setNavbarColor('white sticky-top animate__animated animate__fadeInDown' );
            } else {
                setNavbarColor('transparent fixed-top');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={navbarColor} >
                <Container>
                    <Navbar.Brand href="/"><img src={logo} width="50px"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setCollapsed(!collapsed)}/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="m-auto">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                            <NavLink className="nav-link" to="contacto">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Layout