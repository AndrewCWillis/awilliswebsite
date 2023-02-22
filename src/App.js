import {
  Routes,
  Route
} from "react-router-dom";
//https://v5.reactrouter.com/web/guides/quick-start#:~:text=1st%20Example%3A%20Basic%20Routing
import Home from './pages/Home';
import { ProSidebarProvider } from 'react-pro-sidebar';
/*
- implement routing later with a header (check the 499 final project)
*/
function App() {
  return (
    <div style = {{background : "#575656"}}>
      <ProSidebarProvider>
        <Home />
      </ProSidebarProvider>  
    </div>
  );
}

export default App;
