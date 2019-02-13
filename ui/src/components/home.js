import React from'react';
import {Link} from 'react-router-dom';
import '../css/home.css';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchposts();
    }

    render(){
        //console.log(this.props.payload);        
        if(this.props.loading){
            return <span>Loading...</span>
        } else if (this.props.error){
            return <span>Error:{this.props.error}</span>
        } else {            
            let projects = this.props.payload.items;
            let results = [];
            // put every data into list
            projects.forEach( p => {
                //console.log(p);
                var item = 
                    <tr key={p.id}>
                        <td>{p.update}</td>
                        <td><Link to={`/article/${p._id}`}>{p.title}</Link></td>
                        <td>{p.author}</td>
                    </tr>;
                results.push(item);
            });
            return (
                <div>
                    <div className = "title">
                        <strong>Blogs</strong><hr/>
                    </div>
                    <div className = "content">
                    <button className= 'add'><Link to="/post" className="link">新增</Link></button>                    
                        <table className = 'table-data'>
                            <tr>
                                <th>日期</th>
                                <th>標題</th>
                                <th>作者</th>
                            </tr>
                            {results}                 
                        </table>             
                    </div>
                </div>
            );
        }
    }
};



export default Home;