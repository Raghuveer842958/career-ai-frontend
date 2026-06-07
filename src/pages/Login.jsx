import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../store/api/authApi";
import { setCredentials } from "../store/slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const [login, { isLoading }] = useLoginMutation();

  const validate = () => {
    const errs = {};
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.password) errs.password = "Password is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    try {
      const result = await login(formData).unwrap();
      dispatch(setCredentials(result));
      navigate("/dashboard");
    } catch (err) {
      setErrors({
        general:
          err?.data?.detail || "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-10">
          <h1 className="font-serif text-2xl text-amber-300 tracking-tight">
            CareerAI
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#161616] border border-[#242424] rounded-xl px-8 py-10">
          <h2 className="text-2xl font-light text-[#f0ede8] mb-1 tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-[#666] mb-8">Sign in to your account</p>

          {errors.general && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-900/20 border border-red-800/40 text-red-400 text-sm">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-[10px] tracking-widest uppercase text-[#666] mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full bg-[#1c1c1c] border rounded-lg px-4 py-3 text-sm text-[#ccc] placeholder-[#444] outline-none transition-colors
                  ${errors.email
                    ? "border-red-800/60 focus:border-red-700"
                    : "border-[#2e2e2e] focus:border-amber-700/50"
                  }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] tracking-widest uppercase text-[#666]">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-[#555] hover:text-amber-300 transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full bg-[#1c1c1c] border rounded-lg px-4 py-3 text-sm text-[#ccc] placeholder-[#444] outline-none transition-colors
                  ${errors.password
                    ? "border-red-800/60 focus:border-red-700"
                    : "border-[#2e2e2e] focus:border-amber-700/50"
                  }`}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-300 hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed text-[#0f0f0f] font-medium text-sm py-3 rounded-lg transition-colors"
            >
              {isLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#242424]" />
            <span className="text-xs text-[#444]">or</span>
            <div className="flex-1 h-px bg-[#242424]" />
          </div>

          <p className="text-center text-sm text-[#555]">
            No account?{" "}
            <Link
              to="/signup"
              className="text-amber-300 hover:text-amber-200 transition-colors"
            >
              Create one →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}