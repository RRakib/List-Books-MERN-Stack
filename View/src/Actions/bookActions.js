export const deleteBooks = (id) => {
    return (dispatch , getState) => {
        dispatch({
            type : "DELETE_BOOKS",
            id
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