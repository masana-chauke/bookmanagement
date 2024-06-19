import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import '../styles/styles.css'; 
import { UPDATE_BOOK, GET_BOOKS } from '../queries';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const [updateBook] = useMutation(UPDATE_BOOK, {
    onCompleted: () => {
      navigate('/');
    },
    onError: (error) => {
      console.error('Error updating book:', error);
    },
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ variables: { id, title, author, description } });
  };

  return (
    <div>
      <h2>Edit Book</h2>
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
            required
          />
        </label>
        <br />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;

