import React from 'react';
import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner'
import Nav from './Nav';
import Signin from './Signin'  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
     <Router>
       <Switch>
          <Route path="/home">
            <Signin />
          </Route>
          <Route path='/'>
           <div className="App">
            <Nav />
            <Banner />
            <Row title="Toprated" fetchUrl={requests.fetchToprated} />
            <Row title="Moviepopular"  fetchUrl={requests.moviePopular} />
            <Row title="Tvpopular"  fetchUrl={requests.tvPopular} />
            <Row title="Tvtoprated"  fetchUrl={requests.tvToprated} />
           </div> 
          </Route>
       </Switch>
     </Router>     
  );
}

export default App;
