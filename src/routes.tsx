import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/index.tsx";
import { Toaster } from "react-hot-toast";
import Logic from "./components/users/logic";
import DeleteModal from "./components/modal/delete/delete";
import SelectedUsers from "./components/selected-users";
import Layout from "./components/layout/index.tsx";
import NotFoundPage from "./components/global/error/index.tsx";

function RoutesApp() {
  return (
    <>
      <Toaster />
      <DeleteModal/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/users" element={<Logic />} />
                <Route path="/selected-users" element={<SelectedUsers />} />
                <Route path="/*" element={<NotFoundPage />} />
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
