import React, { PropTypes } from 'react';
import HeaderComponent from '../components/HeaderComponent';

class PriceMinister extends React.Component {

handle(){
  this.context.router.replace('/productList/d');
}


  render(){
    return <div id="web-box">
            <HeaderComponent history={this.context.router}/>
            <div className="row">
              {this.props.children}
            </div>
          </div> ;
  }
}

PriceMinister.contextTypes = {
router: function() { return React.PropTypes.func.isRequired; }
};

export default PriceMinister;
