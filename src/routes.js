import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-reouter-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/index';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;