
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
 
  const showAlert = (message,type) =>{
    setAlert({
        msg: message,
        type: type
            })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - DarkMode';
      setTimeout(() => {
        document.title='TextUtils - Home';
      }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - LightMode';
      setTimeout(() => {
        document.title='TextUtils - Home';
      }, 1500);
    }

  }


  return (
   <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}></Alert>
<div className="container my-3">
<Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<Textform showAlert={showAlert}heading="Enter any Text:" mode={mode}/>}>          
          </Route>
</Routes>
</div>
</Router>
   </>
  );
}

export default App;
