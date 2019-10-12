import React from 'react';
import {
    Button,
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from './img/vaporwave3-alt.png';
import Logo from './img/LogoSVG.js';

function Team() {
    const teamMap = [
        {name: "Andreas", role: "Tech Lead"},
        {name: "Eswar", role: "President"}
    ]
    return (
        <div id="team" className="team">
            <Container>
                <Row><h2>Organizing Team</h2></Row>
                <Row>
                    {teamMap.map((p, key) => (
                        <Col key={key} className="t-member" xs={6} md={4}>
                            <Image src="holder.js/171x180" roundedCircle />
                            <p className="name">{p.name}</p>
                            <p className="role">{p.role}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

function Letter() {
    return (
        <Container id="letter" className="letter">
            <div className="content">
                <h2>A Letter to the Community</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis. Tincidunt dui ut ornare lectus sit amet est placerat in. Mus mauris vitae ultricies leo integer malesuada. Egestas congue quisque egestas diam. Eros in cursus turpis massa tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum. Eget nullam non nisi est sit. Nec tincidunt praesent semper feugiat. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquet sagittis id consectetur purus ut.</p>

                <p>Massa tincidunt dui ut ornare lectus sit. Sed cras ornare arcu dui vivamus arcu. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Pellentesque sit amet porttitor eget dolor morbi non. Justo nec ultrices dui sapien. Commodo sed egestas egestas fringilla phasellus faucibus. Nullam vehicula ipsum a arcu. Sagittis orci a scelerisque purus semper. Diam sollicitudin tempor id eu. Erat velit scelerisque in dictum non consectetur a erat nam. Enim sit amet venenatis urna cursus eget. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.</p>

                <p>Pellentesque diam volutpat commodo sed egestas egestas. Orci porta non pulvinar neque laoreet suspendisse interdum. Consectetur adipiscing elit ut aliquam. Ornare arcu odio ut sem nulla pharetra diam sit amet. Diam volutpat commodo sed egestas egestas. Odio ut sem nulla pharetra diam. Adipiscing elit ut aliquam purus sit amet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Sed nisi lacus sed viverra tellus. Bibendum at varius vel pharetra.</p>
            </div>
        </Container>
    );
}

function NavBar() {
    return (
        <Navbar variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#letter">About</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link target="_blank" href="http://www.twitter.com/mitrealityhack"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link target="_blank" href="http://www.instagram.com/mitrealityhack"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
              <Nav.Link target="_blank" href="http://www.facebook.com/mitrealityhack"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
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
                        <p>January 17-20 - MLK Weekend</p>
                        <InputGroup className="mt-3">
                            <FormControl
                                placeholder="Email address"
                                aria-label="recipent's email address"
                                aria-describedby="email-address"
                                />
                            <InputGroup.Append>
                                <Button>Notify Me</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </header>
                </div>
            </div>
            <Letter />
            <Team />
            <footer className="app-footer">
                <span>Copyright © 2019 RealityHack. Released under CC BY-SA.</span>
            </footer>
        </div>
    );
}

export default App;
