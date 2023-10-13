import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Routes/Home';
import TravelTips from './Routes/TravelTips';
import SignInPage from './Routes/SignInPage';



function App() {

  return (
    <div className="App">
       <h1>Beyond Our Borders</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/TravelTips" element={<TravelTips />} />
        <Route path="/SignIn" element={<SignInPage />}/>
        <Route path="*" element={<div>error page</div>}/>
      </Routes>
    </div>
  );
}

export default App;
