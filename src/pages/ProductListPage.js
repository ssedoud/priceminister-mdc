import React from 'react';

import ProductListComponent from '../components/ProductListComponent';

class HomePage extends React.Component {
  render(){
    return  <div className="col-md-7">
              <ProductListComponent/>
            </div> ;
  }
}

export default HomePage;
