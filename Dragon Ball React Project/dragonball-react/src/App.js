import logo from './logo.svg';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path ="/" element={<LandingPage/>}/>
      <Route exact path = "/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 

export default App;
