import {
  useNavigate
} from "react-router-dom";

import {
  useGetHistoryQuery
} from "../../store/api/interviewHistoryApi";

export default function InterviewHistory() {

  const navigate =
    useNavigate();

  const {
    data = [],
    isLoading,
  } = useGetHistoryQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="text-center">

          <h2 className="text-2xl mb-2">
            No Interviews Found
          </h2>

          <p className="text-[#666]">
            Complete your first interview to see history.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="font-serif text-4xl text-amber-300 mb-3">
          Interview History
        </h1>

        <p className="text-[#666] mb-10">
          Review your previous mock interviews.
        </p>

        <div className="grid gap-5">

          {data.map((interview) => (

            <div
              key={interview._id}
              onClick={() =>
                navigate(
                  `/interview/history/${interview._id}`
                )
              }
              className="
                cursor-pointer
                bg-[#161616]
                border border-[#242424]
                rounded-xl
                p-6
                hover:border-amber-300/30
                transition-all
              "
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-xl mb-2">
                    {interview.interview_type}
                  </h3>

                  <p className="text-[#666]">
                    {interview.difficulty}
                  </p>

                  <p className="text-[#666] text-sm mt-1">
                    {
                      interview.created_at
                        ? new Date(
                            interview.created_at
                          ).toLocaleDateString()
                        : "-"
                    }
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-3xl text-amber-300">
                    {interview.overall_score}
                  </p>

                  <p className="text-[#666] text-sm">
                    Score
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}