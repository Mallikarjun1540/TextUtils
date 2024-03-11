import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import {Routes, Route } from 'react-router-dom';



function App() {
  const [mode,setMode]=useState("light");

  
  const darkMode=(cls)=>{
    clearBodyClasses();
    // console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(2 9 14)';
      showAlert("Dark Mode has been Enabled","success")
      // document.title = "TextUtils | DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success")
      // document.title = "TextUtils | LightMode";
  
    }
    
  }
  const clearBodyClasses = () =>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    
  }
  

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <>
    <Navbar title="TextUtils" about="About-us" mode={mode} darkMode={darkMode} />
    <Alert alert={alert}/>
    <Routes>
      
      <Route path='/' element={<TextForm heading="Enter the text to Analyze" mode={mode}  showAlert={showAlert}/> }/>
      
      <Route path='/aboutus' element={<AboutUs mode={mode}/>}/>
      
      
      </Routes>
    </>
  );
}

export default App;
