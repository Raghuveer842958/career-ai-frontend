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
import ResumeOptmize from "./pages/resume/ResumeOptimizer";
import ResumeOptimizerSetup from "./pages/resume/ResumeOptimizerSetup";
import ResumeOptimizer from "./pages/resume/ResumeOptimizer";





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

          {/* <Route
            path="/resume/optimize"
            element={<ResumeOptmize />}
          /> */}

          <Route
            path="/resume-optimizer/setup"
            element={<ResumeOptimizerSetup />} />
            
          <Route
            path="/resume-optimizer"
            element={<ResumeOptimizer />} />


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





// # CareerAI Frontend Context

// I am building an AI-powered SaaS application called CareerAI.

// ## Tech Stack

// * React.js
// * React Router DOM
// * Redux Toolkit
// * RTK Query
// * Tailwind CSS

// ## Project Goal

// CareerAI helps users:

// * Analyze resumes
// * Optimize resumes
// * Find jobs
// * Save jobs
// * Track job applications
// * Prepare for interviews
// * Take AI mock interviews
// * View interview history

// ---

// ## Frontend Folder Structure

// src/

// ├── assets/

// ├── components/

// │ ├── Navbar.jsx

// │ ├── DashboardCard.jsx

// │ ├── jobs/

// │ │ └── JobCard.jsx

// │ └── interview/

// │ └── VoiceControls.jsx

// │

// ├── pages/

// │ ├── Dashboard.jsx

// │ ├── Login.jsx

// │ ├── Signup.jsx

// │ ├── Profile.jsx

// │ │

// │ ├── jobs/

// │ │ ├── Jobs.jsx

// │ │ └── JobDetails.jsx

// │ │

// │ ├── interview/

// │ │ ├── InterviewSetup.jsx

// │ │ ├── InterviewSession.jsx

// │ │ ├── InterviewHistory.jsx

// │ │ └── InterviewDetails.jsx

// │ │

// │ └── resume/

// │ └── ResumeAnalysis.jsx

// │

// ├── store/

// │ ├── api/

// │ │ ├── authApi.js

// │ │ ├── jobsApi.js

// │ │ ├── interviewApi.js

// │ │ └── interviewHistoryApi.js

// │ │

// │ └── slices/

// │ └── authSlice.js

// │

// ├── context/

// │ └── ThemeContext.jsx

// │

// ├── hooks/

// │ └── useScrollSpy.js

// │

// └── App.jsx

// ---

// ## Theme System

// The application supports both Light and Dark mode.

// index.css

// ```css
// @import "tailwindcss";

// :root {
//   --bg: #ffffff;
//   --surface: #f8fafc;
//   --text: #111827;
//   --secondary: #6b7280;
//   --border: #e5e7eb;
//   --accent: #f59e0b;
// }

// .dark {
//   --bg: #0a0a0a;
//   --surface: #111111;
//   --text: #f8fafc;
//   --secondary: #9ca3af;
//   --border: #222222;
//   --accent: #f59e0b;
// }

// body {
//   background: var(--bg);
//   color: var(--text);
//   transition: .3s ease;
// }
// ```

// ---

// ## IMPORTANT UI RULES

// Follow these rules for every component/page:

// * Fully responsive on mobile, tablet, laptop, and desktop.
// * Mobile-first design.
// * Keep existing business logic untouched.
// * Keep existing API calls untouched.
// * Keep Redux Toolkit and RTK Query logic untouched.
// * Focus only on UI/UX improvements unless explicitly asked otherwise.
// * Do not break existing functionality.
// * Use theme variables instead of hardcoded colors.
// * Support both dark and light themes.
// * Use rounded-3xl cards where appropriate.
// * Maintain consistent spacing throughout the application.
// * Use professional SaaS design patterns.
// * Prefer Flexbox/Grid for layouts.
// * Avoid fixed widths when possible.
// * Use max-width containers for content sections.
// * Avoid horizontal scrolling.
// * Ensure tables, cards, forms, and modals are responsive.
// * Ensure typography scales properly across devices.
// * Use SVG illustrations when needed.
// * Avoid excessive gradients and flashy effects.
// * Avoid changing backend-related logic.
// * Avoid changing existing state management logic.

// ---

// ## When Updating Existing Files

// Always:

// 1. Keep all business logic intact.
// 2. Keep API integrations intact.
// 3. Keep Redux logic intact.
// 4. Keep existing functionality intact.
// 5. Improve responsiveness.
// 6. Improve spacing and layout consistency.
// 7. Improve accessibility where possible.
// 8. Return the COMPLETE UPDATED FILE.
// 9. Do not provide partial snippets unless specifically requested.
// 10. Explain major UI changes briefly after the code.

// ---

// ## Expected Coding Style

// * Clean React functional components.
// * Modern JSX.
// * Proper Tailwind utility usage.
// * Reusable component structure.
// * Readable code formatting.
// * Consistent naming conventions.
// * Production-ready UI.

// Whenever I share a React component or page, analyze the existing implementation first and then provide a complete updated version that follows all the above requirements.
