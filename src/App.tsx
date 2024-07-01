import React, { Suspense, lazy, ReactNode } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Layout from "./layout/Layout";
import ThemeProvider from "./theme"; 

const Home = lazy(() => import("./pages/Home/Home"));
const BuyTickets = lazy(() => import("./pages/Tickets/BuyTickets"));
const GuestLogin = lazy(() => import("./pages/login/GuestLogin"));
const GuestSignup = lazy(() => import("./pages/signup/GuestSignup"));

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/login-guest"
            element={
              <SuspenseWrapper>
                <GuestLogin />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/signup-guest"
            element={
              <SuspenseWrapper>
                <GuestSignup />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Layout />
              </SuspenseWrapper>
            }
          >
            <Route
              index
              element={
                <SuspenseWrapper>
                  <Home />
                </SuspenseWrapper>
              }
            />
            <Route
              path="buy-tickets"
              element={
                <SuspenseWrapper>
                  <BuyTickets />
                </SuspenseWrapper>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
