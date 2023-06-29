import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  return (
    
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<div className="container"><Home showAlert={showAlert} /></div>}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<div className="container"><Login showAlert={showAlert} /></div>}></Route>
            <Route exact path="/signup" element={<div className="container"><Signup showAlert={showAlert} /></div>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
