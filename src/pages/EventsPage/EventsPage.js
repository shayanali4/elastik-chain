import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './styles.css';
import Footer from '../../components/Footer/Footer';

function EventsPage() {
    return (
        <div className="events-page">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Image src="/images/backgrounds/event_name_bg.png" rounded className="hero-section-img" />
                    </Col>
                </Row>
            </Container>

            {/* Description */}
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h3>Description Header </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed vel leo suscipit, 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed vel leo suscipit, elementum metus vel, tempus massa. 
                            Curabitur ac felis eu lorem congue pharetra....... 
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Details */}
            <Container className="details mt-5">

                {/* First Row */}
                <Row className="first-row p-3">
                    <Col sm={12} md={6} className="left mb-5">
                        <h4 className="text-white text-left">SUPPORT AND CARE FROM WHOLE COMMUNITY</h4>
                        <div className="bg-secondary py-4 text">
                            Community Information
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="right mb-5">
                        <div>
                            <div className="ico star">
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>                            
                            <div className="text">
                                <h5>White Glove Support</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. Sed vel leo suscipit, 
                                Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div>
                            <div className="ico message">
                                <i class="fa fa-comments" aria-hidden="true"></i>
                            </div>                            
                            <div className="text">
                                <h5>Join a Community</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Second Row */}
                <Row className="second-row">
                    <Col md="12 mt-3" className="first">
                        <h3 className="text-white">PRIZES</h3>
                    </Col>
                    <Col md="12" className="second mt-3">
                        <div>
                            <h1 className="text-white large">$50K+</h1>
                            <p className="">AVAILABLE IN VARIOUS PRIZES</p>
                        </div>
                    </Col>
                    <Col md="12" sm="12" className="third mt-3">
                        <Container fluid>
                            <Row className="inner-row">
                                <Col sm="12" md="3">
                                    <Image src="/images/aave.jpg" rounded className="details-section-img" />
                                    <div className="text">
                                        <h3>AAVE</h3>
                                        <p>20,000+ ups fro grabs.</p>
                                    </div>
                                </Col>
                                <Col sm="12" md="4">
                                    <Image src="/images/solana.png" rounded className="details-section-img" />
                                    <div className="text">
                                        <h3>1INCH</h3>
                                        <p>8000+ ups fro grabs.</p>
                                    </div>
                                </Col>
                                <Col sm="12" md="4">
                                    <Image src="/images/chain.jfif" rounded className="details-section-img" />
                                    <div className="text">
                                        <h3>CHAINLINK</h3>
                                        <p>5000+ ups fro grabs.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            {/* Schedule */}
            <Container className="schedule mt-5">

                {/* Sponsors & Partners */}
                <Row>
                    <Col md="4" sm="12">
                            <h2>SCHEDULE</h2>
                    </Col>
                    <Col md="8" sm="12">
                            {/* <div className="text-center">
                                <div>
                                    <Image src="/images/aave.jpg" rounded className="details-section-img" />
                                    <div className="text text-center">
                                        <h3>AAVE CHAINLINK</h3>
                                    </div>
                                </div>
                            </div> */}
                        <div className="date">
                            <div>
                                <div className="head">
                                    <h4>WED, JAN 13th</h4>
                                    <div>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="body">
                                    <div>
                                        <div className="time">
                                            19:00CET
                                        </div>
                                        <div className="details">
                                            <h4>Team Formation WorkShop</h4>
                                            <div className="users">
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div>
                                        <div className="time">
                                            21:00CET
                                        </div>
                                        <div className="details">
                                            <h4>White Hat Panel: DeFi Exploits</h4>
                                            <div className="users">
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div>
                                        <div className="time">
                                            19:00CET
                                        </div>
                                        <div className="details">
                                            <h4>Team Formation WorkShop</h4>
                                            <div className="users">
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="date">
                            <div>
                                <div className="head">
                                    <h4>THU, JAN 14th</h4>
                                    <div>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="body">
                                    <div>
                                        <div className="time">
                                            21:00CET
                                        </div>
                                        <div className="details">
                                            <h4>Brainstorm Session</h4>
                                            <div className="users">
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                     
                                </div>
                            </div>
                        </div>

                        <div className="date">
                            <div>
                                <div className="head">
                                    <h4>FRI, JAN 15th</h4>
                                    <div>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="body">
                                    <div>
                                        <div className="time">
                                            19:00CET
                                        </div>
                                        <div className="details">
                                            <h4>Event Kickoff</h4>
                                            <div className="users">
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                                <div>
                                                    <Image src="/images/profile.jpg" />
                                                    <h6>Emily Hobbs</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div>
                                        <div className="time">
                                            20:00CET
                                        </div>
                                        <div className="details">
                                            <h4>Hacking Begins</h4>
                                            <div className="users">
                                                
                                            </div>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Judges & Mentors */}
                <h2>JUDGES AND MENTORS</h2>
                <Row className="mentors">
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                    <Col md="3" xs="6">
                        <Image src="/images/profile.jpg" className="profile-img" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </Col>
                </Row>

                {/* Sponsors & Partners */}
                <div className="sponsors">
                <h2>PARTNERS AND SPONSORS</h2>
                    <Row>
                        <Col md="12" sm="12">
                            <div className="text-center">
                                <div>
                                    <Image src="/images/aave.jpg" rounded className="details-section-img" />
                                    <div className="text text-center">
                                        <h3>AAVE CHAINLINK</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" sm="12">
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" sm="12" >
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/chain.jfif" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>CHAINLINK</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/chain.jfif" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>CHAINLINK</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/chain.jfif" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>CHAINLINK</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/chain.jfif" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>CHAINLINK</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <Image src="/images/aave.jpg" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>AAVE</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <Image src="/images/solana.png" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>1INCH</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <Image src="/images/aave.jpg" rounded className="details-section-img" />
                                <div className="text">
                                    <h3>AAVE</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            {/* FAQ */}
                <div className="faq">
                    <h2>FREQENTLY ASKED QUESTIONS</h2>
                    <Row>
                        <Col md="12">
                            <div>
                                <h4>DOES MARKETMAKE COST MONEY ? </h4>
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. Sed vel leo suscipit, 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed vel leo suscipit, elementum metus vel, tempus massa. 
                                        Curabitur ac felis eu lorem congue pharetra....... 
                                </p>
                            </div>
                        </Col>
                        <Col md="12">
                            <div>
                                <h4>DOES MARKETMAKE COST MONEY ? </h4>
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. Sed vel leo suscipit, 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed vel leo suscipit, elementum metus vel, tempus massa. 
                                        Curabitur ac felis eu lorem congue pharetra....... 
                                </p>
                            </div>
                        </Col>
                        <Col md="12">
                            <div>
                                <h4>DOES MARKETMAKE COST MONEY ? </h4>
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Sed vel leo suscipit. Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. Sed vel leo suscipit, 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed vel leo suscipit, elementum metus vel, tempus massa. 
                                        Curabitur ac felis eu lorem congue pharetra....... 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            <Footer />

            </Container>

            {/* Footer */}
        </div>
    )
}

export default EventsPage
