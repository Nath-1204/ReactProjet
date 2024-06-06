

import  React, {Component} from 'react';
import nath from '../images/nath.jpg';

import './exemple2jsx.css';

class App extends Component {
    constructor(props){
        super();
        this.data = {
            nom :  "RAHARIMALALA",
            prenoms : 'Maminirina Natacha',
            tel : "032 48 429 39",
            email : 'mamynatacha19@gmail.com',
            photo : nath
        }
        this.diplome = {
            d1 : "2022 : Baccalauréat Série D",
            d2 : "2019 : BEPC"
        }
        this.experience = {
            e1 : 'Projet Gestion de notes',
            e2 : "Piscine Python",
            e3 : "Formation HELLOWOMEN"
        }
        this.competence = {
            c1 : "null1",
            c2 : "null2"
        }
    }

    render (){
        fct = (param) => {
            console.log(param.target.value);
            this.diplomes = "<div><ul><li>" + this.diplome.d1
                                +"</li><li>" + this.diplome.d2
                                +"</li></ul></div>";
            this.experiences = "<div><ul><li>" + this.experience.e1
                                +"</li><li>" + this.experience.e2
                                +"</li><li>" + this.experience.e3
                                +"</li></ul></div>";
            this.competences = "<div><ul><li>" + this.competence.c1
                                +"</li><li>" + this.competence.c2
                                +"</li></ul></div>";
            if(param.target.value == 1)
                document.getElementById('root').innerHTML = this.diplomes;
            else if(param.target.value == 2)
                document.getElementById('root').innerHTML = this.experiences;
            else
                document.getElementById('root').innerHTML = this.competences;
                                
        }

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
        )
    
        const menu = (
            <div className='menu'>
                <button className='sstitre' onClick={this.fct} value={1}>DIPLOMES</button>
                <button className='sstitre' onClick={this.fct} value={2}>EXPERIENCES</button>
                <button className='sstitre' onClick={this.fct} value={3}>COMPETENCES</button>
            </div>
        );

        return (
            <div className='app'>
                <div>{entete}</div>
                <div>{menu}</div>
                <div id='root'></div>
            </div>
        );
    }  
}

export default App;