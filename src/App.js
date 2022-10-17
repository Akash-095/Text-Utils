// import logo from './logo.svg';
//import './App.css';
import About from './Components/About';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/About'
              element={<About mode={Mode} />}>
            </Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Your Text To Analyse" mode={Mode} />}>

            </Route>
          </Routes>


        </div>
      </Router>

    </>
  );
}

export default App;
