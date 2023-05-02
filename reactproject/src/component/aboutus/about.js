import React from "react";
import Image from "../IMAGE/about.jpg";
import Image1 from "../IMAGE/lady2.jpg";
import Image2 from "../IMAGE/man1.jpg";
import Image3 from "../IMAGE/lady1.jpg";
import Image4 from "../IMAGE/man2.jpg";
import Image5 from "../IMAGE/Untitled-1.jpg";
import Footer from "../footer/footer";
import './about.css';

 function About(){
    return(
  <>
  <div class="container-fluid">
    <br/><br/>
    <div class="row usabout">
      <div class="col-lg-6">
        <img src={Image} width="100%" />
      </div>
      <div class="col-lg-6 textabout">
        <h1 class="text-center about">ABOUT US</h1>
        <p class="text-center about">people still occasionally use the words travail, which means struggle. According to Simon Winchester
           in his book The Best Travelers' Tales (2004), the words travel and travail both share an even more ancient root: 
           a Roman instrument of torture called the tripalium (in Latin it means "three stakes", as in to impale).
           [citation needed] This link may reflect the extreme difficulty of travel in ancient times. Travel in modern
            times may or may not be much easier, depending upon the destination. Travel to Mount Everest, the Amazon rainforest, extreme tourism, and adventure travel are more difficult forms of travel. Travel 
          can also be more difficult depending on the method of travel, such as by bus, cruise ship, or even by bullock cart.</p>
      </div>
    </div>
  </div>
  <br/><br/>
  <h1 id="team" class="text-center ">OUR TEAM</h1>
    <br/>
  <div id="cardout" class="container-fluid">
   
    <div class="card okcard">
            <div class="card-img">
            <img class="imgg" src={Image4} width="100%" />
        </div>
        <div class="card-body cardbody">
            <h3>FOUNDER :</h3>
            <h5>MILTEN</h5>
          </div>
          </div>
          <div class="card okcard">
            <div class="card-img">
            <img class="imgg" src={Image1} width="100%" />
        </div>
        <div class="card-body cardbody">
            <h3>CEO :</h3>
            <h5>JENI</h5>
          </div>
          </div>
          <div class="card okcard">
            <div class="card-img">
            <img class="imgg" src={Image2} width="100%" />
        </div>
        <div class="card-body cardbody">
            <h3>MANAGER :</h3>
            <h5>KUMAR</h5>
          </div>
          </div>
          <div class="card okcard">
            <div class="card-img">
            <img class="imgg" src={Image3} width="100%"/>
        </div>
        <div class="card-body cardbody">
            <h3>TEAMLEADER :</h3>
            <h5>MARY</h5>
          </div>
          </div>
  </div><br/><br/>
  <h1 id="team" class="text-center">OUR MISSION</h1>
  <br/>
    <img src={Image5} width="100%" height="30%"/><br/><br/>
  <Footer/>
  </>
    );
 }

 export default About;