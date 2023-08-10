import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Market from './components/Market';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/Market" element={<Market/>}>
      </Route>
      {/* <Route exact path="/" element={
        <TextForm showAlert={showAlert} heading="Enter The Text Here To Analyze" />}>
      </Route> */}
    </Routes>
    <Navbar/>
    <Home/>
    </Router>
    </>
    
  )
}

export default App;
