import React, { Component } from "react"
import { addBooks } from "../../Actions/bookActions"
import { deleteBooks } from "../../Actions/bookActions"
import { connect } from "react-redux"
import Form from "./Form"
import "./Todo.css"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            book : "",
            id : "",
        }
    }

    handleChange = (e) => {
        const { name , value } = e.target;
        this.setState({
            [name] : value
        });
    }
    handleClick = (id) => {
        this.props.deleteBook(id)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let bookArray = {
            id : this.state.id,
            book : this.state.book
        }
        this.props.addBook(bookArray)

    }

    // componentDidMount = () =>{
    //     fetch("http://localhost:5000/api/books/" , {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json"
    //         }
    //       })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log("OPPS!!! "+ err)
    //         })

    // }

    render(){
        return(
            <div>
                <Form 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    handleClick = {this.handleClick}
                    book = {this.state.book}
                    id = {this.state.id}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    addBook : (books) => dispatch(addBooks(books)),
    deleteBook : (books) => dispatch(deleteBooks(books))

    }
}



export default connect(null , mapDispatchToProps)(Todo);