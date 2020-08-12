import React,{useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Activity from "./components/Activity"
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    document.title = "napatchee05's"
 }, [])

  return (
    <div className="App" >
      <Navbar/>
      <Header/>
      <Contact/>
      <Activity/>
      <Footer/>
    </div>
  );
}


export default App;
