import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import ScrollToTop from "./utils/ScrollToTop";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
					<ScrollToTop>
						<Routes />
					</ScrollToTop>
				</Router>
    );
  }
}

export default App;
