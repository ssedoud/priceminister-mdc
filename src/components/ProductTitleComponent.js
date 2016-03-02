import React from 'react';

class ProductTitleComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    console.log(this.props);
    return <div><p>ProductTitleComponent :</p>
      <ul>
        <li>Titre : {this.props.product.headline}</li>
        <li>Note : {this.props.product.productNote}</li>
        <li>Nombre de reviews : {this.props.product.nbReviews}</li>
      </ul>
    </div>
  }
}

export default ProductTitleComponent;
