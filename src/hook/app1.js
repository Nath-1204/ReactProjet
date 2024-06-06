import { useEffect, useState, useRef} from "react";


function useToggle (initial = false){
    const [state, setState] = useState(initial);
    const toggle = () => setState(t => !t)
    return [state, toggle]
}

function useIncrement ({base = 0, max = Infinity, min = -Infinity}){
    const [stat, setStat] = useState(base)
    return (
        {
            count: stat,
            increment: () => setStat(u => u < max  ? u+1 : u),
            decrement: () => setStat(u => u > min ? u-1 : u)
        }  
    )
}

function useDocumentTitle (title){

    const titleRef = useRef(document.title)

    useEffect(() => {
        return (() => {
            document.title = titleRef.current
        } )     
    }, []);

    useEffect(() => {
        document.title = title ? title : titleRef.current
    }, [title])
}

function App1(){
    const [checked, toggleCheck] = useToggle();
    const {count, increment, decrement} = useIncrement({
        base : 0,
        max: 10,
        min: 0
    })

    const [name, setName] = useState('');
    useDocumentTitle( name ? `Edit ${name}` : null)

    return (
        <>
        <div>
            <input type="checkbox" checked={checked} onChange={toggleCheck}/>
            {checked && "Je suis coché"}
        </div>
        <div>
            <input value={name} onChange={setName} label="Nom"/> <br/>
            Compteur {count}
            <button onClick={increment}>Incrementer</button>
            <button onClick={decrement}>Décrementer</button>
        </div>
        </>
    )
}

export default App1;