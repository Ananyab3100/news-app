import './App.css';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/'element={<News key='general' pageSize ={9} country='in' category='general'/>}/>
          <Route  path='/business' element={<News key='business' pageSize ={9} country='in' category='business'/>}/>
          <Route  path='/entertainment' element={<News key='entertainment' pageSize ={9} country='in' category='entertainment'/>}/>
          <Route  path='/general' element={<News key='general' pageSize ={9} country='in' category='general'/>}/>
          <Route  path='/health' element={<News key='health' pageSize ={9} country='in' category='health'/>}/>
          <Route  path='/science' element={<News key='science' pageSize ={9} country='in' category='science'/>}/>
          <Route  path='/sports' element={<News key='sports' pageSize ={9} country='in' category='sports'/>}/>
          <Route  path='/technology' element={<News key='echnology' pageSize ={9} country='in' category='technology'/>}/>
        </Routes>
        
      </div>
      </Router>
    )
  }
}

