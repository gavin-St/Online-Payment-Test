import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateItem from './pages/CreateItem';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to = '/'> Home </Link>

        {!isAuth ? (
          <Link to = '/login'> Login </Link>
        ) : (
          <>
            <Link to = '/createitem'> Create Item </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth = {isAuth}/>} />
        <Route path="/createitem" element={<CreateItem isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />

      </Routes>
    </Router>
  );
}

export default App;
