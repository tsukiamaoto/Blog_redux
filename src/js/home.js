import React from'react';
import {Link} from 'react-router-dom';
import '../css/home.css';



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading : true , 
            error : null ,
            data : null ,
        };
    }
    componentDidMount(){
        // load data from mongoDB
        fetch('/post/queryAll' , {
            method : 'GET' ,
            headers : {
                'Content-type' : 'application/json' , 
            },
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                loading : false ,
                data : data ,
            });
        }).catch(error => {
            this.setState({
                loading : false ,
                error : error ,
            });
        });
    }
    render(){
        if(this.state.loading){
            return <span>Loading...</span>
        } else if (this.state.error !== null){
            return <span>Error:{this.state.error}</span>
        } else {
            let projects = this.state.data.items;
            let results = [];
            // put every data into list
            projects.forEach( p => {
                console.log(p);
                var item = 
                    <tr>
                        <td>{p.update}</td>
                        <td><Link to={`/article/${p._id}`} activeClassName="current">{p.title}</Link></td>
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
                        <div className = 'table'>
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
                </div>
            );
        }
    }
};



export default Home;