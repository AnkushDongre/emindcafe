import React from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_e6tm3ar', 'template_19y849i', e.target, 'user_x98DScdeMoUtBo0A8c6M9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    return(
        <section className="container" style={{paddingTop: "150px"}}>
             <div style={{backgroundColor: "lightgray"}}>
        <h1 className="text-center">Contact Us</h1>
        <p>We will be contacting you as earliest as possible.</p>
</div>
        <hr className="p-1 bg-danger" />

        <form onSubmit={sendEmail}>
            <h5 className="p-2">Name</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" aria-required="true" required />
                    <label for="fname">First Name</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" aria-required="true" required />
                    <label for="lname">Last Name</label>
                </div>
            </div>
            <h5 className="p-2">Subject</h5>
            <div className="col">
                    <input type="subject" name="subject" className="form-control" aria-label="subject" aria-required="true" required />
                 
                </div>
            <h5 className="p-2">Contact</h5>
            <div className="col">
                    <input type="email" className="form-control" placeholder="example@example.com" aria-label="email" aria-required="true" required />
                    <label for="email">Mail ID</label>
                </div>
                <h5 className="p-2">Subject</h5>
                <div className="form-group">
             
              <textarea className="form-control" name="comment" id="comment" rows="6" />
            </div>
                <div className="text-center p-3">
                <button type="submit" className="btn btn-primary btn-outline-success text-light">Submit</button>
            </div>
            
        </form>
        </section>
    );
}



export default Contact;