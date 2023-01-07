import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Addproduct from "./Addproduct";
import Updateproduct from "./Updateproduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Button>click</Button> */}
        <Routes>
          {/* <Route path="/login">
          <Login />
        </Route> */}
          <Route path="/" element="Home" />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/update" element={<Updateproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
