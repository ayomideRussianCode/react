import React from "react";
import ReactDom from "react-dom";
import './index.css';

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

  const title = "Little Women";
  const author = "Louisa May Alcott";
  const img ="https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg";


export function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {

  return (
    <article className="book">
      <img src={img} alt="" />
          <h4>
            {title}
          </h4>
          <h5 style={{ color: "#617d98", fontSize: "0.7rem" }}>
            {author}
          </h5>
    </article>
  );
};



