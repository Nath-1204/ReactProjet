
import React from 'react'

class Entete extends React.Component{
    render(){
        return <h1>{this.props.title}</h1>
    }
}

class Header extends React.Component{
    render(){
        const title = "PLANTES";
        return(
            <div className='entete'>
                <Entete title={title}/>
                <hr/>
            </div>
            
        );
    }
}

export default Header;