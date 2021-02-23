
import './style.css'

function EventForm()  {
    return (

<div>
<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
<div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            
            <div className="modal-body">
      
              <div class="container- container-fluid1">
  <div class="row row1">

 




  <div className="contents">


<img src="/images/crystal-logo.png"  alt=""/>
</div>

  <div class="col-md-6 left">


<div>
  <label for="validationCustom01"   class="form-label">First name</label>
  <input type="text" class="form-control" placeholder="Type Your Name Here" id="validationCustom01" value="" required />
  
  </div>


  <div>
  <label for="validationCustom01" class="form-label">Linkedin/Github</label>
  <input type="text" class="form-control" id="validationCustom01" placeholder="place your link here" required />
  </div>


  <div>
  <label for="validationCustom01 " class="form-label form-label1">How do you want to contribute to the country</label> 
  <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Developer/Designer/Maker
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
Investors/Sponsors        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
I just want to contribute to the community      </label>
      
      </div>
 
  </div>
  
  <div>
  <label for="validationCustom01"   class="form-label email">Email Id</label>
  <input type="text" class="form-control  " placeholder="Enter your email id " id="validationCustom01" value="" required />
  
  </div>

<div className="password1">
  <label for="validationCustom01"   class="form-label">Enter a password</label>
  <input type="text" class="form-control" placeholder="Enter a password" id="validationCustom01" value="" required />
  
  </div>



</div>

<div class="col-md-6 right">

<div>
<label for="validationCustom01" class="form-label">Profession</label>


<select class="form-select" aria-label=" select example" >
  <option  selected>Choose your profession</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>




  <div>
<label for="validationCustom01"  class="form-label">  Avatar   </label>
<div>
  <span>
<input  className="chooseinput"  id="choose_file"  type="file" name="datafile" size={40} /></span>
  <input type="text"  placeholder="Attach your file" class="form-control" id="validationCustom01"  required />
  </div>

  </div>




  <div class="form-group">
  <label  className="textarea" for="comment">About you</label>
  <span className="count">0/250</span>
  <textarea class="form-control"  maxlength="250" rows="5" id="comment"></textarea>
</div>



</div>


<div className="row2"> 
<button type="button" class="btn btn-warning">Create Account</button>

</div>




  </div>

</div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>



      </div>

            

      

    );
  }

export default EventForm;