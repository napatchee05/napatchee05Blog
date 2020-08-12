import React,{useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Contact from "./components/Contact"

function App() {

  useEffect(() => {
    document.title = "napatchee05's"
 }, [])

  return (
    <div className="App" >
      <Navbar/>
      <Header/>
      <Contact/>
    </div>
  );
}


export default App;
