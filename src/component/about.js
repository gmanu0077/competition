import React, { Component } from 'react'
import './ev.css'
import "./nav.css"
class About extends Component{
  render(){
    return(
    <div >
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
    <div className="row center">
    
    <div className="col s12 m4 l4"><img src="./pic/ab1.jpg"></img></div>
    <div className="col sec2 s12 m4 l4"><h2 className=" left">About us</h2></div>
    <div className="col s12 m4 l4"><img src="./pic/ab2.jpg" ></img></div>
    <div className="col container   z-depth-3  s12 m12 l12">
     <h3 className=" purple-text">4 Seasons Of Jurassicpark Happy</h3>
<br></br>
     <h3 className="blue-text">Springtime In The Park</h3>
     <h5>Get an early taste of the summer fun at our seasonal event, Springtime In The Park. During your visit, enjoy more than 50 rides.</h5>
<br></br>
<br>

</br>
<br>

</br>

<h3 className="blue-text">
Summer Season
</h3>
<h5>
Jurassicpark is a sweet summertime destination. Enjoy 121 acres of outdoor attractions surrounded by shady trees, ample green spaces, and fresh Pennsylvania air. Guests of all ages can enjoy thrilling coasters, classic family rides, water park fun, and sweet memories in a beautiful environment.
</h5>
<br></br>
<br>

</br>
<br>

</br>
<h3 className="blue-text">Jurassicpark In The Dark</h3>
<h5>Get ready for sweets, treats, and front row seats at our seasonal event, Jurassicpark In The Dark. Plus, this is the only time of the year to experience Creatures Of The Night® attraction at ZooAmerica and dark rides!</h5>
<br></br>
<br>

</br>
<br></br>
<h3 className="blue-text">Jurassicpark Christmas Candylane</h3>
<h5>Get in the spirit with festive family fun at our seasonal event, Jurassicpark Christmas Candylane. Check out more than 5 million twinkling lights from the top of a coaster and visit Santa and all 9 of his reindeer!</h5>
    </div>
    
    


    </div>
    <div className=" foot white-text">
    <br>

    </br>
   
    
  <h5 className="center">contact us</h5>
  <div className="icons">
  <i className="center medium material-icons">directions
 </i>
  <i className="medium material-icons">call</i>
  <i className="medium material-icons">business_center</i>
  <i className="medium material-icons">chat_bubble</i>
</div>
</div>

      
     </div>
      
    )
}}
export default About;
