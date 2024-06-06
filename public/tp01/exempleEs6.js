/*
import React,{Component} from 'react'
import nath from '../images/nath.jpg'

import './exemplejsx.css'

class App extends Component {
    constructor(props){
        super();
        this.data = {
            nom : "RAHARIMALALA",
            prenoms : 'Maminirina Natacha',
            tel : "032 48 429 39",
            email : 'mamynatacha19@gmail.com',
            photo : nath
        };
    }
    render(){
        const coordonnee = (
            <div> 
                <h1>CURRICULUM VITAE</h1>
                <ul>
                    <li><u>Nom :</u> {this.data.nom}</li>
                    <li><u>Prénoms :</u> {this.data.prenoms}</li>
                    <li><u>Téléphone :</u> {this.data.tel}</li>
                    <li><u>email :</u> {this.data.email}</li>
                </ul>
            </div>
        );

        const entete = (
            <div className='entete'>
                <img src={this.data.photo}/>
                <div className='coordonnee'>
                    {coordonnee}
                </div>
            </div>
        );

        const contenu = (
            <div className='contenu'>
                <div className='diplome'>
                    <h2>DIPLOMES</h2>
                    <ul>
                        <li>2022 : Baccalauréat Série D</li>
                        <li>2019 : BEPC </li>
                    </ul>
                </div>

                <div className='experience'>
                    <h2>EXPERIENCES</h2>
                    <ul>
                        <li>Projet Gestion de notes </li>
                        <li>Piscine Python</li>
                        <li>Formation HELLOWOMEN</li>
                    </ul>
                </div>

                <div className='competences'>
                    <h2>COMPETENCES</h2>
                    <ul>
                        <li>Null</li>
                        <li>NULLL</li>
                    </ul>
                </div>
            </div>
        );

        const corps = (
            <div>
                {entete}
                {contenu}
            </div>
        );

        return (
            <div className='app'>{corps}</div>
        );
    }
}

export default App;