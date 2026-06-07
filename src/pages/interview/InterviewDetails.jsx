import {
  useParams
} from "react-router-dom";

import {
  useGetInterviewByIdQuery
} from "../../store/api/interviewHistoryApi";

export default function InterviewDetails() {

  const { id } = useParams();

  const {
    data: interview,
    isLoading,
  } = useGetInterviewByIdQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        Interview Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}

        <h1 className="font-serif text-4xl text-amber-300 mb-3">
          Interview Details
        </h1>

        <p className="text-[#666] mb-10">
          Detailed breakdown of your interview performance.
        </p>

        {/* Overall Score */}

        <div className="
          bg-[#161616]
          border border-[#242424]
          rounded-xl
          p-8
          mb-8
          text-center
        ">

          <p className="text-[#666] mb-2">
            Overall Score
          </p>

          <h2 className="text-6xl text-amber-300">
            {interview.overall_score}
          </h2>

        </div>

        {/* Summary */}

        <div className="
          bg-[#161616]
          border border-[#242424]
          rounded-xl
          p-6
          mb-8
        ">

          <h3 className="text-xl text-amber-300 mb-4">
            Summary
          </h3>

          <p className="text-[#ccc]">
            {interview.summary}
          </p>

        </div>

        {/* Strengths & Weaknesses */}

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="
            bg-[#161616]
            border border-[#242424]
            rounded-xl
            p-6
          ">
            <h3 className="text-green-400 mb-4">
              Strengths
            </h3>

            <ul className="space-y-2">
              {
                interview.strengths?.map(
                  (item, index) => (
                    <li key={index}>
                      ✓ {item}
                    </li>
                  )
                )
              }
            </ul>
          </div>

          <div className="
            bg-[#161616]
            border border-[#242424]
            rounded-xl
            p-6
          ">
            <h3 className="text-red-400 mb-4">
              Weaknesses
            </h3>

            <ul className="space-y-2">
              {
                interview.weaknesses?.map(
                  (item, index) => (
                    <li key={index}>
                      ✗ {item}
                    </li>
                  )
                )
              }
            </ul>
          </div>

        </div>

        {/* Improvements */}

        <div className="
          bg-[#161616]
          border border-[#242424]
          rounded-xl
          p-6
          mb-10
        ">

          <h3 className="text-amber-300 mb-4">
            Suggested Improvements
          </h3>

          <ul className="space-y-2">

            {
              interview.improvements?.map(
                (item, index) => (
                  <li key={index}>
                    • {item}
                  </li>
                )
              )
            }

          </ul>

        </div>

        {/* Question Breakdown */}

        <h2 className="text-2xl text-amber-300 mb-6">
          Question Breakdown
        </h2>

        <div className="space-y-6">

          {
            interview.rounds?.map(
              (round, index) => (

                <div
                  key={index}
                  className="
                    bg-[#161616]
                    border border-[#242424]
                    rounded-xl
                    p-6
                  "
                >

                  <h3 className="text-lg text-amber-300 mb-4">
                    Question {index + 1}
                  </h3>

                  {/* Question */}

                  <div className="mb-5">

                    <p className="text-sm text-[#666] mb-2">
                      Question
                    </p>

                    <p className="mb-3">
                      {round.question}
                    </p>

                    {
                      round.question_audio_url && (

                        <audio
                          controls
                          className="w-full"
                        >
                          <source
                            src={
                              round.question_audio_url
                            }
                          />
                        </audio>

                      )
                    }

                  </div>

                  {/* Answer */}

                  <div className="mb-5">

                    <p className="text-sm text-[#666] mb-2">
                      Your Answer
                    </p>

                    <p className="mb-3">
                      {round.answer}
                    </p>

                    {
                      round.answer_audio_url && (

                        <audio
                          controls
                          className="w-full"
                        >
                          <source
                            src={
                              round.answer_audio_url
                            }
                          />
                        </audio>

                      )
                    }

                  </div>

                  {/* Score */}

                  <div className="
                    inline-block
                    bg-amber-300/10
                    text-amber-300
                    px-4 py-2
                    rounded-lg
                    mb-4
                  ">
                    Score: {round.score}/10
                  </div>

                  {/* Feedback */}

                  <div className="mb-5">

                    <h4 className="text-amber-300 mb-2">
                      Feedback
                    </h4>

                    <p className="text-[#ccc]">
                      {round.feedback}
                    </p>

                  </div>

                  {/* Round Strengths */}

                  <div className="mb-4">

                    <h4 className="text-green-400 mb-2">
                      Strengths
                    </h4>

                    <ul className="space-y-1">

                      {
                        round.strengths?.map(
                          (item, idx) => (
                            <li key={idx}>
                              ✓ {item}
                            </li>
                          )
                        )
                      }

                    </ul>

                  </div>

                  {/* Round Weaknesses */}

                  <div>

                    <h4 className="text-red-400 mb-2">
                      Weaknesses
                    </h4>

                    <ul className="space-y-1">

                      {
                        round.weaknesses?.map(
                          (item, idx) => (
                            <li key={idx}>
                              ✗ {item}
                            </li>
                          )
                        )
                      }

                    </ul>

                  </div>

                </div>

              )
            )
          }

        </div>

      </div>

    </div>
  );
}