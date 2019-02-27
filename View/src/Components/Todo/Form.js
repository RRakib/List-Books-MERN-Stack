import React from "react";
import { connect } from "react-redux";


const Form = (props) => {

    const books = props.books.map((items) => {
        return(
        <div className="Todo-list" key={items.id}>
            <p>{items.Book}</p>
        </div>
        )
    })

    return(
        <div className="Todo">
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="book"
                    placeholder="Please enter the name of book..."
                    onChange={props.handleChange}
                    value={props.book}
                /> 
                <input 
                    type="text"
                    name="author"
                    placeholder="Please enter the author's name..."
                    onChange={props.handleChange}
                    value={props.author}
                /> 
                <input 
                    type="text"
                    name="age"
                    placeholder="Please enter author's age..."
                    onChange={props.handleChange}
                    value={props.age}
                /> 
                <br />
                <button> Add </button>
            </form>

            {books}


        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        books : state.bookReducer
    }
}

export default connect(mapStateToProps)(Form);