import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import InterviewSetup from "./pages/interview/InterviewSetup";
import InterviewSession from "./pages/interview/InterviewSession";
import InterviewReport from "./pages/interview/InterviewReport";
import InterviewHistory from "./pages/interview/InterviewHistory";
import InterviewDetails from "./pages/interview/InterviewDetails";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Interview Module */}
          <Route
            path="/interview/setup"
            element={<InterviewSetup />}
          />

          <Route
            path="/interview/session"
            element={<InterviewSession />}
          />

          <Route
            path="/interview/report"
            element={<InterviewReport />}
          />

          <Route
            path="/interview/history"
            element={<InterviewHistory />}
          />

          <Route
            path="/interview/history/:id"
            element={<InterviewDetails />}
          />


          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {/* Dashboard */}
            {/* <Route
              path="/dashboard"
              element={<Dashboard />}
            /> */}

            {/* Interview Module */}
            {/* <Route
              path="/interview/setup"
              element={<InterviewSetup />}
            /> */}

            {/* <Route
              path="/interview/session"
              element={<InterviewSession />}
            /> */}

            {/* <Route
              path="/interview/report"
              element={<InterviewReport />}
            /> */}

            {/* <Route
              path="/interview/history"
              element={<InterviewHistory />}
            /> */}

            {/* <Route
              path="/interview/history/:id"
              element={<InterviewDetails />}
            /> */}

          </Route>

          {/* Default Routes */}
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}