import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <main className="container">
        <h1>Library Catalog</h1>
        <BrowserRouter>
          <header>
            {/* <NavLink to="/main" data-testid="main-link">
              Home
            </NavLink> */}
            <NavLink to="/books" data-testid="books-link">
              Books
            </NavLink>
          </header>
          <Switch>
            <Route path="/main"></Route>
            <Route path="/books">
              <BookList />
            </Route>
            <Route path="/books:id">
              <BookDetail />
            </Route>
            <Route exact path="/"></Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
