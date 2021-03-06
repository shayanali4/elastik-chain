import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './styles.css';
import RegistrationForm from '../RegistationForm/RegistrationForm.js'

function LandingPage() {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="landing-page">



            {/* Header */}
            <Header />

            {/* Hero Section */}





        


            <Container fluid className="hero-section">

     

                

                <Row className="text-center py-5 text-white  ">


     








                    
                    <Col>
                        {/* <p className="mx-auto mb-4 welcome">Welcome to <b>Elastik-Chain</b></p> */}
                        <h2 className="mb-4">Ideas change the  world we live</h2>
                        {/* <p className="mx-auto mb-4 tagline">We are team who believe in the future of the Dapps</p> */}

                     
                        <div className="modelbutton1">     

<button type="button" className="btn  btn-blue" data-toggle="modal" data-target="#myModal">Join us</button> 


</div>     
















                    </Col>
          
                </Row>
  


            </Container>

                    

                    
                    <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            
            <div className="modal-body">

    <RegistrationForm>    </RegistrationForm>
</div>
 <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
    </div>



    </div>

    </div>




<div   className="row row12 ">
    <div className="col-md-2">
    <button type="button" class="btn btn-light">Fintech</button>
</div>
<div className="col-md-2">
    <button type="button" class="btn btn-light">Healthcare</button>
</div>

<div className="col-md-2">
    <button type="button" class="btn btn-light">Mobility</button>
</div>

<div className="col-md-2">
    <button type="button" class="btn btn-light">Education</button>
</div>

<div className="col-md-2">
    <button type="button" class="btn btn-light">Appliances</button>
</div>

<div className="col-md-2">
    <button type="button" style={{fontSize:"15px"}} class="btn btn-light"><i class="fa fa-angle-right" aria-hidden="true"></i>
</button>
</div>



</div>

{/* <div className="row" >
    <div className="col-md-2">
<button type="button" class="btn btn-light">Fintech</button>
</div>







</div>





</div> */}



            {/* Main Section */}
            <Container className="main-section text-center my-4 py-4">

                                {/* How It Works Section */}
                <div id="work" className="work">
                    {/* <p className="mb-4 show-case">How does it work</p> */}
                    <h4 className="mb-4 blue">How Does It Works</h4>
                    {/* <p className="description mb-4">
                        Here is simply how Elastik-Chain works we are making it easy for Dapps to scale by getting funded and brought the light to our community.
                    </p> */}
                    <Row >
                        <Col md={3} sm={12}>
                            <div className="box pt-3">
                                <div className="box-img">
                                    <img src="/images/icons/1.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <p>You have an amazing idea and you made an MVP of it.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box pt-5">
                                <div className="box-img">
                                    <img src="/images/icons/2.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <p>Now, you need sponsors to bring that into a full fledged product.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box pt-4">
                                <div className="box-img">
                                    <img src="/images/icons/3.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <p>We give you the platform, and thousands of people will choose and vote for the ideas they love.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box pt-3">
                                <div className="box-img">
                                    <img src="/images/icons/4.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <p>We have investors who would actually invest in the most amazing idea.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Apps Section*/}
                <div id="showcases" className="apps mb-5">
                    {/* <p className="mb-4 show-case"><b>SHOW CASES</b></p> */}
                    <h4 className="mb-4 blue">Here is some Dapps</h4>
                    {/* <p className="description mb-4">
                        Dapps is a decentralized computer application that runs on a distributed computing system.
                    </p> */}
                    <Row >
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/home/financial-2.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">SALT</h4>
                                    <p>Offering cash loans in return for cryptocurrency collateral, SALT managed to serve those who are in need of cash but don't want to sell their tokens.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/home/financial.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Stellar</h4>
                                    <p>Stellar, or Stellar Lumens, is an open source, decentralized protocol for digital currency to fiat money transfers which allows cross-border transactions between any pair of currencies.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/home/badbanny1.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">OmiseGo</h4>
                                    <p>The OMG Network allows you to access, manage, and transact with digital assets that are kept securely on the blockchain.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/home/badbanny.png" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Fintech Pro</h4>
                                    <p>Pro Fintech provide liquidity and trading management, IT support, development and consultancy services to the financial sector. With our proactive and strategic approach to your requirements, we are poised to deliver first time, every time.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                {/* About Section */}
                <div id="about" className="about">
                    {/* <p className="mb-4 show-case"><b>ABOUT</b></p> */}
                    {/* <h4 className="mb-4">Learn More <b className='text-danger'>About Us</b></h4> */}
                    <h4 className="mb-4 blue">Learn More About Us</h4>
                    {/* <p className="description mb-4">
                        Here is simply how Elastik-Chain works we are making it easy for Dapps to scale by getting funded and brought the light to our community.
                    </p> */}
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

                {/* Our Team */}
                <div id="team" className="team">
                    {/* <p className="mb-4 show-case"><b>TEAM</b></p> */}
                    {/* <h4 className="mb-4">Our Hardworking <b className='text-danger'>Team</b></h4> */}
                    <h4 className="mb-4 blue">Our Hardworking Team</h4>
                    {/* <p className="description mb-4">
                        From Morocco, France To India we love diversity.
                    </p> */}
                    <Row >
                        <Col md={4} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/team/team-2.jpg" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Mohammed El Amine Idmoussi</h4>
                                    <p className="profession">QA Automation Engineer</p>
                                    <p><i>"We can automate everything but we can never replace the human touch"</i></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/team/team-3.jpg" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Anannay Bhowmik</h4>
                                    <p className="profession">Interaction Designer</p>
                                    <p>"Iam passionate about design that blends with human psychology and imperfections"</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src="/images/team/team-1.jpg" alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Mourad Mamassi</h4>
                                    <p className="profession">Full Stack Developer</p>
                                    <p>"Whether its frontend or backend its always fun"</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Contact Section */}
                <div id="contact" className="contact">
                    {/* <p className="mb-4 show-case"><b>CONTACT</b></p> */}
                    {/* <h4 className="mb-4">Contact <b className='text-danger'>Us</b></h4> */}
                    <h4 className="mb-4 blue">Contact Us</h4>
                    {/* <p className="description mb-4">
                        Incase you wanted to get in touch in real life.
                    </p> */}
                    <Row >
                        <Col md={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3581196170403!2d-74.00841558509565!3d40.71013224566764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2s!4v1614158319544!5m2!1sen!2s" height="350" allowfullscreen="" loading="lazy"></iframe>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="form-col-first" md={4}>
                            <div>
                                <div className="icon">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 className="blue">Location :</h4>
                                    <p>2 place, Epinary-sur-seine, France 93800</p>
                                </div>
                            </div>
                            <div>
                                <div className="icon">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 className="blue">Email :</h4>
                                    <p>med.amine.idmoussi@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <div className="icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 className="blue">Call ( Whatsapp ) :</h4>
                                    <p>+1 669 292 8807</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <form>
                                <Row className="form-row">
                                    <Col md={6} sm={12}>
                                        <input type="text" placeholder="Your Name" />
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <input type="email" placeholder="Your Email" />
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <input type="text" placeholder="Subject" />
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <textarea placeholder="Your Message"></textarea>
                                    </Col>
                                    <Col>
                                        <button type="submit">
                                            Send Message
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </div>
                
            </Container>

            {/* Sub Footer */}
            <Container fluid className="sub-footer py-3">
                <Container>
                    <Row>
                        <Col md="3" sm={12}>
                            <h3 className="blue">Elastik-Chain</h3>
                            <h6>Phone :</h6>
                            <h6>Email :</h6>
                        </Col>
                        <Col md="3" sm={12}>
                            <h5 className="blue">Useful Links</h5>
                            <div className="links">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <Link to="#home">Home</Link>
                            </div>
                            <div className="links">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <Link to="#about">About Us</Link>
                            </div>
                            <div className="links">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <Link to="#showcases">Show Cases</Link>
                            </div>
                            <div className="links">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <Link to="#tos">Terms of Service</Link>
                            </div>
                            <div className="links">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <Link to="#privacy">Privacy Policy</Link>
                            </div>
                        </Col>
                        <Col md="3" sm={12}>
                            <h5 className="blue">Our Show Cases</h5>
                        </Col>
                        <Col md="3" sm={12}>
                            <h5 className="blue">Join Our Newsletter</h5>
                            <h6>From Morocco, France To India we love diversity.</h6>
                            <div className="newsletter">
                                <input type="text" />
                                <button>Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Footer */}
            <Container fluid className="footer">
                <Row>
                    <Col md="6" sm="12">
                        <p>&#169; Copyright <b>Elastik-Chain</b>. All Rights Reserved.</p>
                    </Col>
                    <Col md="6" sm="12">
                        <div>
                            <span>
                                <i class="fab fa-facebook-square"></i>
                            </span>
                            <span>
                                <i class="fab fa-twitter-square"></i>
                            </span>
                            <span>
                                <i class="fab fa-linkedin"></i>
                            </span>
                            <span>
                                <i class="fab fa-instagram-square"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
        
    )
}

export default LandingPage
