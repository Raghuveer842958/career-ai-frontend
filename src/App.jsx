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
import Jobs from "./pages/jobs/Jobs";
import JobDetails from "./pages/jobs/JobDetails";
import Profile from "./pages/profile/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import ResumeAnalysis from "./components/ResumeAnalysis";
import JobSearchAnalysis from "./components/JobSearchAnslysis";





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

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetails />}
          />

          <Route
            path="/resume-analysis"
            element={<ResumeAnalysis />}
          />

          <Route
            path="/job-search"
            element={<JobSearchAnalysis />}
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