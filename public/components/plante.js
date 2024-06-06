import React from 'react'


class Plante extends React.Component{
    render(){
        return (
            <>
                <div>
                    <span>{this.props.photo}</span>
                    <span className={this.props.key}></span>
                </div>
                <div>
                    <h3 className={this.props.categorie}>{this.props.name}</h3>
                </div>
            </>
        )
    }
}

export default Plante;