import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Tour from '../Pages/Tour'
const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/tour" component={Tour}></Route>
            </Switch>
        </div>
    );
};

export default Router;