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
  img: "https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg",
  title: "Little Men",
  author: "Louise Nay"
},

 {
   title : "Little Women",
   author : "Louisa May Alcott",
   img :"https://m.media-amazon.com/images/I/71i9TStgFaL._AC_UY327_FMwebp_QL65_.jpg"

}
];

const names = ['John', 'Peter', 'Susan'];
const newNames = names.map((name) => {
 return <h2>{name}</h2>
});

console.log(newNames);
export function BookList() {
  return (
    <section className="booklist">
   {newNames}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;

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



