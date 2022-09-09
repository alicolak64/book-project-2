import BookList from './/components/BookList';

import BookContextProvider from './/contexts/BookContext';
import ThemeContextProvider from './/contexts/ThemeContext';

function App() {

  return (

    <ThemeContextProvider>
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </ThemeContextProvider>

  );
}

export default App;
