import React from 'react'

import './BookList.css';
import Book from './Book';

import BookContext from '../contexts/BookContext';


function BookList(props) {

    const books = BookContext._currentValue

    // console.log(BookContext)

    // console.log(books)

    const bookList = books.map((book, i) => {
        return <Book book={book}
            key={i}
        />
    })


    return (

        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BookFolio</h2>
                    <h3 className="section-subheading text-muted">My BookFolio.</h3>
                </div>
                <div className="row">

                    {bookList}

                </div>
            </div>
        </section>

    )
}

export default BookList