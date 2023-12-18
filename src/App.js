import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Example';


function App() {
  // JavaScript goes in here
  const[user, setUser] = useState("Finally done loading");

  return (
    <div className="App">
      <Navbar user={user} /> {/* Passing 'user' to 'Navabar' as a prop */}
      <h1>Hello this is react</h1>
    </div>
  );
}

export default App;
