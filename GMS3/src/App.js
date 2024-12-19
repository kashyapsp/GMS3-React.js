
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import News from './News';
import Login from './Login';
import { useEffect } from 'react';

function App() {
  const navigate=useNavigate();
  const isLoggedIn=localStorage.getItem("token")!==null;

  useEffect(()=>{
   if(!isLoggedIn){
    navigate("/login");
   }
  
  },[isLoggedIn])
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn && <Navbar/>}
         <Routes>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="login" element={<Login/>}/>
         </Routes>
      </header>
    </div>
  );
}

export default App;
