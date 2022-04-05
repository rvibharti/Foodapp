import { Routes, Route } from 'react-router-dom';
import Home from './Componenet/Home';
import Logout from './Componenet/Logout';
import NavBar from './NavBar';
import Login from './Componenet/Login';
import Menu from './Componenet/Menu';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Menu' element={<Menu />}></Route>
        <Route path='Logout' element={<Logout />}></Route>
        <Route path='LogIn' element={<Login />}></Route>

      </Routes >
    </>
  );
}

export default App;
