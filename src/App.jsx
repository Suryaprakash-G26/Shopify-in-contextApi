import { Route, Routes } from 'react-router'
import './App.css'

import Mainpage from './pages/Mainpage'
import Cartpage from './pages/cartpage' 
import { useEffect, useState } from 'react';
import { GetAllproducts } from './Api/api';

function App() {
  const [info,setinfo]=useState()
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
        <Route exact path='/' element={<Mainpage info={info}/>} />
        <Route path='/cart/:id' element={<Cartpage info={info} />} />  
      </Routes>
    </div>
  )
}

export default App
