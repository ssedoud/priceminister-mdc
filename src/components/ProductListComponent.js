import React from 'react';
import ajax from 'superagent';
import ProductListDetailComponent from './ProductListDetailComponent';

class ProductListComponent extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          products: {}
      };
  }

   componentWillMount() {
     var keyword = 'iphone'
     var pageNumber = 1
     var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/navigation/v1/list?'
     ajax
     .get(`${baseUrl}kw=${keyword}&pageNumber=${pageNumber}&channel=hackathon`)
      .set('User-Agent', "some spoofed agent")
         .end((error, response) => {
             if (!error && response) {
                 this.setState({ products: response.body });
             } else {
                 console.log(`Error fetching`, error);
             }
         }
     );

   }


   render() {

       return (<div><ProductListDetailComponent/></div>);
   }


}


export default ProductListComponent;


// {this.state.products['result']['products'].map((event, index) => {
    //  return (
       //<ProductListDetailComponent/>
    //  );
//  })}
