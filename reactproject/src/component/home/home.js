import React from "react";
import Footer from "../footer/footer";
import Image1 from "../IMAGE/photo1.jpg";
import Image2 from "../IMAGE/photo2.jpg";
import Image3 from "../IMAGE/photo3.jpg";
import Image4 from "../IMAGE/photo4.jpg";
import Image5 from "../IMAGE/photo5.jpg";
import Image6 from "../IMAGE/card1.jpg";
import Image7 from "../IMAGE/card2.jpg";
import Image8 from "../IMAGE/card3.jpg";
import Image9 from "../IMAGE/card4.jpg";
import Image10 from "../IMAGE/card5.jpg";
import Image11 from "../IMAGE/card6.jpg";
import Image12 from "../IMAGE/card7.jpg";
import Image13 from "../IMAGE/card8.jpg";
import Image14 from "../IMAGE/photo6.jpg";
import Image15 from "../IMAGE/trip1.jpg";
import Image16 from "../IMAGE/trip2.jpg";
import Image17 from "../IMAGE/trip3.jpg";
import Image18 from "../IMAGE/person01.jpg";
import Image19 from "../IMAGE/person02.jpg";
import Image20 from "../IMAGE/person03.jpg";
import Image21 from "../IMAGE/person04.jpg";
import Image22 from "../IMAGE/card01.jpg";
import Image23 from "../IMAGE/card02.jpg";
import Image24 from "../IMAGE/card03.jpg";

