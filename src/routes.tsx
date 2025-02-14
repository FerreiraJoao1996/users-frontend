import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import { Toaster } from "react-hot-toast";
import Users from "./users";

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
