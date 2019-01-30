import Title from './inputTitle';
import Content from './inputCotent';
import React from 'react';
import '../css/addComment.css';
import PropTypes from "prop-types";
import {Link } from'react-router-dom';

class Post extends React.Component{
    
    constructor(props){
        super(props);
        let d = new Date();
        this.state = {
            title: '' ,
            author: 'anyone' ,
            content: '' ,
            date: d.getFullYear()+"/"+(d.getMonth()+1)+"/" + d.getDate() ,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    }
    updateTitle = (title) => {
        this.setState({title:title});
    }
    updateContent = (content) =>{
        this.setState({content:content});
    }

    handleSubmit(e){
        e.preventDefault();
        fetch('/post/create' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json' , 
            },
            body : JSON.stringify({
                author: this.state.author ,
                title: this.state.title,
                date:this.state.date,
                content:this.state.content,
            }),
        }).then( response => {
            return response.json();
        }).then(data => {
            this.context.router.history.push("/");
        })
    }

    render(){
        return (
            <div>
                <div className = 'title'>
                    <strong>Blogs</strong>
                    <hr size="2px"  width="100%"></hr>
                </div>
                <div className = 'content-post'>
                    <form onSubmit={this.handleSubmit}>                
                        <Title updateTitle={this.updateTitle}/>
                        <Content updateContent={this.updateContent}/>
                        <div className= 'content-button'>
                            <button><Link to="/" className="linkButton">返回</Link></button>
                        <div className = 'option'>
                            <button className = "ok" disabled={!(this.state.title && this.state.content)} onClick={this.handleSubmit}>完成</button>       
                            <button className = "cancel"><Link to="/post" className="linkButton">清空</Link></button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Post;