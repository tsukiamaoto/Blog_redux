import React from'react';
class Title extends React.Component{
    render(){
        return (
            <div>
                <h5>標題：</h5>
                <textarea 
                    className = 'input-title' 
                    type="text"
                    onChange={e => this.props.updateTitle(e.target.value)}    
                >{this.props.currentTitle}</textarea>    
            </div>
        );
    }
}
export default Title;
