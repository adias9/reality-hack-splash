import React from 'react';
import { Button, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from './img/vaporwave3-alt.png';
import Logo from './img/LogoSVG.js';

function Block() {

}

/*
letter announcement
logo
dates
team
sign up
*/

function NavBar() {
    return (
        <Navbar variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Team</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link href="#link"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
              <Nav.Link href="#link"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

function App() {
    return (
        <div className="App">
            <div className="main" style={{backgroundImage: `url(${background})`}}>
                <NavBar/>
                <div className="inner">
                    <header className="App-header typewriter">
                        <Logo />
                        <p>January 20-22 MLK Weekend</p>
                        <InputGroup className="mt-3">
                            <FormControl
                                placeholder="Email address"
                                aria-label="recipent's email address"
                                aria-describedby="email-address"
                                />
                            <InputGroup.Append>
                                <Button>Receive Updates</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </header>
                </div>
            </div>
            <footer>
                Copyright © 2019 RealityHack. <br/>
                Released under CC BY-SA.
            </footer>
        </div>
    );
}

export default App;
