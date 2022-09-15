import React from 'react';

import 'antd/dist/antd.css';
import Header from './components/common/header';
import Content from './components/common/content';
import Pricingpage from './components/common/pricingpage';
import Pricingpage1 from './components/common/pricingpage1';

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
        <div style={{marginTop: '50px'}}>
          <Pricingpage1 />
        </div>
        
      </>
    
    
  );
}

export default App;
