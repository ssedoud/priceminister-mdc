import React from 'react';

import ProductListComponent from '../components/ProductListComponent';
import CarouselComponent from '../components/CarouselComponent';

class HomePage extends React.Component {
  render(){
    return  <div className="col-md-7">
              <CarouselComponent/>
              <br/>
              <ProductListComponent/>
            </div> ;
  }
}

// Test

export default HomePage;
