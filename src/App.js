import { useState,useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App(){

    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        console.log(response);
        setBooks(response.data);
      };
    
      useEffect(() => {
        fetchBooks();
      }, []);

    const createBook = async (newtitle) => {
        const response = await axios.post('http://localhost:3001/books',{title:newtitle,});
        console.log(response);
        const updatedBooks = [...books,response.data];
        setBooks(updatedBooks); 
    };

    const deleteBook = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`);

        const reducedBooks = books.filter((book) => {
            return book.id !== id;
        });

    setBooks(reducedBooks);
    };

    const editBook = async (id,newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
          });
      
          const updatedBooks = books.map((book) => {
            if (book.id === id) {
              return { ...book, ...response.data };
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