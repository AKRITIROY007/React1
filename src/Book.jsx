import React from "react";

const Book = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.writer}</h1>
      <h2>{props.price}</h2>
      <h1>{props.BookName}</h1>
    </>
  );
};

export default Book;
