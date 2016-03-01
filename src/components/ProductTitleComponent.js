import React from 'react';

class ProductTitleComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return <div><p>ProductTitleComponent :
    <ul>
      <li>Titre : {this.props.product.headline}</li>
      <li>Note : {this.props.product.productNote}</li>
      <li>Nombre de reviews : {this.props.product.nbReviews}</li>
    </ul>
    </p></div>
  }
}

export default ProductTitleComponent;
