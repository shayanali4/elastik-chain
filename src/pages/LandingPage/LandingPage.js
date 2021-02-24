import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import './styles.css';

function LandingPage() {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="landing-page">

            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Container fluid className="hero-section">
                <Row className="text-center py-5 text-white">
                    <Col>
                        <p className="mx-auto mb-4 welcome">Welcome to <b>Elastik-Chain</b></p>
                        <h2 className="mb-4">IDEAS CHANGE THE WORLD WE LIVE IN</h2>
                        <p className="mx-auto mb-4 tagline">We are team who believe in the future of the Dapps</p>
                        <button>Get Started</button>
                    </Col>
                </Row>
            </Container>

            {/* Main Section */}
            <Container className="main-section text-center my-4 py-4">

                {/* Apps Section*/}
                <div className="apps mb-5">
                    <p className="mb-4 show-case"><b>SHOW CASES</b></p>
                    <h4 className="mb-4">Here is some awesome <b className='text-danger'>DApps</b></h4>
                    <p className="description mb-4">
                        Dapps is a decentralized computer application that runs on a distributed computing system.
                    </p>
                    <Row >
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* How It Works Section */}
                <div className="work">
                    <p className="mb-4 show-case"><b>HOW IT WORKS</b></p>
                    <h4 className="mb-4">How It <b className='text-danger'>Works</b></h4>
                    <p className="description mb-4">
                        Here is simply how Elastik-Chain works we are making it easy for Dapps to scale by getting funded and brought the light to our community.
                    </p>
                    <Row >
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/solana.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4>SALT</h4>
                                    <p>Dapps is a decentralized computer application that runs on a distributed computing system, Dapps is a decentralized computer application that runs on a distributed computing system.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* About Section */}
                <div className="about">
                    <p className="mb-4 show-case"><b>ABOUT</b></p>
                    <h4 className="mb-4">Learn More <b className='text-danger'>About Us</b></h4>
                    <p className="description mb-4">
                        Here is simply how Elastik-Chain works we are making it easy for Dapps to scale by getting funded and brought the light to our community.
                    </p>
                    <Row >
                        <Col md={6} sm={12}>
                            <p>
                                When it comes to personalizing your online store, 
                                nothing is more effective than an About Us page. 
                                This is a quick summary of your company's history and purpose, 
                                and should provide a clear overview of the company's brand story. 
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason 
                                to shop from your brand.
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason .
                            </p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>
                                When it comes to personalizing your online store, 
                                nothing is more effective than an About Us page. 
                                This is a quick summary of your company's history and purpose, 
                                and should provide a clear overview of{readMore ? <></> :
                                <span id="dots">...</span>}
                                {readMore?<span id="more"> the company's brand story. 
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason 
                                to shop from your brand.</span>:<></>}
                                
                            </p>
                            {readMore ?
                                <button onClick={() => setReadMore(false)} id="myBtn">Show Less</button>

                                : <button onClick={() => setReadMore(true)} id="myBtn">Learn More</button>}
                        </Col>
                    </Row>
                </div>

                {/* Contact Section */}
                <div className="contact">
                    <p className="mb-4 show-case"><b>CONTACT</b></p>
                    <h4 className="mb-4">Contact <b className='text-danger'>Us</b></h4>
                    <p className="description mb-4">
                        Incase you wanted to get in touch in real life.
                    </p>
                    <Row >
                        <Col md={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3581196170403!2d-74.00841558509565!3d40.71013224566764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2s!4v1614158319544!5m2!1sen!2s" height="350" allowfullscreen="" loading="lazy"></iframe>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-col-first" md={4}>
                            <div>
                                <div>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div></div>
                            </div>
                        </Col>
                    </Row>
                    </div>
            </Container>
            
        </div>
    )
}

export default LandingPage
