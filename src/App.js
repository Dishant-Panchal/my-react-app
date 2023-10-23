import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#444444";
      showAlert("Dark Mode Activated!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated!", "success");
    }
  }  

  const showAlert = (msg,type)=>{
    setAlert({message:msg, type:type});
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const setTheme = (event)=>{        
    document.body.style.backgroundColor = event.target.value;    
    showAlert(event.target[event.target.selectedIndex].innerText + " colored theme selected!","success");
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} setTheme={setTheme}/>
        <Alert alert={alert}/>       
        <Routes>
          <Route exect path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          <Route exect path="/about" element={<About mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
