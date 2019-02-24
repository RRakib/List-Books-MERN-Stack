import React, { Component } from "react"
import Form from "./Form"
import "./Todo.css"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            book : "",
            author : "",
            age : ""
        }
    }

    handleChange = (e) => {
        const { name , value } = e.target;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Form 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    book = {this.state.book}
                    author = {this.state.author}
                    age = {this.state.age}
                />
            </div>
        )
    }
}

export default Todo;