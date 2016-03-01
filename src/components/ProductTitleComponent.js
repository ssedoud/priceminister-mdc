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
      <li>Titre : </li>
      <li>Note : </li>
      <li>Nombre de reviews : </li>
    </ul>
    </p></div>
  }
}

export default ProductTitleComponent;
