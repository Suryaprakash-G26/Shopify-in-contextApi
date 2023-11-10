import { Route, Routes } from 'react-router'
import './App.css'

import Mainpage from './pages/Mainpage'
import Cartpage from './pages/cartpage' 
import { useEffect } from 'react';
import { GetAllproducts } from './Api/api';
import { AppState } from './contetapi/contextapi';

function App() {
  const {setinfo}=AppState();
  useEffect(() => {
    GetAllproducts()
      .then((data) => {
        setinfo(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);
  

  

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Mainpage />} />
        <Route path='/cart/:id' element={<Cartpage  />} />  
      </Routes>
    </div>
  )
}

export default App
