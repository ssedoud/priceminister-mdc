import React from 'react';
import ajax from 'superagent';
import jsonp from 'superagent-jsonp';
import $ from 'jquery';

import ProductTitleComponent from './ProductTitleComponent';

class ProductPageDetailComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {};

  }

    toto() {
      return "0";
    }


  componentWillMount() {
    // var baseUrl = 'http://ws.priceminister.com/rest/product/v1/get';
    // $.ajaxSetup({
    //   beforeSend: function(request) {
    //     request.setRequestHeader("User-Agent","HACKATHON Q1.2016");
    //   }
    // });
    // $.ajax({
    //      url:`${baseUrl}?advertType=NEW&productId=${this.props.productId}&channel=hackathon&loadProductDetails=true`,
    //      dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    //      jsonp: 'callback',
    //      beforeSend : function(request) {
    //        request.setRequestHeader("User-Agent","HACKATHON Q1.2016");
    //      },
    //     //  jsonpCallback: 'jsonpCallback',
    //      success:function(json){
    //          // do stuff with json (in this case an array)
    //          console.log('success');
    //      },
    //      error:function(jqXHR){
    //          console.log(jqXHR);
    //      },
    // });

    // ajax.get(`${baseUrl}?advertType=NEW&productId=${this.props.productId}&channel=hackathon&loadProductDetails=true`)
    //     .set({
    //       'User-Agent': 'HACKATHON Q1.2016',
    //       jsonp: 'refreshSection',
    //       dataType: "jsonp"
    //     })
    //     .withCredentials()
    //     .end((error, response) => {
            // if (!error && response) {
            //     var response
            // } else {
            //     console.log(error);
            // }
    //     }
    // );
    // TODO : Appeler le WS à la place de getFakeAnswer !
    var result = this.getFakeAnswer().result;
    this.state.product = {
      "id" : result.id,
      "headline" : result.headline,
      "productNote" : result.reviewsAverageNote,
      "nbReviews" : result.nbReviews
    }
  }

  render() {
    return <div>
      <p>Mettre dans ProductPageDetailComponent.render() le contenu de la page</p>
      <ProductTitleComponent product={this.getProduct().bind(this)}/>
    </div>;
  }

  getProduct() {
    return this.state.product;
  }

  getFakeAnswer() {
    return {
  "webserviceVersion": "1",
  "result": {
    "aisle": "[TelPDA]::[Accessoiresmobiles]::[EtuiApple]",
    "id": 113097659,
    "isDigital": false,
    "urlName": "coque-etui-housse-effet-carbone-pour-iphone-4-iphone4-clip-etui-et-housse",
    "productScope": "PUBLIC",
    "adverts": [
      {
        "advertId": 614695902,
        "productId": 113097659,
        "salePrice": 7,
        "shippingAmount": 0,
        "seller": {
          "id": 21732772,
          "login": "Vendos85",
          "type": "PRO",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": 1280014348000,
          "lastLoginDate": 1456857241000,
          "saleCommitCount": 57173,
          "totalSaleCount": 58597,
          "saleCount": 57173,
          "averageScore": 4.37,
          "isoCountryId": 249,
          "sellerAnswerTime": 6055025520274,
          "isMicroCompagny": false
        },
        "attributes": null,
        "imagesUrls": [],
        "shippingTypes": [
          "NORMAL",
          "SUIVI",
          "RECOMMANDE",
          "CHRONOPOST"
        ],
        "availableShippingTypes": [
          {
            "id": 10,
            "label": "Normal",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          },
          {
            "id": 30,
            "label": "Suivi",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          },
          {
            "id": 15,
            "label": "Recommandé",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          },
          {
            "id": 60,
            "label": "Chronopost",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          }
        ],
        "isPickupAllowed": false,
        "pickupDistance": 0,
        "isAdvertInCircleRange": false,
        "quality": "NEW",
        "type": "NEW",
        "sellerComment": "nous vendons une housse carbone iphone 4",
        "expressDeliveryDate": 1457045999999,
        "isUnlimitedQuantity": false,
        "images": [],
        "rspMinimumAmount": 7
      },
      {
        "advertId": 873511852,
        "productId": 113097659,
        "salePrice": 9.49,
        "shippingAmount": 2.9,
        "seller": {
          "id": 21829837,
          "login": "COKenSTOK",
          "type": "PRO",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": 1281094050000,
          "lastLoginDate": 1456866453000,
          "saleCommitCount": 69996,
          "totalSaleCount": 72570,
          "saleCount": 69996,
          "averageScore": 4.8,
          "isoCountryId": 249,
          "sellerAnswerTime": 3568914271373,
          "isMicroCompagny": false
        },
        "attributes": null,
        "imagesUrls": [
          "http://pmcdn.priceminister.com/photo/1011754335.jpg"
        ],
        "shippingTypes": [
          "NORMAL",
          "SUIVI",
          "RECOMMANDE"
        ],
        "availableShippingTypes": [
          {
            "id": 10,
            "label": "Normal",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          },
          {
            "id": 30,
            "label": "Suivi",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          },
          {
            "id": 15,
            "label": "Recommandé",
            "isAllowedByPlatform": false,
            "isAllowedForSeller": false,
            "canBeModified": false,
            "isMandatory": false,
            "isPreselectedByDefault": false,
            "isMandatoryForFreeShipping": false,
            "isUnsupportedWithFreeShipping": false
          }
        ],
        "isPickupAllowed": false,
        "pickupDistance": 0,
        "isAdvertInCircleRange": false,
        "quality": "NEW",
        "type": "NEW",
        "sellerComment": "&#9668; &#9608; &#9658; &#9668; &#9608; &#9658; \"CARBONE RIGIDE Noir\" Housse iPhone 4G 4S De Qualité &#9733;&#9733;&#9733;&#9733; Protection Totale de votre iphone.Vendeur PRO Facture.Envoi tres rapide (Sauf week-end).",
        "expressDeliveryDate": 1457045999999,
        "isUnlimitedQuantity": false,
        "images": [
          {
            "imagesUrls": {
              "entry": [
                {
                  "size": "ORIGINAL",
                  "url": "http://pmcdn.priceminister.com/photo/1011754335.jpg"
                },
                {
                  "size": "LARGE",
                  "url": "http://pmcdn.priceminister.com/photo/1011754335_L.jpg"
                },
                {
                  "size": "MEDIUM",
                  "url": "http://pmcdn.priceminister.com/photo/1011754335_M.jpg"
                },
                {
                  "size": "SMALL",
                  "url": "http://pmcdn.priceminister.com/photo/1011754335_S.jpg"
                }
              ]
            },
            "id": 1011754335
          }
        ],
        "rspMinimumAmount": 10
      }
    ],
    "bestOffers": {
      "new": {
        "isBuybox": false,
        "score": 0,
        "adverts": [
          {
            "advertId": 614695902,
            "productId": 113097659,
            "salePrice": 7,
            "shippingAmount": 0,
            "seller": {
              "id": 21732772,
              "login": "Vendos85",
              "type": "PRO",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": 1280014348000,
              "lastLoginDate": 1456857241000,
              "saleCommitCount": 57173,
              "totalSaleCount": 58597,
              "saleCount": 57173,
              "averageScore": 4.37,
              "isoCountryId": 249,
              "sellerAnswerTime": 6055025520274,
              "isMicroCompagny": false
            },
            "attributes": null,
            "imagesUrls": [],
            "shippingTypes": [
              "NORMAL",
              "SUIVI",
              "RECOMMANDE",
              "CHRONOPOST"
            ],
            "availableShippingTypes": [
              {
                "id": 10,
                "label": "Normal",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 30,
                "label": "Suivi",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 15,
                "label": "Recommandé",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 60,
                "label": "Chronopost",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              }
            ],
            "isPickupAllowed": false,
            "pickupDistance": 0,
            "isAdvertInCircleRange": false,
            "quality": "NEW",
            "type": "NEW",
            "sellerComment": "nous vendons une housse carbone iphone 4",
            "expressDeliveryDate": 1457045999999,
            "isUnlimitedQuantity": false,
            "images": [],
            "rspMinimumAmount": 7
          },
          {
            "advertId": 873511852,
            "productId": 113097659,
            "salePrice": 9.49,
            "shippingAmount": 2.9,
            "seller": {
              "id": 21829837,
              "login": "COKenSTOK",
              "type": "PRO",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": 1281094050000,
              "lastLoginDate": 1456866453000,
              "saleCommitCount": 69996,
              "totalSaleCount": 72570,
              "saleCount": 69996,
              "averageScore": 4.8,
              "isoCountryId": 249,
              "sellerAnswerTime": 3568914271373,
              "isMicroCompagny": false
            },
            "attributes": null,
            "imagesUrls": [
              "http://pmcdn.priceminister.com/photo/1011754335.jpg"
            ],
            "shippingTypes": [
              "NORMAL",
              "SUIVI",
              "RECOMMANDE"
            ],
            "availableShippingTypes": [
              {
                "id": 10,
                "label": "Normal",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 30,
                "label": "Suivi",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 15,
                "label": "Recommandé",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              }
            ],
            "isPickupAllowed": false,
            "pickupDistance": 0,
            "isAdvertInCircleRange": false,
            "quality": "NEW",
            "type": "NEW",
            "sellerComment": "&#9668; &#9608; &#9658; &#9668; &#9608; &#9658; \"CARBONE RIGIDE Noir\" Housse iPhone 4G 4S De Qualité &#9733;&#9733;&#9733;&#9733; Protection Totale de votre iphone.Vendeur PRO Facture.Envoi tres rapide (Sauf week-end).",
            "expressDeliveryDate": 1457045999999,
            "isUnlimitedQuantity": false,
            "images": [
              {
                "imagesUrls": {
                  "entry": [
                    {
                      "size": "ORIGINAL",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335.jpg"
                    },
                    {
                      "size": "LARGE",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_L.jpg"
                    },
                    {
                      "size": "MEDIUM",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_M.jpg"
                    },
                    {
                      "size": "SMALL",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_S.jpg"
                    }
                  ]
                },
                "id": 1011754335
              }
            ],
            "rspMinimumAmount": 10
          }
        ]
      }
    },
    "bestPrice": 0,
    "newBestPrice": 7,
    "usedBestPrice": 0,
    "collectibleBestPrice": 0,
    "collapseBestPrice": "7.00",
    "priceList": "3.00",
    "summaryNewBestPrice": "7.00",
    "summaryBestPrice": "7.00",
    "summaryAvailableStock": true,
    "summaryNew": true,
    "advertsCount": 2,
    "advertsNewCount": 2,
    "advertsUsedCount": 0,
    "advertsCollectibleCount": 0,
    "headline": "Coque Etui Housse Effet Carbone Pour Iphone 4 Iphone4",
    "caption": "Générique",
    "topic": " Etui ",
    "references": {},
    "breadcrumbs": [
      {
        "label": "Téléphonie et Tablettes",
        "url": "/nav/Tel-PDA",
        "isBlur": true
      },
      {
        "label": "Accessoires pour téléphone mobile et tablette",
        "url": "/nav/Tel-PDA_Accessoires-mobiles",
        "isBlur": false
      },
      {
        "label": "Etui  Apple",
        "url": "/nav/Tel-PDA_Accessoires-mobiles/f3/Apple/f5/Etui",
        "isBlur": false
      }
    ],
    "reviewsAverageNote": 4.056603773584905,
    "nbReviews": 53,
    "imagesUrls": [
      "http://pmcdn.priceminister.com/photo/869181018.jpg",
      "http://pmcdn.priceminister.com/photo/955747449.jpg"
    ],
    "reviews": [
      {
        "note": 3,
        "title": "mieux",
        "author": {
          "login": "hanenehb",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1322751944000,
        "description": "la pochette s'abime vite fait, dommage elle est belle"
      },
      {
        "note": 3,
        "title": "mauvaise qualité",
        "author": {
          "login": "Geoy5_7",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1319294368000,
        "description": "je trouve que la qualité de l'article est mauvaise les tissus ce dégrade très vite :("
      },
      {
        "note": 1,
        "title": "avis",
        "author": {
          "login": "tintin38360",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1313847545000,
        "description": "étui qui protège mais sans plus. assez fragile tout de même"
      },
      {
        "note": 5,
        "title": "tres bien",
        "author": {
          "login": "porche67",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1431545460000,
        "description": "bien recu impeccable,envoi rapide\nje recommande\nbon materiaux"
      },
      {
        "note": 5,
        "title": "Super coque !",
        "author": {
          "login": "eltoro78",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1420574651000,
        "description": "Cette coque est super ! Elle protège en tièrement mon écran. J'en suis entièrement satisfait."
      },
      {
        "note": 5,
        "title": "Très bien",
        "author": {
          "login": "floo_13100",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1396348767000,
        "description": "Coque très solide. Rien a dire. Je suis satisfaite de ce produit"
      },
      {
        "note": 5,
        "title": "bon produit",
        "author": {
          "login": "chiwi11",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1394741075000,
        "description": "envoie rapide et bon produit marche tres bien à conseiller"
      },
      {
        "note": 5,
        "title": "etui",
        "author": {
          "login": "ramalho52",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1394055807000,
        "description": "Je suis satisfait Coque Etui Housse Effet Carbone Pour Iphone 4 Iphone4"
      },
      {
        "note": 5,
        "title": "housse i phone",
        "author": {
          "login": "veronike37",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1392233887000,
        "description": "très bon article qualité et couleur sans aucun problème  à conseiller +++++"
      },
      {
        "note": 5,
        "title": "tres bien",
        "author": {
          "login": "camou27s",
          "isPreOrderGrant": false,
          "userFirstAdvertTrackingDate": null,
          "isUserBuyer": false,
          "userBirthDate": 0,
          "creationDate": null,
          "lastLoginDate": null
        },
        "date": 1390225678000,
        "description": "cette pochette et bien faites elle protege bien l ecrant est le cotes .... tout est niquel surtout sur priceminister merci priceminister"
      }
    ],
    "productDetailTitle": "Fiche Technique",
    "description": "<li class=\"sub\"><span class=\"label\">Fabricant&nbsp;: </span><em class=\"value\"><a data-pmbt=\"javascript:void PM.BT.ubs(47,'s',47,'g',37,'e9n',37,'e9rique')\" class=\"pmbt ft_link\">Générique</a></em></li><li class=\"sub\"><span class=\"label\">Type de produit&nbsp;: </span><em class=\"value\">Clip, Étui et Housse</em></li><li class=\"sub\"><span class=\"label\">Compatible téléphones&nbsp;: </span><em class=\"value\">Apple</em></li>",
    "specifications": {
      "sections": {
        "entry": []
      }
    },
    "pickupAllowed": false,
    "isPreOrder": false,
    "releaseDate": null,
    "attributes": null,
    "isMemo": false,
    "ownerId": 0,
    "isMevFormAvailable": true,
    "isNotModifiedSinceLastCrawl": false,
    "isAvailable": true,
    "isManuallySEOExcludedProduct": false,
    "isAutomaticallySEOExcludedProduct": false,
    "hasImages": true,
    "isChangeDateModified": false,
    "categories": [
      "Tel-PDA",
      "Accessoires-mobiles"
    ],
    "pickUpSelected": true,
    "hasOnlyPickupAdverts": false,
    "images": [
      {
        "imagesUrls": {
          "entry": [
            {
              "size": "ORIGINAL",
              "url": "http://pmcdn.priceminister.com/photo/869181018.jpg"
            },
            {
              "size": "LARGE",
              "url": "http://pmcdn.priceminister.com/photo/869181018_L.jpg"
            },
            {
              "size": "MEDIUM",
              "url": "http://pmcdn.priceminister.com/photo/869181018_M.jpg"
            },
            {
              "size": "SMALL",
              "url": "http://pmcdn.priceminister.com/photo/869181018_S.jpg"
            }
          ]
        },
        "id": 869181018
      },
      {
        "imagesUrls": {
          "entry": [
            {
              "size": "ORIGINAL",
              "url": "http://pmcdn.priceminister.com/photo/955747449.jpg"
            },
            {
              "size": "LARGE",
              "url": "http://pmcdn.priceminister.com/photo/955747449_L.jpg"
            },
            {
              "size": "MEDIUM",
              "url": "http://pmcdn.priceminister.com/photo/955747449_M.jpg"
            },
            {
              "size": "SMALL",
              "url": "http://pmcdn.priceminister.com/photo/955747449_S.jpg"
            }
          ]
        },
        "id": 955747449
      }
    ],
    "rspMinimumAmount": 7
  }
};
  }

}

export default ProductPageDetailComponent;
