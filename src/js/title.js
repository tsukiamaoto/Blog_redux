import React from'react';
class Title extends React.Component{
    render(){
        return (
            <div>
                <h5>標題：</h5>
                <input 
                    className = 'input-title' 
                    type="text"
                    onChange={e => this.props.updateTitle(e.target.value)}    
                />    
            </div>
        );
    }
}
export default Title;
