import Header from "./common/Header";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MoviesList from "./features/MoviesList";
import PeopleList from "./features/PeopleList";
import MovieDetails from "./features/MovieDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/people">
          <PeopleList />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
