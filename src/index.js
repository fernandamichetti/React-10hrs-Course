import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const title = "A Amiga Genial";
const author = "Elena Ferrante";
const img =
  "https://m.media-amazon.com/images/I/913D8hnF++L._AC_UL480_FMwebp_QL65_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="ramdom title" number={22} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt="Capa do Livro A amiga genial de Elena Ferrante" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
