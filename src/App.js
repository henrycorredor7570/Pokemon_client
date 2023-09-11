import { Route, Routes } from "react-router-dom";
import { Home, Form, Detail, Landing } from "./views/imports";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Routes>
        {/* {location.pathname !== "/" && <NavBar/>} */}
        <Route path="/home" render={() => <Home/>}/>
        <Route path="/create" render={() => <Form/>}/>
        <Route exact path="/" render={() => <Landing/>}/>
        <Route path="/detail/:id" render={() => <Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;