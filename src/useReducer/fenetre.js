import { useReducer } from "react";
import { motion } from "framer-motion";

function reducer (state, action){
    if (action.type === 'REMOVE_TODO'){
        return {
            ...state,
            todos: state.todos.filter(todo => todo !== action.payload)
        }
    }
    if(action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map(todo => todo === action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }
    if(action.type === 'CLEAR_COMPLETED') {
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.checked)
        }
    }
    if(action.type === 'TOGGLE_FILTER') {
        return {
            ...state,
            showCompleted: !state.showCompleted
        }
    }
    return state
}

function Fenetre() {
    const [state, dispatch] = useReducer(reducer, {
        showCompleted: true,
        todos: [{
            name: "Faire les courses",
            checked: false
        }, {
            name: "Ranger les courses",
            checked: false
        }, {
            name: "Manger les courses",
            checked: false
        }]
    })

    const visibleTodo = state.showCompleted ? state.todos : state.todos.filter(t =>
         !t.checked) 

    return( <motion.div 
                initial={{x: 100}} 
                animate={{x: 0}}
                >
        <p>
            <input type="checkbox" checked={state.showCompleted} onChange={() => 
                dispatch({type: 'TOGGLE_FILTER'})}/>
            Afficher les tâches accomplies
        </p>
        <ul>
            {visibleTodo.map(todo => (<li 
            key={todo.name}>
                <input type="checkbox" onChange={() => dispatch({type: 'TOGGLE_TODO', 
                payload: todo})} checked={todo.checked}/>
                {todo.name}
                <button onClick={() => dispatch({type: 'REMOVE_TODO', 
                payload: todo})} >Supprimer</button>
            </li>))}
        </ul>
        <motion.button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})} whileTap={{scale: 1.1}}>Supprimer les tâches accomplies</motion.button>
        </motion.div>
    )
}

export default Fenetre;