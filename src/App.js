import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div
      className="grid place-items-center bg-[#dadbd3] h-screen"
    >
      {
        !user ?
          (
            // If user is not logged in, show login page
            <Login />
          ) : (
            // If user is logged in, show app body

            <div
              className=" flex h-[90vh] w-[90vw] bg-[#ededed] shadow-[-1px_4px_20px_-6px_rgba(0,0,0,0.7)] mt-[-50px]"
            >
              {/* Routing components based on url path */}
              <Router>
                {/* Showing sidebar universally */}
                <Sidebar />

                <Routes>

                  <Route path="/rooms/:roomId" element={<Chat />}>
                  </Route>
                  <Route path="/" />

                </Routes>

              </Router>
            </div>
          )
      }

    </div >
  );
};

export default App;
