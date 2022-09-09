import './Book.css';

import { ThemeContext } from '../contexts/ThemeContext';

function Book(props) {

    // console.log(props.book)

    return (
        <ThemeContext.Consumer>{(contextTheme) => {
            const { isDarkTheme, dark, light } = contextTheme;
            const theme = isDarkTheme ? dark : light;

            return (
                <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover" style={{background:theme.hover}}>
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={props.book.imageURL} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{props.book.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{props.book.author}</div>
                    </div>
                </div>
                </div>
            );
        }}

        </ThemeContext.Consumer>
        

        );

}

export default Book