import React, { Component } from "react"
import { addBooks } from "../../Actions/bookActions"
import { deleteBooks } from "../../Actions/bookActions"
import { getBooks } from "../../Actions/bookActions"
import { connect } from "react-redux"
import Form from "./Form"
import "./Todo.css"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            book : "",
            bol : false
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
        this.setState({
            book : ""
        })
        let bookArray = {
            "book" : this.state.book
        }
        this.props.addBook(bookArray)

    }

    componentDidMount = () =>{
        fetch("/api/books/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.map((items) => this.props.getBook(items));
                this.setState({
                    bol : true
                })
            })
            .catch((err) => {
                console.log("OPPS!!! "+ err)
            })

    }

    render(){
        return(
            <div>
                <Form 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    handleClick = {this.handleClick}
                    book = {this.state.book}
                    bol = {this.state.bol}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    addBook : (books) => dispatch(addBooks(books)),
    deleteBook : (books) => dispatch(deleteBooks(books)),
    getBook : (books) => dispatch(getBooks(books))
    }
}



export default connect(null , mapDispatchToProps)(Todo);