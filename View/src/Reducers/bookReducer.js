const initState = [
    {
        book : "Deyal"
    },
    {
        book : "Himu"
    }
]

let bookReducer = (state = initState , action) => {
    switch(action.type){
        case "ADD_BOOKS" :
            return state = [...state , action.books]
        default :
            return state
    }
}
export default bookReducer;