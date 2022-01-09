import React from "react";
//para que a função criada seja "injetada" dentro da div no index.html
import ReactDom from "react-dom";

//stateless functional component ou dump component, pq nao tem state/estado
//sempre precisa retornar JSX, mesmo que seja uma tag <h4> vazia "<h4></h4>"
//Para o react saber que é um componente precisa colocar o nome em maiuscula

//importante seguir html semantics
//ao inves de usar várias divs ou semantic html, voce pode usar react.fragment
function Greeting() {
  return (
    <React.Fragment>
      <div className="firstOne">
        <h4>this is Fernanda and this is my first component</h4>
        <ul>
          <li>
            <a href="#">Primeiro item clicável</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

/*Outra forma de fazer a mesma coisa acima
cria um h1 com hello world dentro da tag
const Greeting = () => {
  return React.createElement("h1", {}, "hello world");
};

Isso aqui: 
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};

é a mesma coisa que: 

function Greeting() {
  return (
  <div>
  <h1> hello world </h1>
  </div>
  );
}; */

//sempre precisa ter closing tag ou <greeting></greeting> ou <gretting/>
//o que queremos renderizar e onde
ReactDom.render(<Greeting />, document.getElementById("root"));
