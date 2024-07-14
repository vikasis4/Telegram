import React from "react";
import ChatList from "./components/ChatList";
import Room from "./components/message/Room.jsx";
import { useState } from "./context/state.js";


function App() {

  const { isChat } = useState()

  return (
    <div className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-900" style={{ height: window.innerHeight }}>
      <div className={`absolute inset-0 duration-700 transition-transform transform ${isChat ? '-translate-x-full' : 'translate-x-0'}`}>
        <ChatList />
      </div>
      <div className={`absolute inset-0 duration-700 transition-transform transform ${isChat ? 'translate-x-0' : 'translate-x-full'}`}>
        <Room />
      </div>
    </div>
  );
}


export default App;
