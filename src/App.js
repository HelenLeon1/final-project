import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Routes/Home';
import TravelTips from './Routes/TravelTips';
import SignInPage from './Routes/SignInPage';



function App() {

  return (
    <div className="App">
       <h1 id="website-title">Beyond Our Borders</h1>
      <NavBar />
      <Routes> {/*each route renders different components based on the url that is being viewed in the browser*/}
        <Route path="/" element={<Home />}/>
        <Route path="/TravelTips" element={<TravelTips />} />
        <Route path="/SignIn" element={<SignInPage />}/>
        <Route path="*" element={<h2>Page Not Found</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
