import React from 'react';
import Title from './inputTitle';
import Content from './inputCotent';
import {Link } from'react-router-dom';
import '../css/addComment.css';
class Edit extends React.Component{
    componentDidMount(){
        this.props.searchPost(this.props.match.params.id);
    }
    render(){
        if(!this.props.isFetched){
            return <span>Loading...</span>
        } else if(this.props.error){
            return <span>Error:{this.props.error}</span>
        } else {
            return (
                <div>                
                    <div className = 'title'>
                        <strong>Blogs</strong>
                        <hr size="2px"  width="100%"></hr>
                    </div>
                    <div className = 'content-post'>                        
                        <Title updateTitle={this.props.updateTitle} currentTitle={this.props.data.title}/>
                        <Content updateContent={this.props.updateContent} currentContent={this.props.data.content}/>
                        <div className= 'content-button'>
                            <button><Link to={`/article/${this.props.data._id}`} className="linkButton">返回</Link></button>
                            <div className = 'option'>
                                <button className = "ok" onClick={e => {e.preventDefault(); this.props.handleSubmit(this.props.data)}}>完成</button>       
                                <button className = "cancel" onClick={e=> {e.preventDefault();this.props.handleClear()}}>清空</button>
                            </div>
                        </div>                        
                    </div>
                </div>
            );
        }
    }
};

export default Edit;