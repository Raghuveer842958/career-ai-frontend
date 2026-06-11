import Navbar from "../components/Navbar";

import HeroSection from "../components/landing/HeroSection";

import FeatureGridSection from "../components/landing/FeatureGridSection";

import ResumeAnalysisSection from "../components/landing/ResumeAnalysisSection";

import JobSearchSection from "../components/landing/JobSearchSection";

import MockInterviewSection from "../components/landing/MockInterviewSection";

import InterviewHistorySection from "../components/landing/InterviewHistorySection";

import ResumeOptimizerSection from "../components/landing/ResumeOptimizerSection";

import CareerAgentSection from "../components/landing/CareerAgentSection";

export default function Dashboard() {

    return (

        <div
            style={{
                background: "var(--bg)",
                color: "var(--text)",
            }}
        >

            <Navbar />

            <main>

                <HeroSection />

                <FeatureGridSection />

                <ResumeAnalysisSection />

                <JobSearchSection />

                <MockInterviewSection />

                <InterviewHistorySection />

                <ResumeOptimizerSection />

                {/* <CareerAgentSection /> */}

            </main>

        </div>

    );

}