const initState = [
]

let bookReducer = (state = initState , action) => { 
    switch(action.type){
        case "GET_BOOKS" :
            let books = [{
                _id : action.books._id,
                book : action.books.book
            }]
            state = [...books , ...state ];
            console.log(state)
            return state
        case "ADD_BOOKS" :
            return state = [...state , action.books]
        case "DELETE_BOOKS" : 
            let x = state.filter((book) => book._id !== action.id)
            state = x;
            return state
        default :
            return state
    }

}
export default bookReducer;