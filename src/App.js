import React from 'react';
import Header from './component/Header';
import BottomTop from './component/BottomTop';
// import Middle from './component/Middle';
import Body from './component/Body';
import Bottom from './component/Bottom';
import Last from './component/Last';
import Lasts from './component/Lasts';

import Bag from './component/Bag';
import Account from './component/Account';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css'
import { GlobalProvider } from './context/GlobalState';


function App() {
  
  return (
    <GlobalProvider>
      <Router>
       
          
          
              <Route exact path="/" render= {props => (
                <React.Fragment>
                    <Header />
                    <BottomTop />
                    {/* <Middle /> */}
                    <Body  />
                    <Bottom />
                    <Last />
                    <Lasts />
                </React.Fragment>
              )}  />
           
              <Route exact path='/Bag'>
                <Bag  />
              </Route> 
              <Route path='/Account'>
                <Account />
            </Route>
          
      
      </Router>
    </GlobalProvider>
    
  )
};

export default App;