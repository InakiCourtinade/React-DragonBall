import logo from './logo.svg';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path ="/" element={<LandingPage/>}/>
      <Route exact path = "/home" element={<Home/>}/>
      <Route exact path ="/characterDetail/:name" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 

export default App;
