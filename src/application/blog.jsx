import { useReducer } from "react";
import { motion } from "framer-motion";


function reducer(state, action) {
    if(action.type === 'REMOVE_TODO'){
        return {
            ...state,
            todos: state.todos.filter(todo => todo !== action.payload)
        }
    }
    return state
}

function Blog() {

    const [state, dispatch] = useReducer(reducer, {
        showCompleted: true,
        todos: [{
            name: "Episode 1",
            checked: false
        }, {
            name: "Episode 2",
            checked: false
        }, {
            name: "Episode 3",
            checked: false
        }]
    })

    const visibleTodo = state.showCompleted ? state.todos : state.todos.filter(t =>
        !t.checked) 

    const styleTitre = {background: 'gray', with: '100px', height: '80px'}
    const styleTable = {border: '1px solid grey'}
    const styleHeader = {background: 'gray', textAlign: 'center'}
    const styleButton = {background: 'red', borderRadius: '5px', textAlign: 'center', with: '90px'}
    const styleVoir = {background: 'blue', borderRadius: '5px', textAlign: 'center', with: '90px' }

    return (
        <>
            <div style={styleTitre}>
                <h1><i>Admin</i></h1>
            </div>
            <br/><br/>
            <div>
                <table style={styleTable}>
                    <thead style={styleHeader}>
                        <tr>
                            <th>Titre</th>
                            <th>Contenu</th>
                            <th>Date</th>
                            <th>Lire</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleTodo.map(todo => (
                            <tr key={todo.name}>
                                <td>{todo.name}</td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="date"></input>
                                </td>
                                <td>
                                    <motion.button style={styleVoir} whileTap={{scale: 1.1}}>Lire la suite</motion.button>
                                </td>
                                <td>
                                    <motion.button onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo}) } 
                                    style={styleButton} whileTap={{scale: 1.1}} >Supprimer</motion.button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Blog;