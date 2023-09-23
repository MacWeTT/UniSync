import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Sidebar />
        <div id="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
