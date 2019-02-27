export const getBooks = () => {
    return (dispatch , getState) => {
        dispatch({
            type : "GET_BOOKS",
        })
    }
}
export const addBooks = (books) => {
    console.log(books)
    return (dispatch , getState) => {
        dispatch({
            type : "ADD_BOOKS",
            books
        })
    }
}