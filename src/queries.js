import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    findAllBooks {
      id
      title
      author
      description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $description: String) {
    addBook(title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String!, $author: String!, $description: String) {
    editBook(id: $id, title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;
