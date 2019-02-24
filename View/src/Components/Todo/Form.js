import React from "react";


const Form = (props) => {
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
        </div>
    )
}

export default Form;