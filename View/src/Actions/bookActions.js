export const addBooks = (books) => {
    return (dispatch , getState) => {
        dispatch({
            type : "ADD_BOOKS",
            books
        })
    }
}