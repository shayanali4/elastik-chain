import profileteam from './images/profileteam.jpeg';
import mobileimage from './images/mobile.jpg';
import './style.css';
import Header from '../../components/Header/Header';

function ProjectPage()  {
    return (
      <>
        <div className='project-page'>
          <Header />
        </div>
        <div class="container coltainer0 ">
          <div class="row ">
            <div class="col-md-8  " >
              <p>
                <span className="one">{`PROJECT >`}</span>
                <span >PROFILE / EDIT PROJECT </span>
              </p>
            </div>
            <div class="col-md-4 col-5 " >
              <button type="button" class="btn btn-primary ">Edit</button>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4 col-23">
              <img src="/images/projects/description/project2-description.png" alt="" />
            </div>
            <div class="col-md-8">              
              <div class="first">               
                <h4>Project Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam recusandae tempore ex aut optio corrupti temporibus quidem eveniet doloribus consequuntur sint aspernatur, minima mollitia laudantium eos numquam! Obcaecati, debitis.</p>               
              </div>
              <div class="second">
                <h4>Technologies</h4>
                <div class="second11">                 
                  <h5>Daml</h5>                  
                  <h5>Node.js</h5>                 
                  <h5>React</h5>                  
                  <h5>Aws</h5>                 
                  <h5>Daml</h5>                  
                  <h5>Node.js</h5>                 
                  <h5>React</h5>                 
                  <h5>Aws</h5>
                </div>
                <div class="second22">
                  <h5>Github</h5>
                  <h5>Presentation</h5>
                </div>                
              </div>
           </div>
            <div class="row row1234" >
              <div className="col-md-8 col123">
                <div className="about">
                  <h4>About the idea</h4>
                </div>
                <div className="paragraph">       
                  <p>Lorem  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores corporis, natus, dicta iure voluptates animi aliquid delectus voluptate consequuntur quaerat repellat quas tempora nemo cumque dolore iusto sit dolor?  ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quas repudiandae ut, vel eligendi modi, nesciunt velit molestias voluptatem vero nobis necessitatibus labore laborum sed deserunt ullam, tenetur aut hic!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, numquam distinctio sapiente voluptatem earum quas recusandae  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem, quam voluptatem totam quo aut ex dicta dolorem aliquam repellendus culpa iure doloremque. Assumenda quisquam dolore asperiores officia recusandae eveniet? ex. Obcaecati tenetur incidunt saepe, quo itaque corrupti. Libero illum rerum adipisci deleniti ea.</p>
                </div>
              </div>
              <div className="col-md-4 col-22" >
                <div className="circleportion">   
                  <div className="first">
                    <span className="dot">
                      <p> 1 </p>
                    </span>
                    <span></span>
                  </div>
                  <div className="second">
                    <h5>  STEP 1  </h5>
                    <p> Lorem ipsum dolor tur quas provident accusantium, nulla ducimus explicabo qui! </p>
                  </div>
                </div>
                <div className="circleportion">                 
                  <div className="first">
                    <span className="dot">
                      <p> 2 </p>
                    </span>
                    <span></span>
                  </div>
                  <div className="second">
                    <h5>  STEP 2  </h5>
                    <p> Lorem ipsum dolor tur quas provident accusantium, nulla ducimus explicabo qui! </p>
                  </div>               
                </div>                
                <div className="circleportion"> 
                  <div className="first">
                    <span className="dot">
                      <p> 3 </p>
                    </span>
                    <span></span>                   
                  </div>
                  <div className="second">
                    <h5>  STEP 3  </h5>
                    <p> Lorem ipsum dolor tur quas provident accusantium, nulla ducimus explicabo qui! </p>
                  </div>
                </div>
                <div className="circleportion">  
                  <div className="first">
                    <span className="dot">
                      <p> + </p></span>  <span></span>
                  </div>
                  <div className="second">
                    <h5>
                      <button>Add more steps</button>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row subrow">               
                <h4>Team</h4>
                <div className="col-md-8 col9">                
                  <div className="col-md-4  col24">                   
                    <a href="/w3images/lights.jpg">                     
                      <img src={profileteam} alt="Lights" style={{ width: '100%' }} />                     
                      <div className="caption">                   
                        <p>Shaheer</p>                      
                      </div>                     
                    </a>                    
                  </div>                 
                  <div className="col-md-4 col24">                    
                    <a href="/w3images/nature.jpg">                     
                      <img src={profileteam} alt="Nature" style={{ width: '100%' }} />                     
                      <div className="caption">                        
                        <p>Ahmed</p>               
                      </div>                   
                    </a>           
                  </div>             
                  <div className="col-md-4 col24">          
                    <a href="/w3images/fjords.jpg">                
                      <img src={profileteam} alt="Fjords" style={{ width: '100%' }} />                  
                      <div className="caption">                  
                        <p>Ali.</p>                       
                      </div>                   
                    </a>                   
                  </div>                 
                </div>               
              </div>
            </div>            
          </div>
        </div>       
        <div className="container-fluid">         
          <div className="row">       
            <div className="col-md-12 col-12">             
              <h4>Invite Teammates</h4>           
              <div class="input-group">               
                <input type="text" className="form-control formcontrol1" aria-label="Amount (to the nearest dollar)" />                 
                <button type="button" class="btn btn-primary">Send Invite</button>       
              </div>             
            </div>          
          </div>         
        </div>
      </>
    );
  }

export default ProjectPage;