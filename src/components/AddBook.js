import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, GET_BOOKS } from '../queries';
import '../styles/styles.css'; 
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
    onCompleted: () => {
      navigate('/');
    },
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ variables: { title, author, description } })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className='heading'>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className='form-button'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
