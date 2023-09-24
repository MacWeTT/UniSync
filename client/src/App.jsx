import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        {window.location.pathname !== "/login" && <Sidebar />}
        <div id="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
