import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css}>
      {isRefreshing ? (
        <p>Please wait...</p>
      ) : (
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo="/"
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              ></Route>
            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
};

export default App;
