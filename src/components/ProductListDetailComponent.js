import React from 'react';
import { Link } from 'react-router';
import OfferSummaryComponent from './productList/OfferSummaryComponent'
import ScoreComponent from './common/ScoreComponent'


class ProductListDetailComponent extends React.Component {

   render() {

     var productLink = "/product/" + this.props.product.id;

     return <div className="product-box">
               <div className="row">
                 <div className="col-md-3">
                   <Link to={productLink}>
                     <img src={this.props.product.imagesUrls[0]} width = "170" heigth= "170" className="img-responsive center-block" alt="Responsive image"/>
                   </Link>
                 </div>

                 <div className="col-md-5">
                   <a href = "#" className="title"> {this.props.product.headline}</a>
                   <br/>
                   <ScoreComponent
                   score={this.props.product.reviewsAverageNote}
                   reviewCount={this.props.product.nbReviews}/>
                   <br/>
                   <span className="selling" ><button className="btn btn-default btn-sm">Vendez le vôtre</button><br/><br/></span>
                </div>

                   <OfferSummaryComponent
                   advertsUsedCount={this.props.product.advertsUsedCount}
                   usedBestPrice={this.props.product.usedBestPrice}
                   bestPrice={this.props.product.bestPrice}
                   advertNewCount={this.props.product.advertNewCount}
                   newBestPrice={this.props.product.newBestPrice}
                   />

               </div>
             </div>;
          }
}
export default ProductListDetailComponent;
