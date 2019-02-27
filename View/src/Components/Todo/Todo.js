import React, { Component } from "react"
import { addBooks } from "../../Actions/bookActions"
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
    handleSubmit = (e) => {
        e.preventDefault();
        let bookArray = {
            book : this.state.book,
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
                    // book = {this.state.book}
                    // author = {this.state.author}
                    // age = {this.state.age}
                    // books = {this.state.books}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    addBook : (books) => dispatch(addBooks(books))
    }
}



export default connect(null , mapDispatchToProps)(Todo);