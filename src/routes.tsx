import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { Toaster } from "react-hot-toast";
import Logic from "./components/users/logic";

function RoutesApp() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Logic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
