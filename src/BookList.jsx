import React from "react";
import Book from "./Book";

const BookList = () => {
  const books = [
    {
      author: "yash",
      title: "c",
      price: "250",
    },

    {
      author: "Akriti",
      title: "React",
      price: "300",
    },

    {
      author: "Mrs. Sakshi",
      title: "MATHS",
      price: "890",
    },

    {
      author: "Mrs Rakhi",
      title: "Java",
      price: "789",
    },
  ];

  return (
    <>
      {
        books.map((item) => (
        <Book {...item} />
        ))
      }
    </>
  );
};

export default BookList;
