import React from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from './Login'
import DefaultPage from './DefaultPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LoginView = () => (
	<Login />	
);

const DefaultPageView = () => (
	<DefaultPage />
);

function App() {
  return (
    <div className="App">
	  <Router>
		<div>
		  <ul>
		  </ul>

		  <hr />

		  <Route exact path="/" component={LoginView} />
		  <Route path="/inicio" component={DefaultPageView} />
		</div>
	  </Router>
    </div>
  );
}

export default App;
