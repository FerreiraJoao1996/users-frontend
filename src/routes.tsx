import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { Toaster } from "react-hot-toast";
import Users from "./components/users";

function RoutesApp() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
