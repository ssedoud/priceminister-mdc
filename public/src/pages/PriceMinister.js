import React, { PropTypes } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/MenuComponent';

class PriceMinister extends React.Component {

handle(){
  this.context.router.replace('/productList/d');
}


  render(){
    return <div id="web-box">
            <HeaderComponent history={this.context.router}/>
            <div className="row">
              <MenuComponent/>
              {this.props.children}
            </div>
          </div> ;
  }
}

PriceMinister.contextTypes = {
router: function() { return React.PropTypes.func.isRequired; }
};

export default PriceMinister;
