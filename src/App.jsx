import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/create' element={<Form/>}></Route>
          <Route path='/' element={<Landing/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
    </div>
  )
}

export default App
