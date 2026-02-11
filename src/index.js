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

const firstBook = {
  img: "https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg",
  title: "Little Men",
  author: "Louise Nay"
}

const secondBook = {
   title : "Little Women",
   author : "Louisa May Alcott",
   img :"https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg"

}

export function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {

  return (
    <article className="book">
      <img src={props.img} alt="" />
          <h4>
            {props.title}
          </h4>
          <h5 style={{ color: "#617d98", fontSize: "0.7rem" }}>
            {props.author}
          </h5>
    </article>
  );
};



