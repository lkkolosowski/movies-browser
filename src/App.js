import Header from "./common/Header";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toPeople, toMovie, toMovies } from "./routes";
import MoviesList from "./features/MoviesList";
import PeopleList from "./features/PeopleList";
import MovieDetails from "./features/MovieDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
