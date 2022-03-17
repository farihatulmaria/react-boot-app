import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import MeunBar from './Components/MeunBar/MeunBar';

function App() {
  const [count, setCount] = useState(0);
  
  const setCartCount= () =>{
    setCount(count + 1);
  }
  return (
    <div className="App">
      <MeunBar count = {count}></MeunBar>
      <AllProducts setCartCount = {setCartCount}/>
    </div>
  );
}

export default App;
