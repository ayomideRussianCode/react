
import {data} from './books';
import SpecificBook from './Book';
import './index.css';
import {greeting} from './testing/testing'

export function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



// export function BookList() {
//   return (
//     <section className="booklist">
//       {data.map((book, index) => {
//         return  (
//       <Book key={book.id} {...book}></Book>
//     )
      
//       })}
//     </section>
//   ); 
// }

