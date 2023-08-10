import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Join from './components/Join';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/Home" element={<Home/>}></Route>
              <Route exact path="/Market" element={<Market/>}></Route>
              <Route exact path="/Join" element={<Join/>}></Route>
            </Routes>
          
      </div>
    </Router>
  )
}

export default App;
