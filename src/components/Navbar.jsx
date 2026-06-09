
import {
  useTheme,
}
  from "../context/ThemeContext";

import {
  Link,
} from "react-router-dom";

import useScrollSpy
  from "../hooks/useScrollSpy";

export default function Navbar() {

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

        <div
          className="
                        flex
                        items-center
                        gap-3
                    "
        >

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
                        "
            style={{
              borderColor:
                "var(--border)",
            }}
          >

            {
              theme ===
                "dark"
                ? "☀️"
                : "🌙"
            }

          </button>

          <Link
            to="/profile"
            className="
                            px-4
                            py-2
                            rounded-lg
                            border
                        "
            style={{
              borderColor:
                "var(--border)",
            }}
          >

            Profile

          </Link>

        </div>

      </div>

    </header>

  );
}