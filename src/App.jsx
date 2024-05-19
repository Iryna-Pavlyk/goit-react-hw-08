import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import css from "./App.module.css";

const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  return (
    <div className={css}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
