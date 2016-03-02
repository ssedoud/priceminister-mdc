import React from 'react';
import ajax from 'superagent';
import jsonp from 'superagent-jsonp';
import $ from 'jquery';

import ProductTitleComponent from './ProductTitleComponent';

class ProductPageDetailComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        'result' : {},
        'product' : {}
      };

  }

    toto() {
      return "0";
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
                this.state.result = response.body.result;
                this.state.product = {
                  "id" : this.state.result.id,
                  "headline" : this.state.result.headline,
                  "productNote" : this.state.result.reviewsAverageNote,
                  "nbReviews" : this.state.result.nbReviews
                }
            } else {
                console.log(error);
            }
        }
    );
  }

  render() {
    let product = this.state.product;
    return <div>
      <p>Mettre dans ProductPageDetailComponent.render() le contenu de la page</p>
      <ProductTitleComponent product={product}/>
    </div>;
  }

}

export default ProductPageDetailComponent;
