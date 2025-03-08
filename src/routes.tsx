import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Logic from "./components/users/logic";
import DeleteModal from "./components/modal/delete/delete";
import SelectedUsers from "./components/selected-users";
import Layout from "./components/layout/index.tsx";
import NotFoundPage from "./components/global/error/index.tsx";
import Login from "./components/login/index.tsx";
import ProtectedRoute from "./components/protected-route/index.tsx";
import Home from "./components/home/index.tsx";

function RoutesApp() {
  return (
    <>
      <Toaster />
      <DeleteModal/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/users" element={<Logic />} />
                  <Route path="/selected-users" element={<SelectedUsers />} />
                  <Route path="/*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
