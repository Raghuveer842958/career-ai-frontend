import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "../store/api/authApi";
import { setCredentials } from "../store/slices/authSlice";

import careerAgent from "../assets/mock-interview1.svg";

// import careerAgent from "../assets/job-search.svg";

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [
    login,
    { isLoading }
  ] = useLoginMutation();

  const validate = () => {

    const errs = {};

    if (!formData.email) {
      errs.email =
        "Email is required";
    }

    else if (
      !/\S+@\S+\.\S+/.test(
        formData.email
      )
    ) {
      errs.email =
        "Invalid email";
    }

    if (!formData.password) {
      errs.password =
        "Password is required";
    }

    return errs;
  };

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const errs =
      validate();

    if (
      Object.keys(errs)
        .length
    ) {
      return setErrors(errs);
    }

    try {

      const result =
        await login(
          formData
        ).unwrap();

      dispatch(
        setCredentials(
          result
        )
      );

      navigate(
        "/dashboard"
      );

    }

    catch (err) {

      setErrors({
        general:
          err?.data?.detail ||
          "Invalid credentials. Please try again.",
      });

    }

  };

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
          background: "var(--surface)"
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
            AI-powered career growth platform
            designed to help you analyze resumes,
            discover jobs, prepare
            for interviews.
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
                    max-w-md
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
              Welcome Back
            </h2>

            <p
              style={{
                color:
                  "var(--secondary)"
              }}
            >
              Sign in to continue your
              CareerAI journey.
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

            <div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="
                                w-full
                                p-4
                                rounded-2xl
                                outline-none
                            "
                style={{
                  background:
                    "var(--bg)",
                  border:
                    "1px solid var(--border)"
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

            <div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="
                                w-full
                                p-4
                                rounded-2xl
                                outline-none
                            "
                style={{
                  background:
                    "var(--bg)",
                  border:
                    "1px solid var(--border)"
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

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-sm"
                style={{
                  color:
                    "var(--secondary)"
                }}
              >
                Forgot Password?
              </Link>

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
                            transition-all
                        "
              style={{
                background:
                  "var(--accent)"
              }}
            >
              {
                isLoading
                  ? "Signing In..."
                  : "Sign In"
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
              className="text-sm"
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
            className="
                        text-center
                    "
            style={{
              color:
                "var(--secondary)"
            }}
          >

            Don't have an account?{" "}

            <Link
              to="/signup"
              style={{
                color:
                  "var(--accent)"
              }}
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}