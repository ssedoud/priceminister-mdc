import React from 'react';

import MenuComponent from '../components/MenuComponent';
import ProductListComponent from '../components/productList/ProductListComponent';
import CarouselComponent from '../components/CarouselComponent';
import MaterialComponent from '../components/common/MaterialComponent';

class HomePage extends React.Component {
  render(){
    return <div>
      <MenuComponent/>
      <div className="col-md-7">
        <CarouselComponent/>
        <ProductListComponent/>
      </div>

      <div>
        <MaterialComponent/>
      </div>
    </div>;
  }
}

export default HomePage;
