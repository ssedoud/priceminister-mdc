import React from 'react';

import ProductListComponent from '../components/productList/ProductListComponent';
import CarouselComponent from '../components/CarouselComponent';

class HomePage extends React.Component {
  render(){
    return  <div className="col-md-7">
              <CarouselComponent/>
              <ProductListComponent/>
            </div> ;
  }
}

export default HomePage;
