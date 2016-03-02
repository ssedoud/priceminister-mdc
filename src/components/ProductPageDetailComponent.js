import React from 'react';
import ajax from 'superagent';
import $ from 'jquery';

import ProductTitleComponent from './ProductTitleComponent';
import ProductDataComponent from './ProductDataComponent';

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
          //'User-Agent': 'HACKATHON Q1.2016',
          'Accept' : 'application/json'
        })
        .end((error, response) => {
            if (!error && response) {
                this.setState({
                  result : response.body.result,
                  product : {
                    "id" : response.body.result.id,
                    "urlName" : response.body.result.urlName,
                    "breadcrumbs" : response.body.result.breadcrumbs,
                    "headline" : response.body.result.headline,
                    "productNote" : response.body.result.reviewsAverageNote,
                    "nbReviews" : response.body.result.nbReviews,
                    "imagesUrls" : response.body.result.imagesUrls
                  }
                });
            } else {
                console.log(error);
            }
        }
    );
  }

  // Mettre dans ProductPageDetailComponent.render() le contenu de la page
  render() {
    console.log(this.state);
    return  <div className="row">
              <div className="col-md-12">
                <div className="product-box">
                  <ProductTitleComponent product={this.state.product}/>
                  <ProductDataComponent product={this.state.product}/>
                </div>
              </div>
            </div>;
  }

}

export default ProductPageDetailComponent;
