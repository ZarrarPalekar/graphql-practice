import React, { useState } from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../graphqlQueries/BooksQueries";
import BookDetails from "./BookDetails";

const BookList = (props) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const { books, loading } = props.data;

  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <h1>Loading Books...!!!</h1>
        ) : (
          books &&
          books.map((book) => (
            <li
              key={book.id}
              onClick={(e) => {
                setSelectedBookId(book.id);
              }}
            >
              {book.name}
            </li>
          ))
        )}
      </ul>
      <BookDetails bookId={selectedBookId} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
