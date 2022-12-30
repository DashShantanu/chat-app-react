import React from "react";
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
        <Sidebar />

        <Chat />
      </div>
    </div >
  );
}

export default App;
