export const getBooks = (books) => {
    console.log(books)
    return (dispatch , getState) => {
        dispatch({
            type : "GET_BOOKS",
            books
        })
    }
}
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