import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){

    const [books,setBooks] = useState([]);

    const createBook = (newtitle) => {
        let randomId=Math.round(Math.random()*9999)
        const updatedBooks = [...books,{
            id:randomId,
            title:newtitle,
        }];
        setBooks(updatedBooks); 
    };

    const deleteBook = (id) =>{
        const reducedBooks = books.filter((book) =>{
            return book.id!==id;
        });
        setBooks(reducedBooks);
    };

    const editBook = (id,newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id===id){
                return {...books,title:newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='app'>
            <h1>Reading List</h1>
            number of books:{books.length}<br />
            <BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
            <BookCreate onCreate={createBook} />
        </div>);
}

export default App;