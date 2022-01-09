import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "A Amiga Genial";
  const author = "Elena Ferrante";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/913D8hnF++L._AC_UL480_FMwebp_QL65_.jpg"
        alt="Capa do Livro A amiga genial de Elena Ferrante"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p></p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
