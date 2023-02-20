import {
  Routes,
  Route
} from "react-router-dom";
//https://v5.reactrouter.com/web/guides/quick-start#:~:text=1st%20Example%3A%20Basic%20Routing
import Home from './pages/Home';
/*
- implement routing later with a header (check the 499 final project)
*/
function App() {
  return (
    <div className="col-md-5 mx-auto my-auto h-100">
      <Home />
    </div>
  );
}

export default App;
