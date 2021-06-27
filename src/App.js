import React,{Component} from 'react'

import { Route,BrowserRouter} from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Event from './component/event'
import Post from './component/post'
import Book from './component/booking'
class App extends Component{  
  render(){
    return(
     <BrowserRouter>
      
      
        
        
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Event" component={Event} />
        <Route path="/bookings" component={Book} />
        <Route path="/gallery" component={Post} />

        
        
      
      </BrowserRouter>
    )
  }
}

export default App;
