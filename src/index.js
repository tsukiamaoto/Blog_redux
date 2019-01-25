import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Switch  , BrowserRouter } from "react-router-dom";
import Home from './js/home';
import Post from './js/post';

ReactDOM.render(
    <BrowserRouter>
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route path="/index" component={Home}/>
            <Route path="/post" component={Post}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);