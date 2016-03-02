import React from 'react';

class ProductTitleComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return <div className="product-title-box">
             <span className="title">{this.props.product.headline}</span>&nbsp;
             <span className="glyphicon glyphicon-star yellow"> </span>
             <span className="glyphicon glyphicon-star yellow"> </span>
             <span className="glyphicon glyphicon-star yellow"> </span>
             <span className="glyphicon glyphicon-star yellow"> </span>
             <span className="glyphicon glyphicon-star yellow"> </span>
             <a href = "#" className = "avis"> ({this.props.product.nbReviews} avis)</a>
           </div>
  }
}

export default ProductTitleComponent;
