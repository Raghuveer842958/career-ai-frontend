import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";
import { useSignupMutation, useLoginMutation } from "../store/api/authApi";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});

  const [signup, { isLoading: isSigningUp }] = useSignupMutation();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();

  const isLoading = isSigningUp || isLoggingIn;

  const validate = () => {
    const errs = {};
    if (!formData.first_name.trim()) errs.first_name = "Required";
    if (!formData.last_name.trim()) errs.last_name = "Required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 8)
      errs.password = "At least 8 characters";
    if (!formData.confirm_password) errs.confirm_password = "Please confirm";
    else if (formData.password !== formData.confirm_password)
      errs.confirm_password = "Passwords don't match";
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
      // Register
      await signup({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      // Auto-login after signup
      const loginResult = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      dispatch(setCredentials(loginResult));
      navigate("/dashboard");
    } catch (err) {
      setErrors({
        general:
          err?.data?.detail || "Something went wrong. Please try again.",
      });
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#1c1c1c] border rounded-lg px-4 py-3 text-sm text-[#ccc] placeholder-[#444] outline-none transition-colors ${
      errors[field]
        ? "border-red-800/60 focus:border-red-700"
        : "border-[#2e2e2e] focus:border-amber-700/50"
    }`;

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-12">
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
            Get started
          </h2>
          <p className="text-sm text-[#666] mb-8">Create your free account</p>

          {errors.general && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-900/20 border border-red-800/40 text-red-400 text-sm">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>

            {/* Name row */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] tracking-widest uppercase text-[#666] mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Jane"
                  className={inputClass("first_name")}
                />
                {errors.first_name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.first_name}</p>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] tracking-widest uppercase text-[#666] mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={inputClass("last_name")}
                />
                {errors.last_name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* Email */}
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
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-[10px] tracking-widest uppercase text-[#666] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 8 characters"
                className={inputClass("password")}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm password */}
            <div className="mb-6">
              <label className="block text-[10px] tracking-widest uppercase text-[#666] mb-2">
                Confirm password
              </label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="••••••••"
                className={inputClass("confirm_password")}
              />
              {errors.confirm_password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.confirm_password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-300 hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed text-[#0f0f0f] font-medium text-sm py-3 rounded-lg transition-colors"
            >
              {isLoading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="text-center text-sm text-[#555] mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-300 hover:text-amber-200 transition-colors"
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}