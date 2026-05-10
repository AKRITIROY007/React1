import React from "react";

const Title = () => <h1>LETS LEARN REACT</h1>;
const Author = () => <h1>Hi this is Author</h1>;
const Price = () => <h1>Rs. 450</h1>;
const Image = () => <h1>Image holder</h1>;

const Book = () => {
  return (
    <>
      <Title />
      <Author />
      <Price />
      <Image />
    </>
  );
};

export default Book;
