import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar"
import Centerbar from "./components/centerbar"
import Rightbar from "./components/rightbar"
import Footer from "./components/footer"




function App() {
  return (
    <div className="app ">
      <Navbar />
      <div className='row container-fluid'>
      <div className='col col-md-3'>
      <Leftbar />
      </div>
      <div className='col col-md-6'>
      <Centerbar/>
      </div>
      <div className='col col-md-3'>
      <Rightbar />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
