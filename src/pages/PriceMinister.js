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
            <button className="btn btn-default bkColorPM" type="button" onClick={this.handle.bind(this)} >
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </div> ;
  }
}

PriceMinister.contextTypes = {
router: function() { return React.PropTypes.func.isRequired; }
};

export default PriceMinister;
