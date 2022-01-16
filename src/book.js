import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };
  const complexeExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference
      </button>
      <button type='button' onClick={() => complexeExample(author)}>
        more complex example
      </button>
    </article>
  );
};

//default export te permite renomear da forma que voce quiser em outros arquivos
export default Book;
