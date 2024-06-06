import React from 'react'

class Tarif extends React.Component{
    render(){
        return(
            <span>{this.props.prix}</span>
        )
    }
}

class Footer extends React.Component{
    render(){
        const prix = {classique: 8000, ext: 10000, plante_grasse: 15000}
        return(
            <>
                <h2>Prix</h2>
                <ul>
                    <li>Classique: <Tarif prix={prix.classique}/> Ariary</li>
                    <li>Extérieur: <Tarif prix={prix.ext}/> Ariary</li>
                    <li>Plante Grasse: <Tarif prix={prix.plante_grasse}/> Ariary</li>
                </ul>
            </>
        )
    }
}

export default Footer;