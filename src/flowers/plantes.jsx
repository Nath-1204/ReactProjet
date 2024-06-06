import { useState } from "react"

import rose from "../images/rose.jpg"
import rose1 from "../images/rose1.jpg"
import rose2 from "../images/rose2.jpg"
import rose3 from "../images/rose3.jpg"
import rose4 from "../images/rose4.jpg"
import rose5 from "../images/rose5.jpg"
import monstera from "../images/monstera.jpg"
import Tulips from "../images/Tulips.jpg"
import cat from "../images/Cat.jpg"
import Koala from '../images/Koala.jpg'
import Penguins from "../images/Penguins.jpg"
import { ProductRow } from "./productRow"
import { SearchBar } from "./search"

const Plantes = [
    {price: "$2", name: "Rose", category: "plante", photo: rose, visibility: true,isBest: true},
    {price: "$2", name: "Rose_01", category: "plante", photo: rose1, visibility: true,isBest: true},
    {price: "$2", name: "Rose_02", category: "plante", photo: rose2, visibility: true,isBest: true},
    {price: "$2", name: "Rose_03", category: "plante", photo: rose3, visibility: true,isBest: true},
    {price: "$2", name: "Rose_04", category: "plante", photo: rose4, visibility: true,isBest: true},
    {price: "$2", name: "Rose_05", category: "plante", photo: rose5, visibility: true,isBest: true},
    {price: "$3", name: "Monstera", category: "plante", photo: monstera, visibility: true,isBest: false},
    {price: "$4", name: "Tulip", category: "plante", photo: Tulips, visibility: true,isBest: false},
    {price: "$8", name: "Cat", category: "animal", photo: cat, visibility: false,isBest: true},
    {price: "$25", name: "Koala", category: "animal", photo: Koala, visibility: false,isBest: true},
    {price: "$24", name: "Penguins", category: "animal", photo: Penguins, visibility: false,isBest: false}
];

function Plante(){

    const [showPlanteOnly, setShowPlanteOnly] = useState(false);
    const [showAnimal, setShowAnimal] = useState(false);
    const [search, setSearch] = useState('')
    const visible = Plantes.filter((plante) => {
        if(showPlanteOnly && !plante.visibility){
            return false
        }

        if(showAnimal && plante.visibility){
            return false
        }

        if(search && !plante.name.toLowerCase().includes(search.toLowerCase())){
            return false
        }
        return true
    })

    return (
        <div className='container my-3'>
            <SearchBar 
                search={search}
                onSearch={setSearch}
                showAnimal={showAnimal}
                onShowAnimal={setShowAnimal}
                showPlanteOnly={showPlanteOnly}
                onShowPlanteOnly={setShowPlanteOnly}
            /><br/><br/>
            <FlowersList flowers={visible}/>
        </div>
    )
}

function FlowersList ({flowers}){

    const rows = [];
    const style2 = {border: "2px solid brown", marginLeft: "2.5%",width: "75%", textAlign: "center", backgroundColor: "gainsboro", fontSize: "25px"}
    const headTable = {backgroundColor: "grey", color: "black", fontSize: "20px"}
    const bodyTable = {padding: "25px"}

    for(let product of flowers) {

        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return (
        <>
            <table style={style2}>
                <thead style={headTable}>
                    <tr>
                        <th>Photo</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Catégorie</th>
                        <th>Réaction</th>
                    </tr>
                </thead>
                <tbody style={bodyTable}>
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default Plante;