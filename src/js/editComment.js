import React from 'react';
import Title from './inputTitle';
import Content from './inputCotent';
import PropTypes from "prop-types";
import {Link } from'react-router-dom';
import '../css/addComment.css';
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id : this.props.match.params.id ,  
            author : 'anyone' ,
            content : '' , 
            title : '' ,
            loading : true ,
            error : null ,
        };
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount(){
        console.log(this.state.id);
        fetch('/post/queryOne' , {
            method: 'POST' , 
            headers: {
                'Content-Type' : 'application/json' ,
            } ,
            body : JSON.stringify({
                id : this.state.id ,
            }) ,
        }).then(response => {
            return response.json();
        }).then(data => {
            let d = new Date();
            this.setState({
                author : data.items.author ,
                content : data.items.content ,
                title : data.items.title ,
                Date : d.getFullYear()+"/"+(d.getMonth()+1)+"/" + d.getDate() +"/\t" + d.getHours() +":" + d.getMinutes() + ":" + d.getSeconds() ,
                loading : false ,
            });
        }).catch(error => {
            this.setState({
                error : error , 
                loading : false ,
            })
        })
    }
    updateTitle = (title) => {
        this.setState({title:title});
    }
    updateContent = (content) =>{
        this.setState({content:content});
    }
    handleClear(e){
        //e.preventDefault();
        this.setState({            
            content : '' , 
            title : '' ,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let d = new Date();
        fetch('/post/update' , {
            method: 'POST' ,
            headers: {
                'Content-Type' : 'application/json'
            } , 
            body : JSON.stringify({
                id : this.state.id ,
                author : this.state.author , 
                content : this.state.content ,
                title : this.state.title ,
                update : d.getFullYear()+"/"+(d.getMonth()+1)+"/" + d.getDate() + "\t" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() , 
            }) ,
        }).then(response => {
            return response.json();
        }).then(data => {
            if(data.success)
            this.context.router.history.push(`/article/${this.state.id}`);
        })
    }

    render(){
        if(this.state.loading){
            return <span>Loading...</span>
        } else if(this.state.error){
            return <span>Error:{this.state.error}</span>
        } else {
            return (
                <div>                
                    <div className = 'title'>
                        <strong>Blogs</strong>
                        <hr size="2px"  width="100%"></hr>
                    </div>
                    <div className = 'content-post'>
                        <form onSubmit={this.handleSubmit}>                
                            <Title updateTitle={this.updateTitle} currentTitle={this.state.title}/>
                            <Content updateContent={this.updateContent} currentContent={this.state.content}/>
                            <div className= 'content-button'>
                                <button><Link to={`/article/${this.state.id}`} className="linkButton">返回</Link></button>
                                <div className = 'option'>
                                    <button className = "ok" onClick={this.handleSubmit}>完成</button>       
                                    <button className = "cancel" onClick={this.handleClear}>清空</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
};

export default Edit;