import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention - scalable and maintainable -> className="App" -> className="app"
    <div className="app">

      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
    </div>
  );
}

export default App;
