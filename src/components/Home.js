import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import '../styles/styles.css'; 
import { GET_BOOKS, DELETE_BOOK } from '../queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleDeleteClick = (id) => {
    deleteBook({ variables: { id } })
      .then(() => {
        console.log(`Successfully deleted book with id: ${id}`);
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className='heading'>Books</h2>
      <div className='container'>
        <table className="books-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.findAllBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  {book.description}
                </td>
                <td className="action-buttons">
                  <button onClick={() => handleDeleteClick(book.id)} className="form-button delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

