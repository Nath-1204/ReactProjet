import React from 'react';
import { useState, useEffect } from 'react';
import image from '../images/monstera.jpg'

function Plante(props) {
        const [eau, setEau] = useState();
        const [lumiere, setLumiere] = useState();

        useEffect(() => {
            let water = '';
            let light = '';

            for (let i = 0; i < props.data.eau; i++) {
                water += '💧'
            }
            for (let i = 0; i < props.data.lumiere; i++) {
                light += '🌞'
            }

            setEau(water)
            setLumiere(light)
        }, [props.data]);

        const handleClick = () => {
            props.plante(props.data)
        }

        return (
            <div className='plante'>
                <div>
                    <img src={image}  alt=""/>
                    <h3>{this.props.data.nom}</h3> {this.props.isBest ? <span>👍</span> : <span>👎</span>}
                </div>
               
                <div>{eau}</div>
                <div>{lumiere}</div>
              
                <div>
                    <button onClick={handleClick}>Ajouter</button>
                    <div>{this.props.data.prix}$</div>
                </div>
                <div>
                    {this.props.isBest ?  
                    <button type='button' onClick={this.true}>j'aime pas</button> 
                    :  <button type='button' onClick={this.true}>j'aime</button> }         
                </div>
                
            </div>
        )
    
}

export default Plante;