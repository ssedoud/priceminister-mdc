import React from 'react';
import ajax from 'superagent';
import jsonp from 'superagent-jsonp';
import $ from 'jquery';
import { Link } from 'react-router';

class ProductListComponent extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          products: []
      };
  }

  componentWillMount() {
    // var keyword = 'iphone'
    // var pageNumber = 1
    // var baseUrl = 'http://ws.priceminister.com/rest/navigation/v1/list?'
    // //kw=<kw>&pageNumber=<pn>&advertType=<ad>&channel=hackathon&loadProducts=<lp>&withoutStock=<ws>';
    // ajax
    // .get(`${baseUrl}kw=${keyword}&pageNumber=${pageNumber}&channel=hackathon`)
    // .use(jsonp)
    //     .end((error, response) => {
    //         if (!error && response) {
    //             this.setState({ products: response.body });
    //         } else {
    //             console.log(`Error fetching`, error);
    //         }
    //     }
    // );
    //  var baseUrl = 'http://ws.priceminister.com/rest/navigation/v1/list?'
    //
    //
    // $.ajax({
    //      url:`${baseUrl}kw=iphone&pageNumber=1&channel=hackathon`,
    //      dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    //      jsonp: 'callback',
    //     //  jsonpCallback: 'jsonpCallback',
    //      success:function(json){
    //          // do stuff with json (in this case an array)
    //          alert("Success");
    //      },
    //      error:function(){
    //          alert("Error");
    //      },
    // });
    //
    // function jsonpCallback(data){
    //     alert("jsonpCallback");
    // }

  }

  render() {
      // return (
        // <div>{this.state.products.map((product, index) => {

                    return (<div className="product-box">
                              <div className="row">
                                <div className="col-md-3">
                                  <Link to="/product/113097659">
                                    <img src="http://pmcdn.priceminister.com/photo/The-Division-1062158383_L.jpg" width = "170" heigth= "170"
                                      className="img-responsive center-block" alt="Responsive image"/>
                                  </Link>
                                </div>
                                <div className="col-md-5"> <a href = "#" className="title"> products</a> <br/>
                                  <span href = "#" className="glyphicon glyphicon-star yellow"> </span>
                                  <span href = "#" className="glyphicon glyphicon-star yellow"> </span>
                                  <span href = "#" className="glyphicon glyphicon-star yellow"> </span>
                                  <span href = "#" className="glyphicon glyphicon-star yellow"> </span>
                                  <span href = "#" className="glyphicon glyphicon-star yellow"> </span>
                                  <a href = "#" className = "avis"> (41 avis)</a> <br/><br/>
                                  <span className="selling" ><button className="btn btn-default btn-sm">Vendez le vôtre</button><br/><br/></span>
                                </div>
                                <div className="col-md-4">
                                  <a className="price" href="#" > 69,99 € </a>  Comme Neuf <br/>
                                  <a className="shipping" href="#"> + 2,90 € (frais de port) </a>
                                  <br/><br/>
                                  <button className="btn btn-primary btn-sm purchaseBtn"><span className="glyphicon glyphicon-shopping-cart"> </span> Ajouter au panier</button>
                                  <br/><br/>
                                  <span className="sellerSummary">Voir tous les vendeurs</span> <br/>
                                  <span className="offerSummary"> 21 neufs dès </span>
                                  <a href ="#"><span className="smallPrice">53,69 € </span> </a><br/>
                                  <span className="offerSummary">72 occasions dès </span>
                                  <a href ="#"><span className="smallPrice">51,99 € </span> </a>
                                </div>
                              </div>
                            </div>);
      // })}</div>);
  }
}

export default ProductListComponent;
