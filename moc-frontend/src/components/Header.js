import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>Maritim operational center</Navbar.Brand>
                    </LinkContainer>
                    
                    

                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

