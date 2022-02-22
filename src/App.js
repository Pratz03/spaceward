import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention - scalable and maintainable className="App" -> className="app"
    <div className="app">
      <h2>Lets build a app.</h2>

      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
    </div>
  );
}

export default App;
