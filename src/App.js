import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  return (
    //BEM naming convention - scalable and maintainable -> className="App" -> className="app"
    <div className="app">

      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* Chat */}
          <Chat />  
        </>
      ) : (
        <Login />
      )}
      

    </div>
  );
}

export default App;
