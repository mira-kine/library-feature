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
            <NavLink to="/books" data-testid="books-link">
              Catalog
            </NavLink>
          </header>
          <Switch>
            <Route path="/main"></Route>
            <Route exact path="/books" component={BookList} />
            <Route exact path="/books/:id" component={BookDetail} />
            <Route exact path="/"></Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
