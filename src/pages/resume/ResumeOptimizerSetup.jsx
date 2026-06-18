import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ResumeOptimizerSetup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { jobDescription } = location.state || {}

    const [description, setDescription] = useState(jobDescription);
    const [fileName, setFileName] = useState("");

    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setFileName(file.name);

        // Backend integration later
        // Extract text from file here
    };

    const handleContinue = () => {
        console.log("handle clicked called!!")
        if (!description.trim()) {
            alert("Please provide a Job Description");
            return;
        }

        navigate("/resume-optimizer", {
            state: {
                description,
            },
        });
    };

    return (
        <div
            className="min-h-screen px-4 py-10"
            style={{ background: "var(--bg)" }}
        >
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div
                    className="rounded-3xl p-8 border"
                    style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                    }}
                >
                    <h1 className="text-4xl font-bold mb-3">
                        Resume Optimizer
                    </h1>

                    <p
                        className="mb-8"
                        style={{ color: "var(--secondary)" }}
                    >
                        Paste a Job Description or upload a JD file to optimize
                        your resume.
                    </p>

                    <label className="block font-semibold mb-3">
                        Job Description
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Paste Job Description here..."
                        className="w-full h-72 rounded-2xl p-4 border outline-none"
                        style={{
                            background: "var(--bg)",
                            borderColor: "var(--border)",
                        }}
                    />

                    <div className="my-6 text-center">
                        <span style={{ color: "var(--secondary)" }}>
                            OR
                        </span>
                    </div>

                    <input
                        type="file"
                        accept=".txt,.pdf,.doc,.docx"
                        onChange={handleFileUpload}
                    />

                    {fileName && (
                        <p className="mt-2 text-sm">
                            Selected: {fileName}
                        </p>
                    )}

                    <button
                        onClick={handleContinue}
                        className="mt-8 px-6 py-3 rounded-xl font-semibold"
                        style={{
                            background: "var(--accent)",
                            color: "#fff",
                        }}
                    >
                        Continue →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumeOptimizerSetup;
