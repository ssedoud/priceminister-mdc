import React from 'react';

import MenuComponent from '../components/MenuComponent';
import ProductListComponent from '../components/productList/ProductListComponent';
import CarouselComponent from '../components/CarouselComponent';

class HomePage extends React.Component {
  render(){
    return <div>
      <MenuComponent/>
      <div className="col-md-7">
        <CarouselComponent/>
        <ProductListComponent/>
      </div>
    </div>;
  }
}

export default HomePage;
