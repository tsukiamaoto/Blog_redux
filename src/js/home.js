import React from'react';
import {Link} from 'react-router-dom';
import '../css/home.css';

class Home extends React.Component{
    construcotr(props){
        super(props);
        this.state={
            loading : true , 
            error : null ,
            data : null ,
        }
    }
    componentDidMount(){
        // load data from mongoDB
        const response = await fetch('/post/query' , {
            method : 'GET' ,
            headers : {
                'Content-type' : 'application/json' , 
            },
        });

        //if(response.get )

    }

    render(){
        if(this.state.loading){
            return <span>Loading...</span>
        } else if (this .state.error !== null){
            return <span>Error:{this.state.error}</span>
        } else {
            //check whether it get the data from DataBase
            console.log(this.state.data);
            var projects = this.state.data;
            var results = [];
            // put every data into list
            projects.forEach( p => {
                var item = 
                    <tr>
                        <td>p.date</td>
                        <td>p.title</td>
                        <td>p.author</td>
                    </tr>
            });
            return (
                <div>
                    <div className = "title">
                        <strong>Blogs</strong><hr/>
                    </div>
                    <div className = "content">
                    <button ><Link to="/post" className="addButton">新增</Link></button>
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