import { FaHotel, FaNotesMedical } from "react-icons/fa";
import "../assets/css/index.css";
import IndexTopCards from "./IndexTopCards"
// import card1 from "../assets/images/logo/emind-cafe-logo.jpg";
import smile from "../assets/images/index/smile.jpg";
import { Container } from "react-bootstrap";

const Index = () => {
    return(
      <>
        <section id="hero-section" className="hero-section">
        <div className="hero p-5 py-5 text-center" style={{backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover"}}>
    <h1 className="display-5 fw-bold pt-5">Welcome to <br /><span className="display-3">e-MindCafe</span></h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 bg-light fs-4 fw-bolder p-2">I am Consultant Psychologist who cure people form varoius mental desorders.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-dark btn-outline-warning rounded-pill btn-lg px-4">Test Yourself</button>
      </div>
    </div>
  </div>
        </section>
      <section className="text-center pt-5" style={{backgroundColor : "lightgrey"}}>

        <IndexTopCards />
        
        <Container className="p-5">
        <button type="button" className="btn btn-dark btn-outline-warning rounded-pill btn-lg px-4">More topics</button>
        </Container>
        {/* <h1 className="text-center py-3">Things you should know</h1>
        <div className="container">
      <div className="row row-cols-3 row-cols-lg-6 row-cols-md-3 g-2 g-lg-3">
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>
         <div className="col">
          <div className="card text-left">
            <img className="card-img-top" width="171" height="150" loading="lazy" src={card1} alt="..."/>
           
          </div>
         </div>

       </div>
       </div> */}
      </section>
      <div className="container p-4">
      <hr className="featured-devider bg-danger p-1" />
      
      </div>
      <section>
        <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2">
      <div className="col">
        <img className="img-fluid" width="600" height="600" src={smile} alt="" />
      </div>
      <div className="col">
        <h1 className="fs-1 fw-bolder" >&#x1F60A; We are waiting for a smile on your face.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae cupiditate incidunt, corporis iusto nemo tempore! Harum unde doloremque, beatae aspernatur hic saepe maiores porro magnam earum iure. Repellendus, dolorem earum?</p>
      <div className="row row-cols-2 row-cols-sm-1 row-cols-lg-2 g-2 g-lg-3">
        <div className="col">
          <FaNotesMedical fontSize={75} fill="gray" />
          <h2>Hello Ankush</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae aliquid veniam sequi temporibus aperiam quam saepe. Provident, modi optio laboriosam ea, quis pariatur quasi quia ullam aliquam neque vel.</p>
        </div>
        <div className="col-sm-12">
          <FaHotel fontSize={75} fill="gray" />
          <h2>Hello Ankush</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis aliquam ex perspiciatis sint eveniet exercitationem tempora, voluptate, commodi, voluptates laboriosam. Possimus, velit! Maiores, maxime velit tempore natus ea voluptatibus.</p>
        </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    

      <section>
        <div className="container-fluid" style={{backgroundColor: "lightgray"}}>
          <div className="container text-center p-5">
          <div className="row row-cols-4 row-cols-sm-2 row-cols-lg-4 g-2 g-lg-3">
            <div>
              <h1 className="fs-2 fw-bolder">256</h1>
              <p>Patients</p>
            </div>

            <div>
              <h1 className="fs-2 fw-bolder">256</h1>
              <p>Patients</p>
            </div>

            <div>
              <h1 className="fs-2 fw-bolder">256</h1>
              <p>Patients</p>
            </div>

            <div>
              <h1 className="fs-2 fw-bolder">256</h1>
              <p>Patients</p>
            </div>

          </div>
          </div>
        </div>
      
      </section>
      <div className="container p-4">
      <hr className="featured-devider bg-danger p-1" />
      
      </div>
      <section className="p-5">
        <div className="container pb-3">
      <h1 className="text-center">Services</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquid voluptatibus. Illo voluptatibus commodi distinctio unde mollitia ipsum libero voluptatem nostrum. Iusto quisquam iste nostrum, omnis voluptatum pariatur doloribus.</p>
      </div>
      <div className="container text-center">
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 g-lg-3">
         <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>

           <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>

           <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>

           <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>

           <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>

           <div className="col shadow py-2">
           <div className="p-2">
           <FaNotesMedical size={50} />
            <h1 className="p-3">Consultancy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
           </div>
         </div>
         </div>
      </section>

      
      <section>
        <div className="container-fluid" style={{backgroundColor: "lightgray"}}>
          <div className="container text-center p-5">
            <h1>Call For Help</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui a possimus tempore perferendis aut dolore maxime odit dolores minima, voluptas nulla sit quis sequi necessitatibus iure maiores nam ipsum quod.</p>
            <a className="btn btn-dark btn-outline-warning rounded-pill btn-lg px-4" href="tel: +91-9403876207" title="call us">Click to Call</a>
          </div>
          </div>
      
      </section>
    </>
    );
}


export default Index;