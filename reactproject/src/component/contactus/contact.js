import {useState} from "react";
import './contact.css';
import Footer from "../footer/footer";
import Image from "../IMAGE/contactt.jpg";

 function Contact(){
  function myfun(){
    alert('submit successfully...!')
  }
  
    return(
  <>
  <br/><br/>
  <div class="container okcont">
  <div>
    <h1 class="text-center contact">Contact Us</h1>
    <p class="text-center">Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src={Image} width="100%" height="100%"/>
    </div>
    <div class="column">
      <form action="" >
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
        <label for="country">State</label>
        <select id="country" name="country">
          <option value="australia">tamilnadu</option>
          <option value="canada">mumbai</option>
          <option value="usa">kerela</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." height="170px" required></textarea>
        <input type="submit" value="Submit" onClick={myfun}/>
      </form>
    </div>
  </div>
</div>
<br/><br/>
<Footer/>
  </>
    );
 }

 export default Contact;