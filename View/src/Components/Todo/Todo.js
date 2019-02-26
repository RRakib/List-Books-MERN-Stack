import React, { Component } from "react"
import Form from "./Form"
import "./Todo.css"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            book : "",
            author : "",
            age : ""
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
        this.setState({
            ...this.state,
            books : [bookArray, ...this.state.books]
        });
    }
    componentDidMount = () =>{
        fetch("http://localhost:5000/api/books/" , {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log("OPPS!!! "+ err)
            })

    }

    render(){
        console.log(this.state.books)
        return(
            <div>
                <Form 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    book = {this.state.book}
                    author = {this.state.author}
                    age = {this.state.age}
                    books = {this.state.books}
                />
            </div>
        )
    }
}

export default Todo;