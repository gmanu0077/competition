import React, { Component } from 'react'
import "./home.css"
import "./nav.css"
class Home extends Component{
  render(){
    console.log(this.props)

    return(
      <div>
      <div className="main">
             
      <div className="mainn">
     
     <div className="j">J̾</div>
     <div className="u">u</div>
     <div className="r1">r</div>
     <div className="r2">r</div>
     <div className="a">a</div>
     <div className="s">s</div>
     <div className="s">s</div>
     <div className="i">I</div>
     <div className="c">c</div>
     <div className="p">P</div>
     <div className="a">a</div>
     <div className="r">R</div>
     <div className="k">k</div>
     </div>
     <ul className="left">
       <li className="li1  text-white"><button onClick={()=>{this.props.history.push('/')}}  className="btn pink white-text" >HOME</button></li>
       <li className="li2  text-white"><button onClick={()=>{this.props.history.push('/Event')}} className="btn yellow white-text" >EVENTS</button></li>
       <li className="li3  text-white"><button onClick={()=>{this.props.history.push('/gallery')}} className="btn green white-text" >GALLERY</button></li>
       <li className="li4  text-white"><button onClick={()=>{this.props.history.push('/bookings')}} className="btn blue white-text" >BOOKING  </button></li>
       <li className="li5  text-white"><button onClick={()=>{this.props.history.push('/about')}} className="btn red white-text" >ABOUT US</button></li>
       
     </ul></div>
      <div className="mm">
      

      <div className="row con container">
      <div className="col l6 m6 s12">
       <h3 className="left">Get Back To Happy</h3>
        <h5 className="left">Jurassicpark has something for everyone! From thrilling coasters to classic family rides to an ENTIRE water park, there are countless ways to ride the day away at jurassicpark.</h5>
      </div>
      <div className="col l6 m6 s12"> <img class="responsive-img" src="./pic/gif.gif" height="100%" /></div>
      
      </div>
     
      <div className="row co2">
      <div className="col l4 m4 s12 "> <img class="responsive-img" src="./pic/fam.jpg" height="400vw" width="440vw" /></div>
      <div className="col sec l4 m4 s12 ">
       <h3 className="left">Kids, Stay, Play & Eat FREE Package</h3>
        <h5 className="riht">Book a fun-filled family getaway to The Official Resorts Of Jurassicpark with our sweet summer packages and save big every night of your stay!</h5>
      </div>
      <div className="col l4 m4 s12 "> <img class="responsive-img" src="./pic/kid.jpg" height="400vw" width="435vw" /></div>
      
      </div>
       
      <div className="row blue third">
      
      <div className="col l6 s12"> <img class="responsive-img" src="./pic/fun.jpg" height="410vw" /></div>
      <div className="col seco l6 s12">
       <h2 className="center white-text">Be Part Of The Fun</h2>
        <h5 className="center white-text">Experience the newest region of Jurassicpark,it is home to our biggest coaster, all-new dining experiences, premier shopping, and more!</h5>
      </div>
      </div>

      <div className="row con ">
      <div className="col l3 m6 s12">
      <img   src="./pic/2.jpg" height="300vw" />
      </div>
      <div className="col l3 m6 s12"> <img  src="./pic/7.jpg" height="300vw" /></div>
      <div className="col l3  m6 s12">
      <img  src="./pic/4.jpg" height="300vw" />
      </div>
      <div className="col l3 m6 s12">
      <img  src="./pic/3.jpg" height="300vw" />
      </div>
      </div>

<div className="brown foot white-text">
  <h5 className="center">contact us</h5>
  <div className="icons">
  <i className="center medium material-icons">directions
 </i>
  <i className="medium material-icons">call</i>
  <i className="medium material-icons">business_center</i>
  <i className="medium material-icons">chat_bubble</i>
</div>
</div>


      </div></div>
    )
  }
}
export default Home;