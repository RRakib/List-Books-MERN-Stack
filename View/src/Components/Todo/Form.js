import React from "react";
import { connect } from "react-redux";


const Form = (props) => {

    const books = props.books.map((items) => {
        return(
        <div className="Todo-list" key={items.id}>
            <p onClick={props.handleClick.bind(this , items.id)}> {items.book}</p>
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
                    name="id"
                    placeholder="Please enter the id..."
                    onChange={props.handleChange}
                    value={props.id}
                /> 
                <br />
                <button> Add </button>
            </form>

            {books}


        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        books : state.bookReducer
    }
}

export default connect(mapStateToProps)(Form);