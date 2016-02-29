import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/MenuComponent';

class PriceMinister extends React.Component {
  render(){
    return <div id="web-box">
            <HeaderComponent/>
            <div className="row">
              <MenuComponent/>
              {this.props.children}
            </div>
          </div> ;
  }
}

export default PriceMinister;