import "./home.css";
function Home() {
  return (
    <>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
</div>

{/* <!-- The slideshow/carousel --> */}
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={Image1} alt="INDIA" class="d-block w-100" height="600px"/>
    <div class=" carousel-caption ">
                  <h4 class="country">TIME IS SHORT</h4>
                  <h1 class="country text-success">TO TRAVEL</h1>
                  <div class="codein justify-content-center">Travelling is an amazing way to learn a lot of things in life. 
                  A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.</div>
                  <br/><br/>
                  <button class="btn4" type="button"><b>BOOK NOW<i class="bi bi-arrow-right "></i></b></button>
               </div>
  </div>
  <div class="carousel-item">
    <img src={Image2} alt="INDIA" class="d-block w-100" height="600px"/>
    <div class=" carousel-caption ">
                  <h4 class="country">NEVER STOP</h4>
                  <h1 class="country text-success">EXPLORING</h1>
                  <div class="codein justify-content-center">Travelling is an amazing way to learn a lot of things in life. 
                  A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.</div>
                  <br/><br/>
                  <button class="btn4" type="button"><b>BOOK NOW<i class="bi bi-arrow-right "></i></b></button>
               </div>
  </div>
  <div class="carousel-item">
    <img src={Image3} alt="INDIA" class="d-block w-100" height="600px"/>
    <div class=" carousel-caption ">
                  <h4 class="country">MAKE TOUR</h4>
                  <h1 class="country text-success">AMAZING</h1>
                  <div class="codein justify-content-center">Travelling is an amazing way to learn a lot of things in life. 
                  A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.</div>
                  <br/><br/>
                  <button class="btn4" type="button"><b>BOOK NOW<i class="bi bi-arrow-right "></i></b></button>
               </div>
  </div>
  <div class="carousel-item">
    <img src={Image4} alt="INDIA" class="d-block w-100" height="600px"/>
    <div class=" carousel-caption ">
                  <h4 class="country">EXPLORE THE</h4>
                  <h1 class="country text-success">NEW WORLD</h1>
                  <div class="codein justify-content-center">Travelling is an amazing way to learn a lot of things in life. 
                  A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.</div>
                  <br/><br/>
                  <button class="btn4" type="button"><b>BOOK NOW<i class="bi bi-arrow-right "></i></b></button>
               </div>
  </div>
  <div class="carousel-item">
    <img src={Image5} alt="INDIA" class="d-block w-100" height="600px"/>
    <div class=" carousel-caption ">
                  <h4 class="country">MAKE TOUR</h4>
                  <h1 class="country text-success">AMAZING</h1>
                  <div class="codein justify-content-center">Travelling is an amazing way to learn a lot of things in life. 
                  A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.</div>
                  <br/><br/>
                  <button class="btn4" type="button"><b>BOOK NOW<i class="bi bi-arrow-right "></i></b></button>
               </div>
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div><br/><br/>

{/* our latest trip */}

<h1 id="trip" class="text-center">Our Latest Trip</h1>
<br/><br/>
<div class="container-fluid" >
  <div class="row triprow">
    <div class= "col-lg-6">
     <img class="image" src={Image15} />
    </div>
    <div class= "col-lg-6">
      <br/>
      <h3 class="text-center text-danger">Kanniyakumari</h3>
      <br/>
      <p >Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, 
        the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean.
         It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple,
         dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism</p>
    </div>

  </div>
  <br/>

  <div class="row triprow">
    <div class= "col-lg-6">
    <br/>
      <h3 class="text-center text-danger">Taj Mahal</h3>
      <br/>
      <p >The Taj Mahal  is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex,
       which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p>
    </div>
    <div class= "col-lg-6">
    <img class="image" src={Image16}/>
    </div>

  </div><br/>

  <div class="row triprow">
    <div class= "col-lg-6">
     <img class="image" src={Image17}/>
    </div>
    <div class= "col-lg-6">
      <br/>
      <h3 class="text-center text-danger">Wayand</h3>
      <br/>
      <p >Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a 
        lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards
         and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to 
         the Neolithic age.
</p>
    </div>

  </div>


</div><br/><br/>

<h1 id="trip" class="text-center">Tour Packages</h1>


{/* cards */}
<div id="cards" class="container-fluid">

      <div class="card">
        <div class="card-img">
        <img src={Image7} width="100%" />
    </div>
    <div class="card-body">
        <h3>Himachal Pradesh</h3>
        <h5>$99999.00</h5>
      </div>
      <div class="card-footer">
        <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=himachal+pradesh
        &sxsrf=APwXEdevFIYLk4ThP2YWZz39WNmXDk2ygQ%3A1682663341972&ei=rWdLZPf5Os_LseMP8r2MwAQ&gs_ssp=eJzj4tDP1TcwLrAwNW
        D0EsjIzE1MzkjMUSgoSkxJLc4AAHNNCOc&oq=himach&gs_lcp=Cgxn
        d3Mtd2l6LXNlcnAQARgAMgsILhCxAxCKBRCRAjINCAAQgAQQFBCHAhCxAzINCAAQgAQQFBCHAhCxAzIICAAQgAQQsQMyCAgAEIAEELED">Know More</a></button>
      </div>
      </div>
      <div class="card">
        <div class="card-img">
        <img src={Image8} width="100%" />
    </div>
    <div class="card-body">
        <h3>Himachal Pradesh</h3>
        <h5>package-$99999.00</h5>
      </div>
      <div class="card-footer">
        <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=himachal+prad
        esh&sxsrf=APwXEdevFIYLk4ThP2YWZz39WNmXDk2ygQ%3A1682663341972&ei=rWdLZPf5Os_LseMP8r2MwAQ&gs_ssp=eJzj4tDP1Tcw
        LrAwNWD0EsjIzE1MzkjMUSgoSkxJLc4AAHNNCOc&oq=himach&gs_lcp=Cgxnd
        3Mtd2l6LXNlcnAQARgAMgsILhCxAxCKBRCRAjINCAAQgAQQFBCHAhCxAzINCAAQgAQQFBCHAhCxAzIICAAQgAQQsQMyCAgAEIAEELED">Know More</a></button>
      </div>
      </div>
      <div class="card">
        <div class="card-img">
        <img class="myimg" src={Image9} width="100%" />
    </div>
    <div class="card-body">
        <h3>Mysuru</h3>
        <h5>package-$8999.00</h5>
      </div>
      <div class="card-footer">
        <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=MYSHUR&sxsrf=APwXEdceQp
        D28oZHYy5xyRU-bmrFVKAc4g%3A1682663163336&ei=-2ZLZK2NFPLv4-EPvKCKuAk">Know More</a></button>
      </div>
      </div>
        <div class="card">
            <div class="card-img">
            <img class="myimg" src={Image14} width="100%" />
        </div>
        <div class="card-body">
            <h3>Taj Mahal</h3>
            <h5>package-$9999.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=taj+mahal&oq=taj+&aqs=chrome.0.69i59j69i57j0i271l2j69i60l2.4140j0j15&sourceid=chrome&ie=UTF-8">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img src={Image10} width="100%" />
        </div>
        <div class="card-body">
            <h3>RAJASTHAN</h3>
            <h5>package-$9999.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=rajasthan+tourist+places&bih=657&biw=1366
            &hl=en-GB&sxsrf=APwXEdc5Z9nqwKc784oUkneLUBDP6A602Q%3A1682612102656&ei=hp9KZPHMJ62fseMP0I-70AU&oq=raj&gs_lcp=Cgxnd3M
            td2l6LXNlcnAQARgAMggIABCKBRCRAjIICAAQigUQkQIyCAguELEDEIAEMgsILhCABBCxAxCDATILCC4QgAQQsQMQgwEyBQguEIAEMgUILhCABDIFCA
            AQgAQyCAguEIAEELEDMggILhCABBDUAjoHCCMQ6gIQJzoNCC4QxwEQrwEQ6gIQJzoNCAAQjwEQ6gIQtAIYAToECCMQJzoLCAAQigUQsQMQgwE6CwgAEIA
            EELEDEIMBOggIABCABBCxA0oECEEYAFCUDFjuE2CCJWgCcAF4AIABd4gBxgKSAQMxLjKYAQCgAQGwARTAAQHaAQYIARABGAo&sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img src={Image11} width="100%" />
        </div>
        <div class="card-body">
            <h3>THANJAUR</h3>
            <h5>package-$999.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=thanjaur&bih=657&biw=1366&hl=en-GB
            &sxsrf=APwXEddRKX87PMVJnK1QNeM-x8wqIMIF2g%3A1682611685637&ei=5Z1KZIq_Jp6ZseMP47yU2As&ved=0ahUKEwjKxcT-uMr-AhWeT
            GwGHWMeBbsQ4dUDCA8&uact=5&oq=thanjaur&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6
            gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzINCC4QxwEQrwEQ6gIQJzIHCC4Q6gIQJzIPCAAQigUQ6gIQtAIQQxgBMg
            8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQCEEMYATIPCAAQigUQ6gIQtAIQQxgBMg8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQ
            CEEMYATIPCAAQigUQ6gIQtAIQQxgBMg8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQCEEMY
            ATIPCAAQigUQ6gIQtAIQQxgBSgQIQRgAUPkKWPsrYORBaAJwAXgAgAEAiAEAkgEAmAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg" src={Image12} width="100%" />
        </div>
        <div class="card-body">
            <h3>THANJAUR</h3>
            <h5>package-$1234.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=thanjaur&bih=657&biw=1366&hl=en-GB
            &sxsrf=APwXEddRKX87PMVJnK1QNeM-x8wqIMIF2g%3A1682611685637&ei=5Z1KZIq_Jp6ZseMP47yU2As&ved=0ahUKEwjKxcT-uMr-AhWeT
            GwGHWMeBbsQ4dUDCA8&uact=5&oq=thanjaur&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6
            gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzINCC4QxwEQrwEQ6gIQJzIHCC4Q6gIQJzIPCAAQigUQ6gIQtAIQQxgBMg
            8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQCEEMYATIPCAAQigUQ6gIQtAIQQxgBMg8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQ
            CEEMYATIPCAAQigUQ6gIQtAIQQxgBMg8IABCKBRDqAhC0AhBDGAEyDwgAEIoFEOoCELQCEEMY
            ATIPCAAQigUQ6gIQtAIQQxgBSgQIQRgAUPkKWPsrYORBaAJwAXgAgAEAiAEAkgEAmAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg" src={Image13} width="100%" />
        </div>
        <div class="card-body">
            <h3>MANALI</h3>
            <h5>package-$9999.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=manali+tourist+places&bih=657&biw=
            1366&hl=en-GB&sxsrf=APwXEddhomgvqgMnQoyAfwm3zuShA8K_-Q%3A1682611535152&ei=T51KZLLmCM6UseMP3Y24qAg&oq=
            manali&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgDMgsILhCKBRCxAxCRAjINCAAQgAQQFBCHAhCxAzIICAAQigUQkQIyDQgAEIAEEBQQhwIQs
            QMyCAguEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQMyBQguEIAEMgUIABCABDIOCC4QgAQQsQMQxwEQ0QM6BwgjEOoCECc6DQguEMc
            BEK8BEOoCECc6BwguEOoCECc6DwguEIoFEOoCELQCEEMYAToPCAAQigUQ6gIQtAIQQxgBOhIILhDUAhCKBRDqAhC0AhBDGAE6BwgAEIo
            FEEM6BwguEIoFEEM6CwguEIMBELEDEIAEOgsIABCKBRCxAxCDAToLCC4QgAQQsQMQgwE6GQguEIoFELEDEJECENwEEJcFEN4EEOAEGAJ
            KBAhBGABQyApY5xNgrCxoAXABeAKAAa0GiAGhEJIBCzAuMS40LTEuMS4xmAEAoAEBsAEUwAEB2gEGCAEQARgB2gEGCAIQARgU&sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg"src={Image6} width="100%" />
        </div>
        <div class="card-body">
            <h3>LUMBINI</h3>
            <h5>package-$8987.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=lumbini&source=lmns&bih=600&biw=1366&hl=en-GB&sa=X&ved=2ahUKEwi7s4r3t8r-AhXyjeYKHU6nBcMQ0pQJKAB6BAgBEAI">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg"src={Image22} width="100%" />
        </div>
        <div class="card-body">
            <h3>LADAKH</h3>
            <h5>package-$88888.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=ladakh+tourist+places&sxsrf=APwXEdevkpAHGH
            KnP2TtdGY2fxKtNMVJeA%3A1682610795997&ei=a5pKZLO4PPW7seMPnfmO-AQ&gs_ssp=eJzj4tTP1TcwLDZLrjRg9BLNSUxJzM5QKMkvLcosLlEoy
            ElMTi0GALk3C4w&oq=LAD&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgcIABCKBRBDMgcILhCKBRBDMgcIABCKBRBDMgUIABCABDILCC4QgAQQsQMQgw
            EyBwgAEIoFEEMyBwgAEIoFEEMyCAguEIAEELEDMg4ILhCvARDHARCABBCOBTIFCAAQgAQyFQguEIoFEEMQlwUQ3AQQ3QQQ4AQYAjoHCCMQ6gIQJ
            zoPCAAQigUQ6gIQtAIQQxgBOhUILhCvARDHARCKBRDqAhC0AhBDGAE6BAgjECc6CAgAEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoLCAAQigUQ
            sQMQgwE6DgguEIAEELEDEMcBENEDOgUILhCABDoKCC4Qig
            UQsQMQQ0oECEEYAFD4CViJEGCjN2gCcAB4AIABsQGIAYYDkgEDMC4zmAEAoAEBsAEUwAEB2gEGCAEQARgB2gEGCAIQARgU&sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg"src={Image23} width="100%" />
        </div>
        <div class="card-body">
            <h3>KERALA</h3>
            <h5>package-$899.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=kerala+tourism&sxsrf=APwXEdesLuDKtsQaRTPf
            zfhpUMXUBUg8mw%3A1682610428972&ei=_JhKZML3Ov2eseMPrd6h8Ak&oq=ker+tour&gs_lcp=Cgxnd3Mtd2l6LXNl
            cnAQARgBMg0IABANEIAEELEDEIMBMgoIABANEIAEELEDMhMILhANEIAEELEDELEDEMcBEK8BMgcIABANEIAEMg0ILhANEIAEEMcBENEDMg
            cIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBC
            wAxgBOg8ILhCKBRDIAxCwAxBDGAI6EgguEIoFENQCEMgDELADEEMYAjoGCAAQBxAeSgQ
            IQRgAUOsDWNgVYN0uaAFwAHgCgAHIDIgBsSaSAQ0wLjEuNC0xLjctMi4xmAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&
            sclient=gws-wiz-serp">Know More</a></button>
          </div>
          </div>
          <div class="card">
            <div class="card-img">
            <img class="myimg"src={Image24} width="100%" />
        </div>
        <div class="card-body">
            <h3>KASHMIR</h3>
            <h5>package-$9999.00</h5>
          </div>
          <div class="card-footer">
            <button class="btn1"type="button"><a class="text-light" href="https://www.google.com/search?q=kashmir+tour&oq=KAS&aqs=
            chrome.1.69i57j0i67i650j46i67i340i433i650l2j0i67i4
            33i650j0i20i263i512j46i199i340i465i512j46i131i433i650j0i512j46i131i175i199i433i512i654.
            3954j0j15&sourceid=chrome&ie=UTF-8">Know More</a></button>
          </div>
          </div>
  </div>
  <br/><br/>

    <div id="roow" class="container-fluid">
      <div class="row colrow">
      <div class="col-sm-3">
        <h1 class="text-center">customer</h1>
        <hr class="text-center"/>
        <h3 class="text-center">8500+</h3>
      </div>
      <div class="col-sm-3">
        <h1 class="text-center">booking</h1>
        <hr class="text-center"/>
        <h3 class="text-center">4500+</h3>
      </div>
      <div class="col-sm-3">
        <h1 class="text-center">plan</h1>
        <hr class="text-center"/>
        <h3 class="text-center">2500+</h3>
      </div>
      <div class="col-sm-3">
        <h1 class="text-center">tour</h1>
        <hr class="text-center"/>
        <h3 class="text-center">6500+</h3>
        
      </div>
      </div>
    </div>

{/* Reviews */}
<br/><br/>

<h1 id="trip" class="text-center">Reviews</h1>
<br/><br/>

<div id="reviewcard" class="container-fluid">
  <br/><br/>
<div class="card myrev">
            <div class="card-img">
            <img class="myimg1 text-center"src={Image18} width="100%" />
        </div><br/>
        <div class="card-body">
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
          <p>A review is an evaluation of a publication, product, service, or company or a critical take on current affairs 
              in literature, politics or culture.
               In addition to a critical evaluation, the review's author may assign 
               the work a rating to indicate its relative merit...</p>
          </div>
          </div>
          <div class="card myrev">
            <div class="card-img">
            <img class="myimg1 text-center"src={Image19} width="100%" />
        </div><br/>
        <div class="card-body">
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
          <p>A review is an evaluation of a publication, product, service, or company or a critical take on current affairs 
              in literature, politics or culture.
               In addition to a critical evaluation, the review's author may assign 
               the work a rating to indicate its relative merit...</p>
          </div>
          </div>
          <div class="card myrev">
            <div class="card-img">
            <img class="myimg1 text-center"src={Image20} width="100%" />
        </div><br/>
        <div class="card-body">
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
          <p>A review is an evaluation of a publication, product, service, or company or a critical take on current affairs 
              in literature, politics or culture.
               In addition to a critical evaluation, the review's author may assign 
               the work a rating to indicate its relative merit...</p>
          </div>
          </div>
          <div class="card myrev">
            <div class="card-img">
            <img class="myimg1 text-center"src={Image21} width="100%" />
        </div><br/>
        <div class="card-body">
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
          <p>A review is an evaluation of a publication, product, service, or company or a critical take on current affairs 
              in literature, politics or culture.
               In addition to a critical evaluation, the review's author may assign 
               the work a rating to indicate its relative merit...</p>
          </div>
          </div>
          <br/><br/>
          </div>
          <br/><br/>
<Footer/>
</>
  );
}

export default Home;