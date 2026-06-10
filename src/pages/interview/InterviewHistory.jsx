// import {
//   useNavigate
// } from "react-router-dom";

// import {
//   useGetHistoryQuery
// } from "../../store/api/interviewHistoryApi";

// export default function InterviewHistory() {

//   const navigate =
//     useNavigate();

//   const {
//     data = [],
//     isLoading,
//   } = useGetHistoryQuery();

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   if (!data.length) {
//     return (
//       <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
//         <div className="text-center">

//           <h2 className="text-2xl mb-2">
//             No Interviews Found
//           </h2>

//           <p className="text-[#666]">
//             Complete your first interview to see history.
//           </p>

//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">

//       <div className="max-w-6xl mx-auto px-6 py-10">

//         <h1 className="font-serif text-4xl text-amber-300 mb-3">
//           Interview History
//         </h1>

//         <p className="text-[#666] mb-10">
//           Review your previous mock interviews.
//         </p>

//         <div className="grid gap-5">

//           {data.map((interview) => (

//             <div
//               key={interview._id}
//               onClick={() =>
//                 navigate(
//                   `/interview/history/${interview._id}`
//                 )
//               }
//               className="
//                 cursor-pointer
//                 bg-[#161616]
//                 border border-[#242424]
//                 rounded-xl
//                 p-6
//                 hover:border-amber-300/30
//                 transition-all
//               "
//             >

//               <div className="flex justify-between items-center">

//                 <div>

//                   <h3 className="text-xl mb-2">
//                     {interview.interview_type}
//                   </h3>

//                   <p className="text-[#666]">
//                     {interview.difficulty}
//                   </p>

//                   <p className="text-[#666] text-sm mt-1">
//                     {
//                       interview.created_at
//                         ? new Date(
//                             interview.created_at
//                           ).toLocaleDateString()
//                         : "-"
//                     }
//                   </p>

//                 </div>

//                 <div className="text-right">

//                   <p className="text-3xl text-amber-300">
//                     {interview.overall_score}
//                   </p>

//                   <p className="text-[#666] text-sm">
//                     Score
//                   </p>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }




import {
  useNavigate,
} from "react-router-dom";

import Navbar
  from "../../components/Navbar";

import {
  useGetHistoryQuery,
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

      <div
        className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
        style={{
          background:
            "var(--bg)",
          color:
            "var(--text)"
        }}
      >
        Loading Interview History...
      </div>

    );

  }

  const totalInterviews =
    data.length;

  const avgScore =
    data.length
      ? Math.round(
        data.reduce(
          (acc, item) =>
            acc +
            Number(
              item.overall_score || 0
            ),
          0
        ) / data.length
      )
      : 0;

  const bestScore =
    data.length
      ? Math.max(
        ...data.map(
          item =>
            Number(
              item.overall_score || 0
            )
        )
      )
      : 0;

  return (

    <div
      className="min-h-screen"
      style={{
        background:
          "var(--bg)",
        color:
          "var(--text)"
      }}
    >

      <Navbar />

      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-10
                "
      >

        {/* Header */}

        <div className="mb-10">

          <h1
            className="
                            text-4xl
                            font-semibold
                            mb-3
                        "
          >
            Interview History
          </h1>

          <p
            style={{
              color:
                "var(--secondary)"
            }}
          >
            Review past interviews,
            monitor performance,
            and track your growth over time.
          </p>

        </div>

        {/* Empty State */}

        {
          !data.length && (

            <div
              className="
                                rounded-3xl
                                p-12
                                text-center
                            "
              style={{
                background:
                  "var(--surface)",
                border:
                  "1px solid var(--border)"
              }}
            >

              <div className="text-6xl mb-5">
                🎤
              </div>

              <h2
                className="
                                    text-2xl
                                    font-semibold
                                    mb-3
                                "
              >
                No Interviews Yet
              </h2>

              <p
                style={{
                  color:
                    "var(--secondary)"
                }}
              >
                Complete your first
                mock interview to
                start tracking
                your progress.
              </p>

            </div>

          )
        }

        {
          data.length > 0 && (

            <>

              {/* Stats */}

              <div
                className="
                                    grid
                                    md:grid-cols-3
                                    gap-5
                                    mb-10
                                "
              >

                <div
                  className="
                                        rounded-3xl
                                        p-6
                                    "
                  style={{
                    background:
                      "var(--surface)",
                    border:
                      "1px solid var(--border)"
                  }}
                >

                  <p
                    style={{
                      color:
                        "var(--secondary)"
                    }}
                  >
                    Total Interviews
                  </p>

                  <h3
                    className="
                                            text-4xl
                                            font-semibold
                                            mt-3
                                        "
                  >
                    {totalInterviews}
                  </h3>

                </div>

                <div
                  className="
                                        rounded-3xl
                                        p-6
                                    "
                  style={{
                    background:
                      "var(--surface)",
                    border:
                      "1px solid var(--border)"
                  }}
                >

                  <p
                    style={{
                      color:
                        "var(--secondary)"
                    }}
                  >
                    Average Score
                  </p>

                  <h3
                    className="
                                            text-4xl
                                            font-semibold
                                            mt-3
                                        "
                  >
                    {avgScore}
                  </h3>

                </div>

                <div
                  className="
                                        rounded-3xl
                                        p-6
                                    "
                  style={{
                    background:
                      "var(--surface)",
                    border:
                      "1px solid var(--border)"
                  }}
                >

                  <p
                    style={{
                      color:
                        "var(--secondary)"
                    }}
                  >
                    Best Score
                  </p>

                  <h3
                    className="
                                            text-4xl
                                            font-semibold
                                            mt-3
                                        "
                  >
                    {bestScore}
                  </h3>

                </div>

              </div>

              {/* Interview Cards */}

              <div
                className="
                                    grid
                                    gap-5
                                "
              >

                {
                  data.map(
                    (
                      interview
                    ) => (

                      <div
                        key={
                          interview._id
                        }
                        onClick={() =>
                          navigate(
                            `/interview/history/${interview._id}`
                          )
                        }
                        className="
                                                    cursor-pointer
                                                    rounded-3xl
                                                    p-6
                                                    transition-all
                                                    hover:-translate-y-1
                                                "
                        style={{
                          background:
                            "var(--surface)",
                          border:
                            "1px solid var(--border)"
                        }}
                      >

                        <div
                          className="
                                                        flex
                                                        justify-between
                                                        items-center
                                                    "
                        >

                          <div>

                            <h3
                              className="
                                                                text-xl
                                                                font-semibold
                                                                mb-2
                                                            "
                            >
                              {
                                interview.interview_type
                              }
                            </h3>

                            <p
                              style={{
                                color:
                                  "var(--secondary)"
                              }}
                            >
                              {
                                interview.difficulty
                              }
                            </p>

                            <p
                              className="
                                                                text-sm
                                                                mt-2
                                                            "
                              style={{
                                color:
                                  "var(--secondary)"
                              }}
                            >
                              {
                                interview.created_at
                                  ? new Date(
                                    interview.created_at
                                  ).toLocaleDateString()
                                  : "-"
                              }
                            </p>

                          </div>

                          <div
                            className="
                                                            text-right
                                                        "
                          >

                            <h3
                              className="
                                                                text-5xl
                                                                font-bold
                                                            "
                            >
                              {
                                interview.overall_score
                              }
                            </h3>

                            <p
                              style={{
                                color:
                                  "var(--secondary)"
                              }}
                            >
                              Score
                            </p>

                          </div>

                        </div>

                      </div>

                    )
                  )
                }

              </div>

            </>

          )
        }

      </div>

    </div>

  );

}