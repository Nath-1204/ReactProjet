import React from 'react'

class Checkbox extends React.Component{
    render(){
        return(
            <input type='checkbox'>{this.props.option}</input>            
        );
    }
}

export default Checkbox;