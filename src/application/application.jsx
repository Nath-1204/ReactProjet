import { useState } from "react";

import SearchBar from "./searchValue";
import contentApplications from "./contentApplication";


function Application () {

    const [showModule, setShowModule] = useState(false)
    const [showEdt, setShowEdt] = useState(false)
    const [showprojet, setShowProjet] = useState('')
    const [search, setSearch] = useState('')

    const visible = contentApplications.filter(content => {
        if(showModule && !content.visibility){
            return false
        }

        if(showEdt && content.visibility){
            return false
        }

        if(showprojet && content.visibility){
            return false
        }

        if(search && !content.name.toLowerCase().includes(search.toLowerCase())){
            return false
        }

        return true
    })

    return (
        <div>
            <SearchBar 
                search={search}
                onSearch={setSearch}
                showModule={showModule}
                onShowModule={setShowModule}
                showEdt={showEdt}
                onShowEdt={setShowEdt}
                showProjet={showprojet}
                onShowProjet={setShowProjet}
            />
            <br/> <br/>
            <Affichage affiche={visible}/>
        </div>
    )
}

function Section({element} ) {
    const div = {with: '200px',background: 'grey' , border: '1px solid white'}
    const styleImage = {with: '200px', height: '200px'}
    const styleh2 = {color: 'brown',textDecoration: 'underline', textAlign: 'center'}
    const styleh4 = {color: 'whitesmoke', textAlign: 'justify', padding: '0.5em'}

    return (
        <>  
            <div style={div}>       
                <img src={element.image} style={styleImage} alt="" />
                <div>
                    <h2 style={styleh2}> {element.name}</h2>
                    <h4 style={styleh4}> {element.description}</h4>
                </div>  
            </div>  
                 
        </>
    )
}

function Affichage({affiche}){

    const styleDiv = { with: '1000px', border: '1px solid #333', marginLeft: '10px', background: 'burlywood', justifyContent: 'space-between', display: 'flex', padding: '8px'}
    const elements = [];

    for(let el of affiche){
        elements.push(<Section element={el} key={el.name} />)
    }

    return (
       <div style={styleDiv}>
            {elements}
       </div>
    )
}

export default Application;