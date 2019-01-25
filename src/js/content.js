import React from 'react';
class content extends React.Component{
    render(){
        return(
            <div>
                <h5>內容：</h5>
                <input 
                    className = 'input-cotent' 
                    type="text"
                    onChange={e => this.props.updateContent(e.target.value)}
                />
                <br/>
            </div>
        )
    }
};
export default content;
