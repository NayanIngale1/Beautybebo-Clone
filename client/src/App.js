import { Register } from './Components/Register';
import { Routes, Route } from 'react-router-dom';
import { Navbars } from './Components/Navbar';
import { Login } from './Components/Login';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <div></div>
        <Header />
      </header>
      <Navbars></Navbars>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
