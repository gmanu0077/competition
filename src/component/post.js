import React,{Component} from 'react'
import "./nav.css"

class Post extends Component{
     
    zoom=()=>{
        var im=document.getElementById('1');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="1";
    }
   zoomout() {
        var GFG = document.getElementById("1");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom2=()=>{
        var im=document.getElementById('2');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomout2() {
        var GFG = document.getElementById("2");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom3=()=>{
        var im=document.getElementById('3');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomout3() {
        var GFG = document.getElementById("3");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom4=()=>{
        var im=document.getElementById('4');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomout4() {
        var GFG = document.getElementById("4");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom5=()=>{
        var im=document.getElementById('5');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomout5() {
        var GFG = document.getElementById("5");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom6=()=>{
        var im=document.getElementById('6');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomou6t() {
        var GFG = document.getElementById("6");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoom7=()=>{
        var im=document.getElementById('7');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="9";
    }
   zoomout7() {
        var GFG = document.getElementById("7");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    zoomf=()=>{
        var im=document.getElementById('fun');
        var currWidth = im.clientWidth;
        var currheight=im.clientHeight;
        
        im.style.width = (currWidth + 30) + "px";
        im.style.height=(currheight+30)+"px";
        im.style.zIndex="1";
    }
   zoomoutf() {
        var GFG = document.getElementById("fun");
        var currheight=GFG.clientHeight;
        var currWidth = GFG.clientWidth;
        GFG.style.height=(currheight-30)+"px";
        GFG.style.width = (currWidth - 30) + "px";
    }
    render(){
       
      
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
            <div className="container">
            <h2 className="center orange-text">
                GALLERY-\
            </h2>
            <div class="row">
    <div class="col s12 m6">
      <div class="card red lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/1.jpg"  id="1" height="300vw" width="400vw" />
        </div>
        <div class="card-action">
          <button onClick={this.zoom} className="btn">show more</button>
          <button onClick={this.zoomout} className="btn">show less</button>
          </div>
      </div>
    </div>


    <div class="col s12 m6">
      <div class="card yellow lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/2.jpg" id="2"  height="300vw" width="400vw"/>
        </div>
        <div class="card-action">
        <button onClick={this.zoom2} className="btn">show more</button>
          <button onClick={this.zoomout2} className="btn">show less</button>
          </div>
      </div>
    </div>
  
                
  <div class="col s12 m6">
      <div class="card orange lighten-3 z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/3.jpg" id="3" height="300vw" width="400vw"/>
        </div>
        <div class="card-action">
        <button onClick={this.zoom3} className="btn">show more</button>
          <button onClick={this.zoomout3} className="btn">show less</button>
          </div>
      </div>
    </div>

         <div class="col s12 m6">
      <div class="card green lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/4.jpg" id="4" height="300vw" width="400vw" />
        </div>
        <div class="card-action">
        <button onClick={this.zoom4} className="btn">show more</button>
          <button onClick={this.zoomout4} className="btn">show less</button>
          </div>
      </div>
    </div>       

    <div class="col s12 m6">
      <div class="card blue lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/5.jpg" id="5" height="300vw" width="400vw" />
        </div>
        <div class="card-action">
        <button onClick={this.zoom5} className="btn">show more</button>
          <button onClick={this.zoomout5} className="btn">show less</button>
          
          </div>
      </div>
    </div>
                

    <div class="col s12 m6">
      <div class="card pink lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/6.jpg" id="6" height="300vw" width="400vw" />
        </div>
        <div class="card-action">
        <button onClick={this.zoom6} className="btn">show more</button>
          <button onClick={this.zoomout6} className="btn">show less</button>
          </div>
      </div>
    </div>


    <div class="col s12 m6">
      <div class="card purple lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/7.jpg" id="7"  height="300vw" width="400vw"/>
        </div>
        <div class="card-action">
        <button onClick={this.zoom7} className="btn">show more</button>
          <button onClick={this.zoomout7} className="btn">show less</button>
          </div>
      </div>
    </div>


    <div class="col s12 m6 l6">
      <div class="card grey lighten-2  z-depth-3">
        <div class="card-content white-text">
        <img src="./pic/fun.jpg" id="fun" height="300vw" width="400vw" />
        </div>
        <div class="card-action">
        <button onClick={this.zoomf} className="btn">show more</button>
          <button onClick={this.zoomoutf} className="btn">show less</button>
          </div>
      </div></div>
    </div>
</div>
            </div>
        )
    }
}
export default Post;
