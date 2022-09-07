import BookList from './/components/BookList';

import BookContextProvider from './/contexts/BookContext';

function App() {

  return (
    <div>
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
