import { useState } from "react";
function BookCreate( {onCreate} ){

    const [title,setTitle] = useState('');

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }; 

    const addBook = (event) =>{
        event.preventDefault();
        onCreate(title);
        setTitle("");
    };


    

    return (
        <div className="book-create">
            <h3>Add a Book:</h3>
            <form onSubmit={addBook}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Add</button>
            </form>
        </div>);
}

export default BookCreate;