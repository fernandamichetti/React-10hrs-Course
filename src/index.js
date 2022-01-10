import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/913D8hnF++L._AC_UL480_FMwebp_QL65_.jpg",
  title: "A Amiga Genial",
  author: "Elena Ferrante",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/819cdcaEQ8S._AC_UL480_FMwebp_QL65_.jpg",
  title: "História de quem foge e quem fica:",
  author: "Elena Ferrante",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
