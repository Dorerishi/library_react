import BookShow from "./BookShow";

function BookList( { books,onDelete,onEdit } ){
    const allBooks=books.map((book) => {
        return (
            <BookShow book={book} onDelete={onDelete} onEdit={onEdit} key={book.id} />
        )
    })

    return <div>{allBooks}</div>;
}

export default BookList;