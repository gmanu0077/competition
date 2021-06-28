import React, { Component } from 'react'
import './ev.css'
import "./nav.css"
class Event extends Component{
  render(){
    return(
      <div >
                   <div className="main">
             
             <div className="mainn">
            
            <div className="j">J̾</div>
            <div className="u">u</div>
            <div className="r1">r</div>
         
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
          <h2 className=" orange-text text-darken-3 center">EVENTS</h2>

          <div className="row purple lighten-2 ">
      <div className="col sec  l6 m6 s12">
       <h2 className="center white-text">Springtime In The Park</h2>
        
      </div>
      <div className="col l6 m6 s12"> <img  className="responsive-img" src="./pic/spring.jpg" height="450vw" /></div>
      
      </div>
      <div className="row blue container lighten-2 ">
      <div className="col sec  l6 m6 s12">
       <h2 className="center white-text">Summer</h2>
        
      </div>
      <div className="col l6 m6 s12"> <img  className="responsive-img" src="./pic/sum.jpg" height="450vw" width="450vw" /></div>
      </div>
      <div className="row purple ">
      <div className="col sec  l6 m6 s12">
       <h2 className="center white-text">JurassicPark in the Dark</h2>
        
      </div>
      <div className="col l6 m6 s12"> <img  className="responsive-img" src="./pic/harsh.jpg" height="450vw" /></div>
      </div>
      <div className="row container green darken-3 ">
      <div className="col sec  l6 m6 s12">
       <h2 className="center white-text">Christmas Candylane</h2>
        
      </div>
      <div className="col l6 m6 s12"> <img  className="responsive-img" src="./pic/ch.jpg" height="450vw" /></div>
      </div>
      </div>


      
     
      
    )
}}
export default Event;
