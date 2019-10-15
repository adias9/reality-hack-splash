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
    Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from './img/vaporwave3-alt.png';
import Logo from './img/LogoSVG.js';
import defaultImg from './img/default.svg';
import {
    eswar, sarah, scott,
    maria, brian, andreas,
    michael, elena, vik,
    elizabeth, divyanshu, kealani
} from './img/headshots/';

function Team() {
    const teamMap = [
        {name: "Eswar Anandapadmanaban", role: "Lead Organizer", img: eswar, social: 'https://twitter.com/EswARVR'},
        {name: "Sarah Pillai", role: "Lead Organizer", img: sarah, social: 'https://www.instagram.com/sarahepillai/'},
        {name: "Scott Greenwald", role: "Lead Organizer", img: scott, social: ''},
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
                <Row><h2>Organizing Team</h2></Row>
                <Row className="team-rows">
                    {teamMap.map((p, key) => (
                        <div key={key} className="t-member col-6 col-md-3">
                            <a rel="noopener noreferrer" target="_blank" href={`${p.social}`}>
                                <Image style={{maxWidth: '180px'}} src={p.img} roundedCircle />
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
            <div className="content">
                <h2>A Letter to the Community</h2>
                    <p>The MIT XR Hackathon is back for 2020, and coming at you in a <b>BIG</b> way....</p>

                    <p>Since inception, this hackathon has produced over 300 projects and helped 1,500 participants realize the potential of their dreams. Year over year we bring together close to 500 global, magnetic, and fun do-ers, to learn, create, and hack a better future.</p>

                    <p>Entering our fourth year, we have grown larger than our imaginations. Multiple startups have been founded, careers (jump) started, and collaborations skyrocketed.</p>

                    <p>Last year was unreal. With energy high, and the buzz from participants to sponsors to tech leaders chatting, friending, reminiscing, and still hacking for months afterwards, it took our breath away, as we realized the magnitude and impact we had. So this year we took initiative and thought about what this event means. We're ready to bring 2020 to new heights, and continue growing the community. We're welcoming amazing partners, such as the Khronos Group to push spatial computing forwards. We're working with industry giants and the leaders to bring the latest and greatest technologies into the hands of builders and dreamers from around the globe. Lastly, we're constantly listening and iterating to bring together this diverse group of designers, developers, artists, makers, and explorers.</p>

                    <p>The MIT XR Hackathon is not just an ordinary hackathon. From the workshops, to chaotic team formation, wild ideas, hands on mentorship, crazy amounts of hardware, killer partying, and more, it fosters a unique commmunity.</p>

                    <p>And for 2020, we're ready! And today we're excited to relaunch and showcase our new brand to the world. With new colors, a new name, and a fresh face- we hope you can see our visions for magic making and impact creation, as we continue to push bright minds.</p>

                    <p>Big thanks to our friends in the community (shout-out to <a target="_blank" rel="noopener noreferrer" href="http://www.riclebre.com/">Ric Lebre</a> (RH '19) and <a target="_blank" rel="noopener noreferrer" href="https://planecrazystudios.com/">Plane Crazy Design studio</a>, who helped create our fun and fresh 2020 rebrand, and package our venture: hack the now and build a better later. They successfully combined fun nostalgia with the future funk, to capture the essence of what it feels to be with us every January. So here we are...and we're dang excited.</p>

                    <img alt="logo-designs" src="https://www.notion.so/472dca13dad845e58d60a00267f58ead#b16e6fc088694b739a79eaafdfc31840" />

                    <p>Reality Hack 2020 is coming back to MIT January 16th through the 20th, hosted at the MIT Media Lab. Our team of organizers, both from <a target="_blank" rel="noopener noreferrer" href="http://vratmit.com">VR/AR@MIT</a> as well as the Reality Hack Organization are extremely excited to build this out. We hope to see you here in January, as we <i>hack-to-the-future</i>. If you're interested in collaborating with us, joining our team, sponsoring, or just shooting some ideas, feel free to send us a note at realityhack@mit.edu. Applications open very soon, so keep an eye out!</p>
                    <br/>
                    <p>—Reality Hack team</p>

                    <p>#hack-to-the-future</p>
            </div>
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
        let mailformat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
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
                <p>01.17.2020 - MLK Weekend</p>
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
                <span>Copyright © 2019 RealityHack. Released under CC BY-SA.</span>
            </footer>
        </div>
    );
}

export default App;
