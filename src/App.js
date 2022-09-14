import React from 'react';

import './App.css';
import 'antd/dist/antd.css';
import Header from './components/common/header';
import Content from './components/common/content';
import Pricingpage from './components/common/pricingpage';


function App() {
  return (
    
      <>
        <Header/>
        <div style={{marginTop: '50px'}}>
        <Content/>
        </div>
        <div style={{marginTop: '50px'}}>
          <Pricingpage />
        </div>
        
      </>
    
    
  );
}

export default App;
