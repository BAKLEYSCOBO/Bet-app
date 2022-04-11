import React,{useEffect,useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar"
import Centerbar from "./components/centerbar"
import Rightbar from "./components/rightbar"
import Footer from "./components/footer"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faB } from "@fortawesome/free-solid-svg-icons";


library.add(faB  )


const API_URL = "https://api.kochabetbingo.com/v1/";




function App() {

  const betApp = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    betApp();
  },[]);



  return (
    <div className="app ">
      <Navbar />
      <div className='row container-fluid'>
      <div className='col col-md-3 col-xs-2'>
      <Leftbar />
      </div>
      <div className='col col-md-6 col-xs-8'>
      <Centerbar/>
      </div>
      <div className='col col-md-3 col-xs-2'>
      <Rightbar />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
