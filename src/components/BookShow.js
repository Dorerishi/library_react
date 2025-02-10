import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow( {book,onDelete,onEdit} ){

    const [editview,setEditView]=useState(false);

    const handleDeleteclick = () => {
        onDelete(book.id);
    }
    
    let bookheading = <h3>{book.title}</h3>

    const handleEditChange = (newTitle) => {
        //perform edit on edit
        setEditView(!editview);
        onEdit(book.id,newTitle);

    };

    const handleEditclick = () => {
        //perform change to edit view
        setEditView(!editview);
        //this is view is handled by the bookedit view

    };

    if(editview){
        bookheading=<BookEdit onEdit={handleEditChange} book={book}/>
    }


    return (
        <div className="book-show" >
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{bookheading}</div>
            <div className="actions">
                <button className="delete" onClick={handleDeleteclick}>
                    Delete
                </button>
                <button className="edit" onClick={handleEditclick}>
                    Edit
                </button>
            </div>
        </div>);
}

export default BookShow;