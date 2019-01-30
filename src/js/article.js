import React from 'react';
import '../css/article.css';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id : this.props.match.params.id ,
            loading : true ,
            error : null ,
            data : null ,
        }
        this.handleDelete = this.handleDelete.bind(this);
    }   
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){
        //console.log(this.state.id);
        fetch('/post/queryOne' , {
            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
            body : JSON.stringify({
                id : this.state.id ,
            }) ,                      
        }).then(response => {            
            return response.json();
        }).then(data => {            
            this.setState({
                loading : false ,
                data : data.items ,
            });
        }).catch(error => {
            this.setState({
                loading : false ,
                error : error ,
            })
        })
    }

    handleDelete(){        
        fetch('/post/delete' , {
            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
            body : JSON.stringify({
                id: this.state.id ,
            }) ,
        }).then(response =>{
            return response.json();
        }).then(data => {
            if(data.success)
                this.context.router.history.push("/");
        })
    }     
    render(){
        if(this.state.loading){
            return <span>Loading...</span>
        } else if (this.state.error !== null){
            return <span>Error:{this.state.error}</span>
        } else {
            return(
                <div>
                    <div className = "title">
                        <strong>Blogs</strong><hr/>
                    </div>
                    <div className = 'article-container'>
                        <div className = 'article-content'>
                            <strong>{this.state.data.title}</strong>
                            <p>{this.state.data.content}</p>
                        </div>
                        <div className='article-option'>
                            <button className = "btn-back"><Link className='link' to="/">返回</Link></button>
                            <button className = "btn-edit"><Link className='link' to={`/article/${this.state.data._id}/edit`}>編輯</Link></button>
                            <button className = "btn-delete" onClick={this.handleDelete}>刪除</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default Article;