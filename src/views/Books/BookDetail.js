import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail() {
  const [book, setBook] = useState(null);
  const id = `${book.book_id}`; // TODO: Use id from route

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <div>
      <Book book={book} showDetail />;
    </div>
  );
}

export default BookDetail;
