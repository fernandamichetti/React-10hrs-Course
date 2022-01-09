import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/913D8hnF++L._AC_UL480_FMwebp_QL65_.jpg"
    alt="Capa do Livro A amiga genial de Elena Ferrante"
  />
);

const Title = () => <h1>A Amiga Genial</h1>;
const Author = () => <h4>Elena Ferrante</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
