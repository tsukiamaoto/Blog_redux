import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Switch  , BrowserRouter } from "react-router-dom";
import Home from './js/home';
import Post from './js/addComment';
import Article from './js/article';
import Edit from './js/editComment';

ReactDOM.render(
    <BrowserRouter>
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/article/:id/edit" component={Edit}/>
            <Route exact path="/article/:id" component={Article}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);