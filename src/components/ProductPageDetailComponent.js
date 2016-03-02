import React from 'react';
import ajax from 'superagent';
import $ from 'jquery';

import ProductTitleComponent from './ProductTitleComponent';

class ProductPageDetailComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        result : {},
        product : {}
      };

  }

  componentWillMount() {
    var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/product/v1/get';

    ajax.get(`${baseUrl}?advertType=NEW&productId=${this.props.productId}&channel=hackathon&loadProductDetails=true`)
        .set({
          'User-Agent': 'HACKATHON Q1.2016',
          'Accept' : 'application/json'
        })
        .end((error, response) => {
            if (!error && response) {
                this.setState({
                  result : response.body.result,
                  product : {
                    "id" : response.body.result.id,
                    "headline" : response.body.result.headline,
                    "productNote" : response.body.result.reviewsAverageNote,
                    "nbReviews" : response.body.result.nbReviews
                  }
                });
            } else {
                console.log(error);
            }
        }
    );
  }

  render() {
    console.log(this.state);
    return <div>
      <p>Mettre dans ProductPageDetailComponent.render() le contenu de la page</p>
      <ProductTitleComponent product={this.state.product}/>
    </div>;
  }

}

export default ProductPageDetailComponent;
