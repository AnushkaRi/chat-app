import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Chat from "./components/Chat";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/Chat" element={!user?.name ? <Navigate to="/" replace={true} /> : <Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
