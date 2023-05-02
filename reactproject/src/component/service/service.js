import React from "react";
import Footer from "../footer/footer";
import './service.css'
import Image1 from "../IMAGE/food1.jpg";
import Image2 from "../IMAGE/snacks.jpg";
import Image3 from "../IMAGE/tent.jpg";
import Image4 from "../IMAGE/hotel1.jpg";
import Image5 from "../IMAGE/campfire.jpg";
import Image6 from "../IMAGE/flight1.jpg";
import Image7 from "../IMAGE/food2.jpg";
import Image8 from "../IMAGE/snacks2.jpg";
import Image9 from "../IMAGE/tent2.jpg";
import Image10 from "../IMAGE/hotel2.jpg";
import Image11 from "../IMAGE/campfire2.jpg";
import Image12 from "../IMAGE/flight2.jpg";

 function Service(){
    return(
  <>
  <br/><br/>
  <h1 class="services text-center">SERVICES</h1>
  <br/><br/>
  <div class="container bg-light">
    <div class="row">
      <div class="col-lg-4">
      <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image1}/>
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image7}/>
     </div>
     </div>
     </div>
  </div>
      <div class="col-lg-8 bg-danger">
        <h1 class="text-center">FOOD</h1>
       <p> Food is any substance consumed by an organism for nutritional support.
       Food is usually of plant, animal, or fungal
       origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals
       Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal,
        or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins,
        or minerals</p>
        </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-8 bg-success">
        <h1 class="text-center">SNACKS</h1>
      <p>The meaning of SNACK is a light meal : food eaten between regular meals; also : food suitable for snacking.
       How to use snack in a sentenceThe meaning of SNACK is a light meal : food eaten between regular meals; 
       also : food suitable for snacking. How to use snack in a sentenceThe meaning of SNACK is a light meal :
       food eaten between regular meals; also : food suitable for snacking. How to use snack in a sentence</p>
      </div>
      <div class="col-lg-4">
      <div class="flip-box ">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image2} />
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image8}/>
     </div>
     </div>
     </div>
      </div>
    </div>
    <br/>
    <div class="row ">
      <div class="col-lg-4">
      <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image3}/>
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image9}  />
     </div>
     </div>
     </div>
      </div>
      <div class="col-lg-8 bg-warning">
        <h1 class="text-center">TENT HOUSE</h1>
      <p>A tent is a temporary house built using poles and fabric. These are usually built for a short duration.
       Helpful for night stay in places where other accommodations are not available.A tent is a temporary house 
       built using poles and fabric. These are
       usually built for a short duration. Helpful for night stay in places where other accommodations are not available.</p>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-8 bg-primary">
        <h1 class="text-center">HOTEL</h1>
      <p>Try one of these popular and highly-rated India hotels · SPOT ON The New View Stays · The Oberoi Grand Kolkata ·
       The Oberoi Mumbai · The Oberoi Bengaluru · TridenTry one of these popular and highly-rated India hotels · 
       SPOT ON The New View Stays · The Oberoi Grand Kolkata · The Oberoi Mumbai · The Oberoi Bengaluru ·
        TridenTry one of these popular and highly-rated India hotels ·
       SPOT ON The New View Stays · The Oberoi Grand Kolkata · The Oberoi Mumbai · The Oberoi Bengaluru · Triden</p>
      </div>
      <div class="col-lg-4">
      <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image4} />
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image10} />
     </div>
     </div>
     </div>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-4">
      <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image5}/>
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image11}  />
     </div>
     </div>
     </div>
      </div>
      <div class="col-lg-8 bg-danger">
        <h1 class="text-center">CAMPFIRE</h1>
      <p>A campfire is a fire at a campsite that provides light and warmth, and heat for cooking. 
      It can also serve as a beacon, and an insect and predator deterrent.
       Established campgrounds often provide a stone or steel fire ring for safety. 
       Campfires are a popular feature of camping</p>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-8 bg-success">
        <h1 class="text-center">FLIGHT</h1>
     <p> Flight or flying is the process by which an object moves through a space without contacting any planetary surface,
       either within an atmosphere or through the vacuum of outer spaceFlight or flying is the process by which an
        object moves through a 
      space without contacting any planetary surface, either within an atmosphere or through the vacuum of outer space</p>
      </div>
      <div class="col-lg-4">
      <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img class="flipimage" src={Image6} />
    </div>
    <div class="flip-box-back">
    <img class="flipimage" src={Image12} />
     </div>
     </div>
     </div>
      </div>
    </div>
  
  

  </div>
  <br/><br/>
  <Footer/>
  </>
    );
 }

 export default Service;