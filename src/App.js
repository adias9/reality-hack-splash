import React, { useState, useEffect } from 'react';
import {
    Button,
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Container,
    Row,
    Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from './img/vaporwave3-alt.png';
import Logo from './img/LogoSVG.js';
import defaultImg from './img/default.svg';

function Team() {
    const teamMap = [
        {name: "Eswar", role: "Lead Organizer"},
        {name: "Sarah Pillai", role: "Lead Organizer"},
        {name: "Scott Greenwald", role: "Lead Organizer"},
        {name: "Andreas", role: "Tech Lead"}
    ]
    return (
        <div id="team" className="team">
            <Container>
                <Row><h2>Organizing Team</h2></Row>
                <Row className="team-rows">
                    {teamMap.map((p, key) => (
                        <div key={key} className="t-member">
                            <Image src={defaultImg} roundedCircle />
                            <p className="name">{p.name}</p>
                            <p className="role">{p.role}</p>
                        </div>
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

function Main() {
    const [email, setEmail] = useState('');
    const [showErr, setShowErr] = useState(null);
    const [showLoad, setShowLoad] = useState(false);
    const [showDone, setShowDone] = useState(false);
    const enterPressed = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            addEmailToMailinglist();
        }
    }
    const addEmailToMailinglist = () => {
        let mailformat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!mailformat.test(email)) {
            setShowErr("Please enter a valid email");
            return
        }

        setShowErr(null);
        postEmail();
        console.log("good email");
    };

    async function postEmail() {
        setShowLoad(true);

        setTimeout(function(){ setShowLoad(false); setShowDone(true) }, 2000);

        // const res = await fetch("https://swapi.co/api/planets/4/", {
        //     method: 'post',
        //     body: JSON.stringify(email)
        // });
        //
        // res.json()
        //     .then(res => {setShowLoad(false); setShowDone(true);})
        //     .catch(err => {setShowLoad(false); setShowErr(err)});
    }

    return (
        <div className="inner">
            <header className="App-header typewriter">
                <Logo />
                <p>January 17-20 - MLK Weekend</p>
                <InputGroup className="mt-3">
                    <FormControl
                        type="email"
                        placeholder="Email address"
                        aria-label="recipent's email address"
                        aria-describedby="email-address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyPress={enterPressed}
                        />
                    <InputGroup.Append>
                        <Button
                            onClick={addEmailToMailinglist}
                            className={showDone ? "btn-success" : "btn-pink"}
                            disabled={showLoad || showDone}>
                            {showLoad ? "Loading..." : showDone ? "Added" : "Notify Me"}
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <small>{showErr}</small>
            </header>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div className="main" style={{backgroundImage: `url(${background})`}}>
                <NavBar/>
                <Main />
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
