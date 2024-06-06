import React, {useEffect, useState} from 'react'

export default function Panier(props) {
    const [total, setTotal] = useState(0);
    const [plantes, setPlantes] = useState([]);

    useEffect(() => {
        console.log("panier", props.data);
        if(props.data.lenght > 0){
            setTotal(props.data.map(plante => plante.prx*plante.nb)
                .reduce((i,prix) => i + prix))
        }
        setPlantes(props.data)
    },[props.data, plantes]);

    const more = (id) => {
        const plante = props.data.find(el => el.id === id);
        plante.nb += 1;
        setPlantes([...props.data]);
    }

    const less = (id) => {
        const plante = props.data.find(el => el.id === id);
        if(plante.nb === 1) {
            setPlantes(props.data.splice(plante.id, 1));
        }else{
            plante.nb -= 1;
            setPlantes([...props.data])
        }
    }

    const reinitialiser = ()=> {
        setTotal(0);
        props.restart(1);
    }

    return (
        <>
            <div onClick={reinitialiser}>Tout réinitialiser</div>
            <div>
                <div>
                    <div>Plante</div>
                    <div>Prix</div>
                    <div>subTotal</div>
                    <div>Nombre</div>
                </div>
                <hr/>
                {
                    plantes.map((plante) =>
                        <div key={plante.id}>
                            <div>{plante.nom}</div>
                            <div>{plante.prix}$</div>
                            <div>{plante.nb * plante.prix}$</div>
                            <div>{plante.nb}</div>
                            <div onClick={()=>more(plante.id)}>+</div>
                            <div onClick={()=>less(plante.id)}>-</div>
                        </div>)
                }
            </div>
            <h5>Total : {total}$</h5>   
        </>
    )
}