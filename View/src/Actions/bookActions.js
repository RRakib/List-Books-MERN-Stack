export const deleteBooks = () => {
    return (dispatch , getState) => {
        dispatch({
            type : "DELETE_BOOKS",
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