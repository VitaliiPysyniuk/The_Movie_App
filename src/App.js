import './App.css';
import {moviesServices} from "./sevices";
import {useEffect} from "react";



function App() {
    useEffect(() => {
        moviesServices.getMovies().then(movies => console.log(movies));
    }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
