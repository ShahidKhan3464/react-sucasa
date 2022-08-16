import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = () => {

    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logo-image">
                            <img src={logo} alt="logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Button variant="warning">Login</Button>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header