import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/913D8hnF++L._AC_UL480_FMwebp_QL65_.jpg",
    title: "A Amiga Genial",
    author: "Elena Ferrante",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/8170nYX6+9L._AC_UL480_FMwebp_QL65_.jpg",
    title: "História do Novo Sobrenome",
    author: "Elena Ferrante",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/819cdcaEQ8S._AC_UL480_FMwebp_QL65_.jpg",
    title: "História de quem foge e quem fica",
    author: "Elena Ferrante",
  },
];

/*children é tudo que renderizamos entre a tag inicial e a de fechamento. 
Importante lembrar de usar uma tag fechada e ai colocar o children e entao fechar ao invés de <Book /> precisa ser <book> </book>*/

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  //Ao inves de precisar ficar escrevendo props.img, props.title etc
  const { img, title, author } = props;
  // ou
  // const Book = ({img, title, author}) => etc
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
