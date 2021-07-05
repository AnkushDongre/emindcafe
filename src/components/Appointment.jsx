import React from "react";
import emailjs from 'emailjs-com';

const Appointment = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_e6tm3ar', 'template_s6iwfio', e.target, 'user_x98DScdeMoUtBo0A8c6M9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <div className="container" style={{paddingTop: "100px"}}>
            <div style={{backgroundColor: "lightgray"}}>
        <h1 className="text-center">Appointment Form</h1>
        <p>Request an appointment</p>
</div>
        <hr className="p-1 bg-danger" />

        <form onSubmit={sendEmail}>
            <h5>Name</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="text" className="form-control" name="fname" placeholder="First name" aria-label="First name" aria-required="true" required />
                    <label for="fname">First Name</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" name="lname" placeholder="Last name" aria-label="Last name" aria-required="true" required />
                    <label for="lname">Last Name</label>
                </div>
            </div>
            <h5>Contact</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="tel" className="form-control" name="contact" placeholder="+91 00000 00000" aria-label="Contact number" aria-required="true" required />
                    <label for="contact">Mobile number</label>
                </div>
                <div className="col">
                    <input type="email" className="form-control" name="email" placeholder="example@example.com" aria-label="email" aria-required="true" required />
                    <label for="email">Mail ID</label>
                </div>
            </div>
            <fieldset className="row mb-3"  aria-required="true" required >
                <legend className="col-form-label col-sm-2 pt-0">First Time Visit?</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="yes"
                            checked />
                        <label className="form-check-label" for="gridRadios1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="no" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>
                </div>
            </fieldset>
            <h5>Date and Time</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="date" className="form-control" name="date" id="txtdate" autocomplete="off" aria-label="Appointment date" aria-required="true" required />
                </div>
                <div className="col">
                    <input type="time" className="form-control" name="time" aria-label="Appointment time" min="8:00" max="21:00" pattern="[0-9]{2}:[0-9]{2}" />
                    <span className="valadity"></span>
                </div>
            </div>

            <div className="form-group">
              <label for="comment">Comment</label>
              <textarea className="form-control" name="comment" id="comment" rows="6" />
            </div>
            <div className="text-center p-3">
                <button type="submit" className="btn btn-primary btn-outline-success text-light">Submit</button>
            </div>
            
        </form>
    </div>
    );
}

export default Appointment;