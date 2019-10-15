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
import logoImg from './img/RHack-BlackTransparent-01.png'
import logoImg2 from './img/RHack-WhiteOnBlackBG-01.png'
import logoImg3 from './img/rhackSmall.png'
import logoImg4 from './img/clubLog.png'

function Team() {
    const teamMap = [
        {name: "Eswar Anandapadmanaban", role: "Lead Organizer"},
        {name: "Sarah Pillai", role: "Lead Organizer"},
        {name: "Scott Greenwald", role: "Lead Organizer"},
        {name: "Maria Rice", role: "Applications & Outreach Lead"},

        {name: "Brian Hui", role: "Marketing & Design Lead"},
        {name: "Andreas Dias", role: "Technology Lead"},
        {name: "Michael Shumikhin", role: "Sponsorships Lead"},
        {name: "Elena Chong Loo", role: "Facilities & Venue Lead"},

        {name: "Vik Parthiban", role: "Mentor Experience"},
        {name: "Elizabeth Mezias", role: "Participant Experience"},
        {name: "Divyanshu Varshney", role: "Outreach"}
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
                        <div key={key} className="t-member col-6 col-md-3">
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


        <div class="container-fluid  img-responsive" >
          <div class="row">
            <div class="col col-md-auto col-lg-6 col-sm-3 col-xs-3">
              <img alt="logo-designs"  class="img-fluid" height="500rem" src={logoImg}/>
                <img alt="logo-designs"  class="img-fluid" height="500rem" src={logoImg2}/>
            </div>

            <div class="col col-xs-8">
              <h2>A Letter to the Community</h2>
                  <p>The MIT XR Hackathon is back for 2020, and coming at you in a <b>BIG</b> way.... 	&#x1F4E2;		&#x1F389;</p>

                  <p>Since inception, this hackathon has produced over <b>300 projects</b> and helped <b>1,500</b> participants realize the potential to become XR creators. Year over year we bring together close to 500 global, magnetic, fun do-ers, to learn, create, and hack a better future.</p>

                  <p>Entering our fourth year, we have grown larger than we imagined possible. Startups have been founded (and even acquired!), countless XR careers jump-started, and a plentitude of collaborations propelled into the future.
 &#128640;.</p>

                  <p>Last year was unreal. It took our breath away to see the energy and the buzz from participants to sponsors to tech leaders chatting, friending, reminiscing, and still hacking for months afterwards. We realized the magnitude and impact we had. So this year we took the initiative to reexamine what this event means and reimagine its structure and future. We're ready to bring 2020 to new heights, and continue growing and driving the community. We're welcoming amazing partners, to push spatial computing forwards. We're working with industry giants and their leaders to bring the latest and greatest technologies into the hands of builders and dreamers from around the globe. Lastly, we're constantly listening and iterating to bring together this diverse group of designers, developers, artists, makers, and explorers. &#x1F30E;</p>

                  <p>The MIT XR Hackathon is not just an ordinary hackathon. From the workshops, to the whirlwind team formation, wild ideas, hands on mentorship, crazy amounts of hardware, killer partying, and more, it fosters a unique commmunity.</p>

                  <p>And for 2020, we're ready! Today we're excited to relaunch and reveal our new brand to the world. With new colors, a new name, and a fresh face- we hope you can see our visions for magic making and impact creation, as we continue to push bright minds.</p>

                  <p>Big thanks to our friends in the community (shout-out to <a target="_blank" href="http://www.riclebre.com/">Ric Lebre</a> and <a target="_blank" href="https://planecrazystudios.com/">Plane Crazy Design studio</a>, who helped create our fun and fresh 2020 rebrand: hack the now and build a better later.</p>


                  <p>Reality Hack 2020 is coming back to MIT January 16th through the 20th, hosted at the MIT Media Lab. Our team of organizers, both from <a target="_blank" href="http://vratmit.com">VR/AR@MIT</a> as well as the Reality Hack Organization are extremely excited to build this out. We hope to see you here in January, as we <i>hack-to-the-future</i>. If you're interested in collaborating with us, joining our team, sponsoring, or just shooting some ideas, feel free to send us a note at realityhack@mit.edu. The application period will start very soon, so keep an eye out! We hope you're as excited as we are!</p>
                  <br/>
                  <p>—Reality Hack team</p>


                  <p>#HackToTheFuture 	&#x1F64C;
                  <br></br>
                  #RHack 	&#x1F52E;
                  <br></br>
                  #RealityHack &#x1F525;
                  </p>
              </div>

          </div>
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

        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Basic '+ Buffer(`user:${process.env.REACT_APP_MAILCHIMP_API_KEY}`).toString('base64')
        // }
        // const data = { members: [{ email_address: email, status: 'subscribed' }] };
        // const res = await axios.post(`https://us20.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_MAILCHIMP_LIST_ID}`, JSON.stringify(data), { headers: headers });
        // const res = await fetch(`https://us20.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_MAILCHIMP_LIST_ID}`, {
        //     method: 'POST',
        //     headers: new Headers({
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': 'X-Requested-With',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Basic '+ Buffer(`user:${process.env.REACT_APP_MAILCHIMP_API_KEY}`).toString('base64')
        //     }),
        //     body: JSON.stringify(data)
        // });

        // res.then(response => res.json())
        //     .then(resJson => {setShowLoad(false); setShowDone(true);})
        //     .catch(err => {setShowLoad(false); setShowErr(err)});
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
            <div className="main" style={{backgroundImage: `url(${background})`}}>
                <NavBar/>
                <Main />
            </div>
            <Letter />
            <Team />
            <footer className="app-footer" >
                <h2>
                </h2>
                Presented By:
                <div class="row">
                <div class="col">
                </div>
                <div class="col">
                </div>
                  <div class="col">
                  <a href = "https://vratmit.com">

                    <img alt="logo-designs" class="img-fluid" width="300px" src={logoImg4}/>
                    </a>
                  </div>

                  <div class="col">
                    <img alt="logo-designs"  class="img-fluid" width="100px" src={logoImg3}/>
                  </div>
                  <div class="col">
                  </div>
                  <div class="col">
                  </div>
                  </div>


                <span>Copyright © 2019 RealityHack. Released under CC BY-SA.</span>
            </footer>
        </div>
    );
}

export default App;
