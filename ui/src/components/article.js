import React from 'react';
import '../css/article.css';
import {Link} from 'react-router-dom';

class Article extends React.Component{  
    componentDidMount(){
        this.props.searchPost(this.props.match.params.id);
    }  
    render(){
        if(!this.props.isFetched){
            return <span>Loading...</span>
        } else if (this.props.error !== ''){
            return <span>Error:{this.props.error}</span>
        } else {
            return(
                <div>
                    <div className = "title">
                        <strong>Blogs</strong><hr/>
                    </div>
                    <div className = 'article-container'>
                        <div className = 'article-content'>
                            <strong>{this.props.data.title}</strong>
                            <p>{this.props.data.content}</p>
                        </div>
                        <div className='article-option'>
                            <button className = "btn-back"><Link className='link' to="/">返回</Link></button>
                            <button className = "btn-edit"><Link className='link' to={`/article/${this.props.data._id}/edit`}>編輯</Link></button>
                            <button className = "btn-delete" onClick={ e => { e.preventDefault(); this.props.handleDelete(this.props.match.params.id)}}>刪除</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default Article;