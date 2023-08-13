import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Join from './components/Join';
import Whychoose from './components/Whychoose';
// import Footer from './components/Footer'; 
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Market2 from './components/Market2';


function App() {
  return (
    <Router>
      <div className='app'>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/Home" element={<Home/>}></Route>
              <Route exact path="/Market" element={<Market/>}></Route>
              <Route exact path="/Whychoose" element={<Whychoose/>}></Route>
              <Route exact path="/Join" element={<Join/>}></Route>
              <Route exact path="/Market2" element={<Market2/>}></Route>
            </Routes>
          {/* <Footer/>  */}
      </div>
    </Router>
  )
}

export default App;
