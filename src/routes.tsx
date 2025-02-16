import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { Toaster } from "react-hot-toast";
import Logic from "./components/users/logic";
import DeleteModal from "./components/modal/delete/delete";
import SelectedUsers from "./components/selected-users";
import Layout from "./components/layout/index.tsx";

function RoutesApp() {
  return (
    <>
      <Toaster />
      <DeleteModal/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/users" element={<Logic />} />
                <Route path="/selected-users" element={<SelectedUsers />} />
              </Routes>
            </Layout>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
