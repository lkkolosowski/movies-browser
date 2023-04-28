import Header from "./common/Header";
import { HashRouter, Route, Switch } from "react-router-dom";
import MoviesList from "./features/MoviesList";
import PeopleList from "./features/PeopleList";

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
        <Route path="/">
          <MoviesList />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
