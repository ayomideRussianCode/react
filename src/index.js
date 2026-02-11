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

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Little Men",
    author: "Louise Nay",
  },

  {
    id: 2,
    title: "Little Women",
    author: "Louisa May Alcott",
    img: "https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id:3,
    title: "Little Women",
    author: "Louisa May Alcott",
    img: "https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg",
  },
];


export function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return  (
      <Book key={book.id} {...book}></Book>
    )
      
      })}
    </section>
  ); 
}

const Book = ({img, title, author}) => {
  // const {img, title, author} = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
          <h4>
            {title}
          </h4>
          <h5 >
            {author}
          </h5>

    </article>
  );
};



