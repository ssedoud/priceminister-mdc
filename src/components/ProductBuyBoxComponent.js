import React from 'react';

class ProductBuyBoxComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return <div className="col-md-7">
              <div className="marginTop_15">
                <span className="price"> 39,99 € Neuf </span>
                &nbsp;&nbsp;<span className="stock"><span className="glyphicon glyphicon-ok"></span>&nbsp;En stock (1)</span>
              <br />
                <span className="free-shipping">Livraison Gratuite</span>
                <br /><br />

                  <img src="img/rsp_icon.png" width="20" height="20" alt="rsp" />
                  <span className="rsp">70 Super Points</span> à cumuler<br /><br />
                  Commentaire du vendeur : <br />

                  <div className="summary">
                    "Ce jeux est tout simplement extraordinaire. Ce jeux est tout simplement extraordinaire.
                    Ce jeux est tout simplement extraordinaire. Ce jeux est tout simplement extraordinaire.
                    A acheter d'urgence ..."
                  </div>
                  <br />

                    <img src="img/truck.jpeg" width="20" height="20" alt="truck" /> &nbsp;
                    <a href="#" className="shippingMode"> Mode d'expédition</a>

                    <br /><br />

                    <div className="btn-group" role="group" aria-label="...">
                      <button type="button" className="btn btn-default bkColorPM"><span className="glyphicon glyphicon-shopping-cart">  </span> &nbsp; Ajouter au panier</button>
                      <button type="button" className="btn btn-default btn-contact-seller"><span className="glyphicon glyphicon-send"> </span>  &nbsp;Contacter le vendeur</button>
                    </div>

                    <br /><br />

                    <span className="offerSummary"> 21 neufs dès </span>
                    <a href ="#"><span className="smallPrice">{this.props.product.newBestPrice} € </span> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="offerSummary">72 occasions dès </span>
                    <a href ="#"><span className="smallPrice">{this.props.product.usedBestPrice} € </span> </a>
              </div>
          </div>;
  }
}

export default ProductBuyBoxComponent;
