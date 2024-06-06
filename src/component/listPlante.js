import  React from 'react';
import { useState } from 'react';
import Plante from './list';
import { plantesListes } from './plantesListes'
import Panier from './panier'
require ('./plante.css');

function ListPlante (){

        let categories = [];

        const [categ, setCateg] = useState(categories);
        const [plantesPanier, setPlantesPanier] = useState([]);
        //const [listePlantes, setListePlantes] = useState(plantesListes);

        const addCategorie = (categorie, isChecked) => {
            if(isChecked) {
                setCateg([...categ, categorie])
            }else{
                setCateg(categ.filter(c => c !== categorie))
            }
        }

        const handlePlante = (plante) => {
            if(plantesPanier.find(el => el.id === plante.id)){
                const cible = plantesPanier.find(el => el.id === plante.id);
                cible.nb += 1;
                setPlantesPanier([...plantesPanier]);
            }else{
                setPlantesPanier([...plantesPanier, {...plante, nb:1}]);
            }
        }

        const handleRestart = (value) => {
            console.log("restart", value);
            setPlantesPanier([]);
        }

        /*const searchPlante = (value) => {

        }*/

        return (
            <>
                <Panier data={plantesPanier} restart={handleRestart}/>
                <div className='checkbox'>
                    <input type='checkbox' value="classique" name='categorie' onChange={(e) => addCategorie(e.target.value, e.target.checked)}/><b>Classique</b>
                </div>
                <div className='checkbox'>
                    <input type='checkbox' value="planteGrasse" name='categorie' onChange={(e) => addCategorie(e.target.value, e.target.checked)}/><b>Plante Grasse</b>
                </div>
                <div className='checkbox'>
                   <input type='checkbox' value="exterieur" name='categorie' onChange={(e) => addCategorie(e.target.value, e.target.checked)}/><b>Exterieur</b>
                </div> 
            
                <div className='plante-list'>
                    {
                        plantesListes
                            .filter((plante) => (categ.length > 0 && categ.includes(plante.categorie) || (categ.length === 0 && true))
                            .map((plante) => <Plante key={plante.id} data={plante} plante={handlePlante} isBest={plante.isBest}/>))
                    }
                </div>
               
            </>
        );

}

export default ListPlante;