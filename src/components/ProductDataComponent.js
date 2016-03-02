import React from 'react';

class ProductDataComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return <div className="col-md-5">

             <div className="row">
               <div className="single-item">
                 <div>
                   <h3>
                     <img src={this.props.product.imagesUrls}
                          className="img-responsive center-block"
                          alt="Responsive image" />
                   </h3>
                 </div>
               </div>
             </div>

             <div className="row marginTop_15">
               <div id="toolbar">
                 <div className='wrapper text-center'>
                   <div className="btn-group btn-group-sm" role="group" aria-label="...">
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-share-alt">  </span> &nbsp;Partager</button>
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-bell"> </span>  &nbsp;Alerte Prix</button>
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-heart"> </span>  &nbsp;Favoris</button>
                   </div>
                 </div>
               </div>
             </div>

             <div className="category">
               Livres sur l'art et la culture > Livres Art égyptien
             </div>

             <div>
               <a href="#" className="descriptif">Voir le descriptif</a>
             </div>

           </div>;
  }
}

export default ProductDataComponent;
