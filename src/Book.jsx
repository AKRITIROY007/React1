import React from "react";

const Book = (props) => {
  console.log(props);

  const { author, price, title } = props;
  return (
    <>
      <h1>{author}</h1>
      <h1>{price}</h1>
      <h1>{title}</h1>
    </>
  );
};

export default Book;
