import React from 'react';
class content extends React.Component{
    render(){
        return(
            <div>
                <h5>內容：</h5>
                <textarea 
                    className = 'input-content' 
                    type="text"
                    onChange={e => this.props.updateContent(e.target.value)}>
                {this.props.currentContent}
                </textarea>
                <br/>
            </div>
        )
    }
};
export default content;
