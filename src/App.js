import logo from './logo.svg';
import './App.css';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
