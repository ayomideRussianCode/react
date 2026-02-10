import React from "react";
import ReactDom from "react-dom";

// // CSS
// import './index.css';

// import {data} from './books'
// import SpecificBook from './Book'
// import {greeting} from './testing/testing'

// function BookList() {
//   console.log(greeting);
//   return (
//     <section className='booklist'>
//       {data.map((book, index) => {
//         return <SpecificBook key={book.id} {...book}></SpecificBook>;
//       })}
//     </section>
//   );
// }

export function BookList() {
  return (
    <section>
      <Book />
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
    src="https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg"
    alt=""
  />
);

const Author = () => {
  return (
    <h4>
      LOUISA MAY ALCOTT
    </h4>
  );
};

const Title = () => {
  return <h1>Little Women </h1>;
};
