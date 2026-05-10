import React from "react";
import Book from "./Book";

const BookList = () => {
  const book1 = {
    author: "yash",
    title: "c",
    price: "250",
  };

  const book2 = {
    author: "Akriti",
    title: "React",
    price: "300",
  };

  return (
    <>
      <Book {...book1} />
      <Book {...book2} />
    </>
  );
};

export default BookList;
