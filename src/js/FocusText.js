import React from 'react';

export default class FocusText extends React.Component{
    handleClick(){
        this.refs.myTextInput.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input"
                onClick={this.handleClick.bind(this)}
                />
            </div>
        )
    }
}