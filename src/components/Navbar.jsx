import { useState, useRef, useEffect } from "react";

import {
  Link,
} from "react-router-dom";

import {
  useTheme,
} from "../context/ThemeContext";

import useScrollSpy
  from "../hooks/useScrollSpy";

export default function Navbar() {

  const [openMenu, setOpenMenu] =
    useState(false);

  const menuRef =
    useRef(null);

  useEffect(() => {

    const handleClickOutside =
      (event) => {

        if (
          menuRef.current &&
          !menuRef.current.contains(
            event.target
          )
        ) {

          setOpenMenu(false);

        }

      };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const sections = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "resume",
      label: "Resume",
    },
    {
      id: "jobs",
      label: "Jobs",
    },
    {
      id: "interview",
      label: "Interview",
    },
    {
      id: "history",
      label: "History",
    },
    {
      id: "optimizer",
      label: "Optimizer",
    },
  ];

  const activeSection =
    useScrollSpy(
      sections.map(
        section => section.id
      )
    );

  const scrollToSection =
    (id) => {

      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    };

  return (

    <header
      className="
                sticky
                top-0
                z-50
                backdrop-blur-xl
                border-b
            "
      style={{
        background:
          "var(--bg)",
        borderColor:
          "var(--border)",
      }}
    >

      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                    h-16
                    flex
                    items-center
                    justify-between
                "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
                        text-xl
                        font-semibold
                    "
        >

          Career
          <span
            style={{
              color:
                "var(--accent)"
            }}
          >
            AI
          </span>

        </Link>

        {/* Navigation */}

        <nav
          className="
                        hidden
                        md:flex
                        items-center
                        gap-2
                    "
        >

          {
            sections.map((section) => (

              <button
                key={section.id}
                onClick={() =>
                  scrollToSection(
                    section.id
                  )
                }
                className="
        px-4
        py-2
        rounded-lg
        text-sm
        transition-all
      "
                style={{
                  color:
                    activeSection === section.id
                      ? "#ffffff"
                      : "var(--text)",

                  background:
                    activeSection === section.id
                      ? "var(--accent)"
                      : "transparent",
                }}
              >

                {section.label}

              </button>

            ))
          }

        </nav>

        {/* Right Side */}

        {/* Right Side */}

        <div
          className="
    flex
    items-center
    gap-3
  "
        >

          {/* Theme Toggle */}

          <button
            onClick={
              toggleTheme
            }
            className="
      w-10
      h-10
      rounded-full
      border
      flex
      items-center
      justify-center
      transition-all
    "
            style={{
              borderColor:
                "var(--border)"
            }}
          >

            {
              theme === "dark"
                ? "☀️"
                : "🌙"
            }

          </button>

          {/* Avatar Menu */}

          <div
            className="
      relative
    "
            ref={menuRef}
          >

            <button
              onClick={() =>
                setOpenMenu(
                  !openMenu
                )
              }
              className="
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        font-medium
        transition-all
      "
              style={{
                background:
                  "var(--accent)",
                color:
                  "#fff"
              }}
            >

              R

            </button>

            {
              openMenu && (

                <div
                  className="
            absolute
            right-0
            mt-3
            w-52
            rounded-2xl
            overflow-hidden
            shadow-xl
          "
                  style={{
                    background:
                      "var(--surface)",
                    border:
                      "1px solid var(--border)"
                  }}
                >

                  <Link
                    to="/profile"
                    className="
              block
              px-4
              py-3
              hover:bg-black/5
            "
                  >
                    👤 Profile
                  </Link>

                  <Link
                    to="/jobs"
                    className="
              block
              px-4
              py-3
              hover:bg-black/5
            "
                  >
                    💼 Jobs
                  </Link>

                  <Link
                    to="/interview/history"
                    className="
              block
              px-4
              py-3
              hover:bg-black/5
            "
                  >
                    🎤 Interviews
                  </Link>

                  <button
                    className="
              w-full
              text-left
              px-4
              py-3
              text-red-500
              hover:bg-black/5
            "
                  >
                    🚪 Logout
                  </button>

                </div>

              )
            }

          </div>

        </div>

      </div>

    </header>

  );
}