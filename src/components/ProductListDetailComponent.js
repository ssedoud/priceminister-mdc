import React from 'react';
import { Link } from 'react-router';


class ProductListDetailComponent extends React.Component {

   render() {
     return <div className="product-box">
               <div className="row">
                 <div className="col-md-3">
                   <Link to="/product/543772">
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
                   <button className="btn btn-default btn-sm bkColorPM"><span className="glyphicon glyphicon-shopping-cart"> </span> Ajouter au panier</button>
                   <br/><br/>
                   <span className="sellerSummary">Voir tous les vendeurs</span> <br/>
                   <span className="offerSummary"> 21 neufs dès </span>
                   <a href ="#"><span className="smallPrice">53,69 € </span> </a><br/>
                   <span className="offerSummary">72 occasions dès </span>
                   <a href ="#"><span className="smallPrice">51,99 € </span> </a>
                 </div>
               </div>
             </div>;
          }
}
export default ProductListDetailComponent;
