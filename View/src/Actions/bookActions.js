export const getBooks = (books) => {
    console.log(books)
    return (dispatch , getState) => {
        dispatch({
            type : "GET_BOOKS",
            books
        })
    }
}
export const deleteBooks = (id) => (dispatch) => {
    fetch("/api/books/" + id , {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then((res) => {return res.json()})
    .then(data => dispatch({
        type : "DELETE_BOOKS",
        id
    }))
}
export const addBooks = (books) => (dispatch) => {
    fetch("/api/books/" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(books)
    })
    .then((res) => {return res.json()})
    .then((data) => 
        dispatch({
            type : "ADD_BOOKS",
            books : data
        })
    )
    .catch(err => {
        console.log(err)
    })
}