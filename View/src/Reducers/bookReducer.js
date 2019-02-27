const initState = [
    {
        id : "1",
        book : "Deyal"
    },
    {
        id : "2",
        book : "Himu"
    }
]

let bookReducer = (state = initState , action) => { 
    switch(action.type){
        case "ADD_BOOKS" :
            return state = [...state , action.books]
        case "DELETE_BOOKS" : 
            let x = state.filter((book) => book.id !== action.id)
            state = x;
            return state
        default :
            return state
    }

}
export default bookReducer;