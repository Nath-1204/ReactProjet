import React, { Component } from 'react';

class BarreTache extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Rechercher une plante...'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({name: e.target.value});
    }

    render(){
        return(
            <>
                <div className='form'>
                    <input type='text' onChange={this.handleChange} placeholder={this.state.name}/>
                </div>  
            </>
        )
    }
}

export default BarreTache;