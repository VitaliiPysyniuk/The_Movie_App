import './App.css';
import {BaseLayout} from "./layouts";
import {Home, MovieDetails, ErrorPage} from "./pages";
import {Switch, Route} from "react-router-dom";


function App() {

  return (
    <BaseLayout>
        <Switch>
            <Route exact path={'/'} render={() => <ErrorPage/>}/>
            {/*<Route exact path={'/'} render={() => <Redirect/>}/>*/}
            <Route path={'/movies'} render={() => <Home/>}/>
            <Route path={'/movie/:id'} render={() => <MovieDetails/>}/>
        </Switch>
    </BaseLayout>
  );
}

export default App;
