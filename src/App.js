import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import RegistrationForm from './Components/RegistrationForm';


function App() {

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/registrationform" element={<RegistrationForm />}/>
        <Route path="*" element={<div>error page</div>}/>
      </Routes>
    </div>
  );
}

export default App;
