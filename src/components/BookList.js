import React from 'react'

import './BookList.css';
import Book from './Book';

import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


function BookList(props) {




    return (

        <ThemeContext.Consumer>

            {(themeContext) => (



                <BookContext.Consumer>



                    {(bookContext) => {

                        const { isDarkTheme, dark, light, changeTheme } = themeContext;
                        const theme = isDarkTheme ? dark : light;

                        const { books } = bookContext;

                        // console.log(books);
                        // console.log(value);

                        return (

                            <section className="page-section" style={{ background: theme.bg, color: theme.txt }} id="portfolio">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                                        <h3 className="section-subheading text-muted">My BookFolio.</h3>
                                        <button
                                            type = 'button'
                                            style = {{ marginTop: "-70px" }}
                                            className = 'btn btn-sm btn-info'
                                            onClick={changeTheme}
                                            >
                                            Change Theme
                                        </button>
                                    </div>
                                    <div className="row">

                                        {books.map((book, i) => {
                                            return <Book book={book}
                                                key={i}
                                            />
                                        })}


                                    </div>
                                </div>
                            </section>
                        )
                    }
                    }
                </BookContext.Consumer>

            )}

        </ThemeContext.Consumer>


    )
}

export default BookList