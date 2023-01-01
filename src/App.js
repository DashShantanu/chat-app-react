import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="grid place-items-center bg-[#dadbd3] h-screen"
    >
      {/* App body */}
      <div
        className=" flex h-[90vh] w-[90vw] bg-[#ededed] shadow-[-1px_4px_20px_-6px_rgba(0,0,0,0.7)] mt-[-50px]"
      >
        {/* Routing components based on url path */}
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}>
            </Route>
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
