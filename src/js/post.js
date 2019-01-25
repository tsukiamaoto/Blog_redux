import Title from './title';
import Content from './content';
import React from 'react';
import '../css/post.css';
import {Link} from'react-router-dom';

class Post extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            title:'' ,
            author: 'anyone' ,
            content: '' ,
            date: Date(),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }


    /*callAPI = async () => {
        const response = await fetch('');
        const body = await response.json();

        if(response.status !== 200)
            throw Error(body.message);
        return body;
    }*/

    updateTitle = (title) => {
        this.setState({title:title});
    }
    updateContent = (content) =>{
        this.setState({content:content});
    }

    //send message to server with header
    handleSubmit = async e => {
        //e.preventDefault();
        const response = await fetch('/post/create' , {
            method : 'POST' ,
            headers : {
                'Content-type' : 'application/json' , 
            },
            body : JSON.stringify({
                author: this.state.author ,
                title: this.state.title,
                date:this.state.date,
                content:this.state.content,
            }),
        });
        console.log('submit successful');
        const body = await response.json();
        this.setState={response:body.success};
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
                            <input 
                                type = "submit" 
                                value= "完成"
                                className = "ok"/>       
                            <button className = "cancel"><Link to="/post">取消</Link></button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Post;