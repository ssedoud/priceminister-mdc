import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PriceMinister from './pages/PriceMinister';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import productListPage from './pages/productListPage';

const routes = (
    <Route path="/" component={ PriceMinister }>
        <IndexRoute component={ HomePage } />
        <Route path="product/:productId" component={ ProductPage } />
        <Route path="productList/:keyWord" component={ productListPage } />
    </Route>
);

export default routes;
