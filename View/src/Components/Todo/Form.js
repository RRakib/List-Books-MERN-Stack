import React from "react";
import { connect } from "react-redux";


const Form = (props) => {

    const books = props.books.map((items) => {
        if(props.bol === false){
            return(
                <div className="Todo-list" key={items._id}>
                    <h2>Loading</h2>
                </div>
                )
        }
        else if(props.bol === true){
            return(
                <div className="Todo-list" key={items._id}>
                    <p onClick={props.handleClick.bind(this , items._id)}> {items.book}</p>
                </div>
                )
        }
        
    })
    console.log(props.bol)
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