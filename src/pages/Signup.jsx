import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";
import { useSignupMutation, useLoginMutation } from "../store/api/authApi";
import careerAgent from "../assets/mock-interview1.svg";

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
    `w-full bg-[#1c1c1c] border rounded-lg px-4 py-3 text-sm text-[#ccc] placeholder-[#444] outline-none transition-colors ${errors[field]
      ? "border-red-800/60 focus:border-red-700"
      : "border-[#2e2e2e] focus:border-amber-700/50"
    }`;

  return (

    <div
      className="
            h-screen
            overflow-hidden
            grid
            lg:grid-cols-2
        "
      style={{
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >

      {/* Left Side */}

      <div
        className="
                hidden
                lg:flex
                flex-col
                justify-center
                items-center
                px-16
            "
        style={{
          background:
            "linear-gradient(to bottom right, var(--surface), var(--bg))"
        }}
      >

        <div className="max-w-lg">

          <h1
            className="
                        text-6xl
                        font-bold
                        mb-4
                    "
          >
            CareerAI
          </h1>

          <p
            className="
                        text-xl
                        leading-9
                        mb-12
                    "
            style={{
              color:
                "var(--secondary)"
            }}
          >
            Create your account and start
            improving your resume, discovering
            jobs, and preparing for interviews
            with AI.
          </p>

          <img
            src={careerAgent}
            alt="CareerAI"
            className="
                        w-[420px]
                        mx-auto
                    "
          />

        </div>

      </div>

      {/* Right Side */}

      <div
        className="
                flex
                items-center
                justify-center
                px-6
            "
      >

        <div
          className="
                    w-full
                    max-w-lg
                    p-10
                    rounded-[32px]
                "
          style={{
            background:
              "var(--surface)",
            border:
              "1px solid var(--border)"
          }}
        >

          <div className="mb-8">

            <h2
              className="
                            text-4xl
                            font-semibold
                            mb-3
                        "
            >
              Create Account
            </h2>

            <p
              style={{
                color:
                  "var(--secondary)"
              }}
            >
              Start your AI-powered career journey.
            </p>

          </div>

          {
            errors.general && (

              <div
                className="
                                mb-6
                                p-4
                                rounded-xl
                            "
                style={{
                  background:
                    "rgba(239,68,68,.08)",
                  border:
                    "1px solid rgba(239,68,68,.2)",
                  color:
                    "#ef4444"
                }}
              >
                {errors.general}
              </div>

            )
          }

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name Row */}

            <div className="grid grid-cols-2 gap-4">

              <div>

                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={inputClass("first_name")}
                  style={{
                    background:
                      "var(--bg)"
                  }}
                />

                {
                  errors.first_name && (

                    <p className="text-red-500 text-sm mt-2">
                      {errors.first_name}
                    </p>

                  )
                }

              </div>

              <div>

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={inputClass("last_name")}
                  style={{
                    background:
                      "var(--bg)"
                  }}
                />

                {
                  errors.last_name && (

                    <p className="text-red-500 text-sm mt-2">
                      {errors.last_name}
                    </p>

                  )
                }

              </div>

            </div>

            {/* Email */}

            <div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputClass("email")}
                style={{
                  background:
                    "var(--bg)"
                }}
              />

              {
                errors.email && (

                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>

                )
              }

            </div>

            {/* Password */}

            <div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={inputClass("password")}
                style={{
                  background:
                    "var(--bg)"
                }}
              />

              {
                errors.password && (

                  <p className="text-red-500 text-sm mt-2">
                    {errors.password}
                  </p>

                )
              }

            </div>

            {/* Confirm Password */}

            <div>

              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={inputClass("confirm_password")}
                style={{
                  background:
                    "var(--bg)"
                }}
              />

              {
                errors.confirm_password && (

                  <p className="text-red-500 text-sm mt-2">
                    {errors.confirm_password}
                  </p>

                )
              }

            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="
                            w-full
                            py-4
                            rounded-2xl
                            text-white
                            font-medium
                        "
              style={{
                background:
                  "var(--accent)"
              }}
            >

              {
                isLoading
                  ? "Creating Account..."
                  : "Create Account"
              }

            </button>

          </form>

          <div
            className="
                        flex
                        items-center
                        gap-3
                        my-8
                    "
          >

            <div
              className="flex-1 h-px"
              style={{
                background:
                  "var(--border)"
              }}
            />

            <span
              style={{
                color:
                  "var(--secondary)"
              }}
            >
              OR
            </span>

            <div
              className="flex-1 h-px"
              style={{
                background:
                  "var(--border)"
              }}
            />

          </div>

          <p
            className="text-center"
            style={{
              color:
                "var(--secondary)"
            }}
          >

            Already have an account?{" "}

            <Link
              to="/login"
              style={{
                color:
                  "var(--accent)"
              }}
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}