import BookList from './/components/BookList';
import Footer from './components/Footer/Footer';

import BookContextProvider from './/contexts/BookContext';
import ThemeContextProvider from './/contexts/ThemeContext';



function App() {

  return (

    <>
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>

      <Footer />
    </>
  );
}

export default App;
