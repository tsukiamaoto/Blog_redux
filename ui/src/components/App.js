import React from 'react';
import {Router , Switch , Route} from 'react-router-dom';
import Home from '../containers/postList';
import Post from '../containers/addPost';
import history from '../actions/history';
import Article from '../containers/article';
import Edit from '../containers/editPost';
const App = () => (
    <Router history={history}>
        <Switch>
        <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/article/:id/edit" component={Edit}/>
            <Route path="/article/:id" component={Article}/>
        </Switch>
    </Router>
)

export default App;