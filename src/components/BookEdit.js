import { useState } from "react";

function BookEdit({onEdit,book}){
    let [title,setTitle] = useState(book.title);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event) =>{
        setTitle(event.target.value);
        event.preventDefault();
        onEdit(title);
    };


    return (
    <div>
        <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} type="text"/>
        <button className="button is-primary">Save</button>
    </form>
    </div>);
}

export default BookEdit;