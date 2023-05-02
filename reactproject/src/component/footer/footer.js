import React from "react";
import './footer.css';
import Home from "../home/home";
import Navbar from "../navbar/navbar";


function Footer(){
    return(
<>
  <div className="container-fluid bg-dark">
    <br/>
    <div class="row">
    <div class="col-lg-4">
    <h3 class="text-danger">About Us :</h3>
          <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus in modi, quis provident, 
            incidunt et error perferendis amet
            incidunt et error  
            suscipit vitae reiciendis repellendus magnam accusantium quod eum officia ipsa! <br/><br/><br/><br/></p>
    </div>
        <div class="col-lg-4">
        <h3 class="text-danger">Quick Links :</h3>
          <div class="feet">
          <h6><a class="text-light" href="/">Home</a></h6>
          <h6><a class="text-light" href="about">AboutUs</a></h6>
          <h6><a class="text-light" href="service">Services</a></h6>
          <h6><a class="text-light" href="contact">ContactUs</a></h6><br/><br/><br/>
          </div>
        </div>
        <div class="col-lg-4">
        <h3 class="text-danger">Contact Us :</h3>
          <h5 class="text-light">Mobile :</h5>
          <h6 class="text-light">8110820991</h6>
          <h5 class="text-light">G-mail :</h5>
          <h6 class="text-light">vinoth0670@gmail.com</h6>
          <br/><br/>
        
        </div>
        
    </div>
    <br/>
    <hr class="text-light p-2"/>
    <br/>
    <h4 class="text-center text-light">Copyrights &copy; 2023 All Rights Reserved | Created By:Vinoth Kumar.</h4><br/>
    <h2 id="foot" class="text-center text-light"><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i>  
      <i class="bi bi-messenger"></i> <i class="bi bi-instagram"></i> <i class="bi bi-twitter"></i> 
      <i class="bi bi-telegram"></i> <i class="bi bi-browser-chrome"></i></h2>
      <br/><br/>
    
    </div>

</>
    );
}
export default Footer;