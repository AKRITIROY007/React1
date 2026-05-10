import React from "react";
import Book from "./Book";

const BookList = () => {
  const author1 = "RAM";
  const author2 = "YASH";
  const title1 = "LETS LEARN C++";
  const title2 = "LETS LEARN REACT ";
  const price = 234;

  return (
    <>
      <Book writer="Yashwant" BookName={title1} />
      <Book writer={author2} BookName={title2} />
      <Book writer={author1} BookName="lets learn HINDI" price={price} />
      <Book writer={author1} BookName={title1} price="345" />
    </>
  );
};

export default BookList;
