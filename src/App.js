import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
      <Route exact path="/About" element={<About/>}>
      </Route>
      <Route exact path="/" element={
        <TextForm showAlert={showAlert} heading="Enter The Text Here To Analyze" mode={mode}/>}>
      </Route>
    </Routes>
    <Navbar/>
    <Home/>
    </Router>
    </>
    
  )
}

export default App;
