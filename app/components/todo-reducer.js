


export default function todoReducer(state, action){


    switch (action.type) {
        case "ADD_TODO":
            console.log("Hit add todo reducer")
            return[...state,{id: Date.now(), text: action.payload, completed: false} ]
        case "TOGGLE_TODO":

            console.log("Hit toggle todo reducer")
            return state.map((todo)=>todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
        case "DELETE_TODO":
            console.log("Hit toggle todo reducer")
    
            return state.filter((todo)=> todo.id !== action.payload)
    
        default:
            return state;
    }
    
} 