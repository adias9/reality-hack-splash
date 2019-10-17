import React, { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Container,
    Row,
    Image,
    Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from './img/vaporwave3-alt.png';
import Logo from './img/LogoSVG.js';
import logoImg from './img/RHack-BlackTransparent-01.png'
import logoImg2 from './img/RHack-WhiteOnBlackBG-01.png'
import logoImg3 from './img/rhackSmall.png'
import logoImg4 from './img/clubLog.png'
// import defaultImg from './img/default.svg';
import {
    eswar, sarah, scott,
    maria, brian, andreas,
    michael, elena, vik,
    elizabeth, divyanshu, kealani
} from './img/headshots/';

function Team() {
    const teamMap = [
        {name: "Eswar Anandapadmanaban", role: "Executive Team: Director", img: eswar, social: 'https://twitter.com/EswARVR'},
        {name: "Sarah Pillai", role: "Executive Team: Chief Disruptor", img: sarah, social: 'https://www.instagram.com/sarahepillai/'},
        {name: "Scott Greenwald", role: "Executive Team: Chairman", img: scott, social: ''},
        {name: "Maria Rice", role: "Applications & Outreach Lead", img: maria, social: 'https://www.linkedin.com/in/maria-rice-8a11a19/'},

        {name: "Brian Hui", role: "Marketing & Design Lead", img: brian, social: 'https://twitter.com/brihui'},
        {name: "Andreas Dias", role: "Technology Lead", img: andreas, social: 'https://twitter.com/andreasdias9'},
        {name: "Michael Shumikhin", role: "Sponsorships Lead", img: michael, social: 'https://www.linkedin.com/in/mshumikhin/'},
        {name: "Elena Chong Loo", role: "Facilities & Venue Lead", img: elena, social: 'https://www.instagram.com/elenakodama/'},

        {name: "Vik Parthiban", role: "Mentor Experience", img: vik, social: 'https://www.linkedin.com/in/vikparthiban/'},
        {name: "Elizabeth Mezias", role: "Participant Experience", img: elizabeth, social: 'https://www.linkedin.com/in/bethmezias/'},
        {name: "Divyanshu Varshney", role: "Outreach", img: divyanshu, social: 'https://twitter.com/Div_Varshney'},
        {name: "Kealani Finegan", role: "Outreach", img: kealani, social: 'https://twitter.com/kealanifinegan'}
    ]

    return (
        <div id="team" className="team">
            <Container>
                <div id="stars1"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <Row><h2>Organizing Team</h2></Row>
                <Row className="team-rows">
                    {teamMap.map((p, key) => (
                        <div key={key} className="t-member col-12 col-sm-6 col-md-3">
                            <a rel="noopener noreferrer" target="_blank" href={`${p.social}`}>
                                <Image src={p.img} roundedCircle />
                                <p className="name">{p.name}</p>
                                <p className="role">{p.role}</p>
                            </a>
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
              <Row style={{alignItems: 'center'}}>
                  <Col xs={12} sm={12} md={4}>
                      <img alt="logo-designs"  className="img-fluid" height="500rem" src={logoImg}/>
                      <img alt="logo-designs"  className="img-fluid" height="500rem" src={logoImg2}/>
                  </Col>
                  <Col xs={12} sm={12} md={{span: 7, offset: 1}}>
                      <h2>A Letter to the Community</h2>
                      <p>The MIT XR Hackathon is back for 2020, and coming at you in a <b>BIG</b> way.... 	<span role="img" aria-label="airhorn">&#x1F4E2;</span>		<span role="img" aria-label="party-popper">&#x1F389;</span></p>

                      <p>Since inception, this hackathon has produced over <b>300 projects</b> and helped <b>1,500</b> participants realize the potential to become XR creators. Year over year we bring together close to 500 global, magnetic, fun do-ers, to learn, create, and hack a better future.</p>

                      <p>Entering our fourth year, we have grown larger than we imagined possible. Startups have been founded (and even acquired!), countless XR careers jump-started, and a plentitude of collaborations propelled into the future.  <span role="img" aria-label="rocket">&#128640;</span></p>

                      <p>Last year was unreal. It took our breath away to see the energy and the buzz from participants to sponsors to tech leaders chatting, friending, reminiscing, and still hacking for months afterwards. We realized the magnitude and impact we had. So this year we took the initiative to reexamine what this event means and reimagine its structure and future. We're ready to bring 2020 to new heights, and continue growing and driving the community. We're welcoming amazing partners, to push spatial computing forwards. We're working with industry giants and their leaders to bring the latest and greatest technologies into the hands of builders and dreamers from around the globe. Lastly, we're constantly listening and iterating to bring together this diverse group of designers, developers, artists, makers, and explorers. <span role="img" aria-label="earth">&#x1F30E;</span></p>

                      <p>The MIT XR Hackathon is not just an ordinary hackathon. From the workshops, to the whirlwind team formation, wild ideas, hands on mentorship, crazy amounts of hardware, killer partying, and more, it fosters a unique commmunity.</p>

                      <p>And for 2020, we're ready! Today we're excited to relaunch and reveal our new brand to the world. With new colors, a new name, and a fresh face- we hope you can see our visions for magic making and impact creation, as we continue to push bright minds.</p>

                      <p>Big thanks to our friends in the community (shout-out to <a rel="noopener noreferrer" target="_blank" href="http://www.riclebre.com/">Ric Lebre</a> and <a rel="noopener noreferrer" target="_blank" href="http://www.thisisplanecrazy.com/">Plane Crazy Design studio</a>, who helped create our fun and fresh 2020 rebrand: hack the now and build a better later.</p>


                      <p>Reality Hack 2020 is coming back to MIT January 16th through the 20th, hosted at the MIT Media Lab. Our team of organizers, both from <a rel="noopener noreferrer" target="_blank" href="http://vratmit.com">VR/AR@MIT</a> as well as the Reality Hack Organization are extremely excited to build this out. We hope to see you here in January, as we <i>hack-to-the-future</i>. If you're interested in collaborating with us, joining our team, sponsoring, or just shooting some ideas, feel free to send us a note at realityhack@mit.edu. The application period will start very soon, so keep an eye out! We hope you're as excited as we are!</p>
                      <br/>
                      <p>—Reality Hack team</p>


                      <p>#HackToTheFuture 	<span role="img" aria-label="hands-up">&#x1F64C;</span>
                      <br></br>
                      #RHack 	<span role="img" aria-label="crystal-ball">&#x1F52E;</span>
                      <br></br>
                      #RealityHack <span role="img" aria-label="fire">&#x1F525;</span>
                      </p>
                  </Col>
              </Row>
        </Container>
    );
}

function NavBar() {
    return (
        <Navbar variant="dark" fixed="top">
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
        if (code === 13 && !showDone) {
            addEmailToMailinglist();
        }
    }
    const addEmailToMailinglist = () => {
        let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!mailformat.test(email)) {
            setShowErr("Please enter a valid email");
            return
        }

        setShowErr(null);
        postEmail();
    };

    const postEmail = () => {
        setShowLoad(true);

        const data = { email: email };
        axios.post(`/api/subscribe`, data, {baseURL: `${process.env.REACT_APP_MAILCHIMP_SERVER}`})
            .then(res => { setShowLoad(false); setShowDone(true);})
            .catch(err => { setShowLoad(false); setShowErr(err.message)});
    }

    return (
        <div className="inner">
            <header className="App-header typewriter">
                <Logo />
                <h3>January 16-20</h3>
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
            <NavBar/>
            <div className="main" style={{backgroundImage: `url(${background})`}}>
                <Main />
            </div>
            <Letter />
            <Team />
            <footer className="app-footer">
                <p>Presented By:</p>
                <Row style={{margin: '0', marginBottom: '1rem', alignItems: 'center'}}>
                    <Col xs={12} md={{span: 3, offset: 3}}>
                        <a href = "https://vratmit.com">
                            <img alt="logo-designs" className="img-fluid" width="300px" src={logoImg4}/>
                        </a>
                    </Col>
                    <Col xs={12} md={2}>
                        <img alt="logo-designs"  className="img-fluid" width="100px" src={logoImg3}/>
                    </Col>
                </Row>
            </footer>
            <div className="bottom"><span>Copyright © 2019 RealityHack. Released under CC BY-SA.</span></div>
        </div>
    );
}

export default App;
