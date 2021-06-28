import React, { Component } from 'react'

import "./nav.css"
class Book extends Component{
  render(){
    console.log(this.props)

    return(
        <div>
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
      <div className="mm container">
       <div className="row red lighten-2">
       <div className="col s12 m6 l6">
      <form className=" white-text form container">
      <h2 className="white-text"> BUY TICKETS</h2>
      <br></br>
      <br></br>
      <label className="white-text" htmlFor="name">name</label>
      <input className="white-text" />
      <label className="white-text" htmlFor="name">E-mail</label>
      <input className="white-text"/>

      <label className="white-text" htmlFor="name">Age</label>
      <input className="white-text"/>
     <br></br>
     <br></br>
      <button className="  btn">BUY</button>


      </form>
      </div>
      <div className="col s12 m6 l6">

          <img  className="responsive-img" src="./pic/book1.jpg"></img>
      </div>
      
      </div>
</div>
      </div>
    )
  }
}
export default Book;
