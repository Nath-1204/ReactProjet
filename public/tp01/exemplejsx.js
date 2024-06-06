/*

import React from 'react';
import nath from '../images/nath.jpg';

import './exemplejsx.css'

function App(){
    const coordonnee = (
        <div>
            <h1>CURRICULUM VITAE</h1>
            <ul>
                <li><u>Nom :</u> RAHARIMALALA</li>
                <li><u>Prénoms :</u> Maminirina Natacha</li>
                <li><u>Téléphone :</u> 032 48 429 39</li>
                <li><u>email :</u> mamynatacha19@gmail.com</li>
            </ul>
        </div>
    );

    const entete = (
        <div className='entete'>
            <img src={nath} />
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
                    <li>Programmation et Réseau</li>
                    <li>Circuits Electroniques</li>
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

export default App;
