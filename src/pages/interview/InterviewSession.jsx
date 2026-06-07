import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import VoiceControls from "../../components/interview/VoiceControls";
import { useSubmitAnswerMutation } from "../../store/api/interviewApi";
import { useTranscribeAudioMutation } from "../../store/api/voiceApi";

export default function InterviewSession() {

  const navigate = useNavigate();
  const location = useLocation();

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isTranscribing, setIsTranscribing] =
    useState(false);

  const [audioFile, setAudioFile] =
    useState(
      location.state.audioFile
    );

  const interviewData = location.state;

  const [transcribeAudio] =
    useTranscribeAudioMutation();

  const startRecording = async () => {

    setIsRecording(true);

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

    const mediaRecorder =
      new MediaRecorder(stream);

    mediaRecorderRef.current =
      mediaRecorder;

    audioChunksRef.current = [];

    mediaRecorder.ondataavailable =
      (event) => {

        audioChunksRef.current.push(
          event.data
        );

      };

    mediaRecorder.start();
  };

  const stopRecording = async () => {

    return new Promise(
      (resolve) => {

        mediaRecorderRef.current.onstop =
          () => {

            const audioBlob =
              new Blob(
                audioChunksRef.current,
                {
                  type: "audio/webm",
                }
              );

            resolve(audioBlob);

          };

        mediaRecorderRef.current.stop();

      }
    );
  };

  const handleStopRecording = async () => {

    try {

      setIsRecording(false);

      setIsTranscribing(true);

      const audioBlob =
        await stopRecording();

      const formData =
        new FormData();

      formData.append(
        "file",
        audioBlob,
        "recording.webm"
      );

      const response =
        await transcribeAudio(
          formData
        ).unwrap();

      const transcript =
      response.text;

      setAnswer(
        transcript
      );

      await submitAnswerHandler(
        transcript,
        response.audio_file
      );

    } catch (error) {

      console.log(error);

    } finally {

      setIsTranscribing(false);

    }
  };

  const submitAnswerHandler = async (customAnswer = answer, answerAudio = null) => {

    if (!customAnswer.trim()) {
      return;
    }

    try {

      setActiveSpeaker("user");

      const response =
        await submitAnswer({
          session_id: sessionId,
          answer: customAnswer,
          answer_audio: answerAudio,
        }).unwrap();

      console.log("response is :", response)

      if (response.completed) {

        navigate(
          "/interview/report",
          {
            state: {
              report:
                response.report,
            },
          }
        );

        return;
      }

      setLastFeedback(
        response.feedback
      );

      setCurrentQuestion(
        response.question
      );

      setAudioFile(
        response.audio_file
      );

      setCurrentQuestionNumber(
        (prev) => prev + 1
      );

      setAnswer("");

      setActiveSpeaker("ai");

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    console.log("Playing audio:", audioFile);

    if (!audioFile) return;

    const audio = new Audio(
      `http://localhost:8000/audio/${audioFile}`
    );

    audio.play();

  }, [audioFile]);

  if (!interviewData) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center text-white">
        No active interview found.
      </div>
    );
  }

  console.log("Location State:", location.state);
  console.log("Audio File:", audioFile);

  const {
    sessionId,
    question,
    questionNumber,
    totalQuestions,
  } = interviewData;

  const [activeSpeaker, setActiveSpeaker] =
    useState("ai");

  const [currentQuestion, setCurrentQuestion] =
    useState(question);

  const [currentQuestionNumber, setCurrentQuestionNumber] =
    useState(questionNumber);

  const [answer, setAnswer] = useState("");

  const [lastFeedback, setLastFeedback] =
    useState("");

  const [
    submitAnswer,
    { isLoading }
  ] = useSubmitAnswerMutation();


  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl text-amber-300">
            AI Interview
          </h1>

          <div className="bg-[#161616] border border-[#242424] rounded-lg px-4 py-2">
            Question {currentQuestionNumber} / {totalQuestions}
          </div>
        </div>

        {/* Progress */}

        <div className="w-full bg-[#242424] h-2 rounded-full mb-10">
          <div
            className="bg-amber-300 h-2 rounded-full"
            style={{
              width: `${(
                currentQuestionNumber /
                totalQuestions
              ) * 100}%`,
            }}
          />
        </div>

        {/* Participants */}

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* AI Card */}

          <div
            className={`
              bg-[#161616]
              rounded-2xl
              p-8
              border-2
              transition-all
              duration-300
              ${activeSpeaker === "ai"
                ? "border-amber-300 shadow-[0_0_25px_rgba(252,211,77,0.25)]"
                : "border-[#242424]"
              }
            `}
          >
            <div className="flex flex-col items-center">

              <div className="w-28 h-28 rounded-full bg-[#1f1f1f] flex items-center justify-center text-5xl mb-5">
                🤖
              </div>

              <h2 className="text-xl mb-2">
                AI Interviewer
              </h2>

              <p className="text-sm text-[#666] mb-5">
                Professional Backend Interview
              </p>

              <div
                className={`
                  px-4 py-2 rounded-full text-sm
                  ${activeSpeaker === "ai"
                    ? "bg-amber-300/10 text-amber-300"
                    : "bg-[#1f1f1f] text-[#666]"
                  }
                `}
              >
                {activeSpeaker === "ai"
                  ? "Speaking..."
                  : "Waiting"}
              </div>

            </div>
          </div>

          {/* User Card */}

          <div
            className={`
              bg-[#161616]
              rounded-2xl
              p-8
              border-2
              transition-all
              duration-300
              ${activeSpeaker === "user"
                ? "border-green-400 shadow-[0_0_25px_rgba(74,222,128,0.25)]"
                : "border-[#242424]"
              }
            `}
          >
            <div className="flex flex-col items-center">

              <div className="w-28 h-28 rounded-full bg-[#1f1f1f] flex items-center justify-center text-5xl mb-5">
                👤
              </div>

              <h2 className="text-xl mb-2">
                You
              </h2>

              <p className="text-sm text-[#666] mb-5">
                Candidate
              </p>

              <div
                className={`
                  px-4 py-2 rounded-full text-sm
                  ${activeSpeaker === "user"
                    ? "bg-green-400/10 text-green-400"
                    : "bg-[#1f1f1f] text-[#666]"
                  }
                `}
              >
                {activeSpeaker === "user"
                  ? "Speaking..."
                  : "Listening"}
              </div>

            </div>
          </div>

        </div>

        {/* Current Question */}

        <div className="bg-[#161616] border border-[#242424] rounded-2xl p-8 mb-8">

          <p className="text-xs uppercase tracking-widest text-[#666] mb-3">
            Current Question
          </p>

          <h2 className="text-2xl leading-relaxed">
            {currentQuestion}
          </h2>

        </div>

        {
          lastFeedback && (
            <div
              className="
      bg-[#161616]
      border
      border-[#242424]
      rounded-2xl
      p-6
      mb-8
    "
            >
              <p
                className="
        text-xs
        uppercase
        tracking-widest
        text-green-400
        mb-3
      "
              >
                Previous Answer Feedback
              </p>

              <p className="text-[#d4d4d4]">
                {lastFeedback}
              </p>
            </div>
          )
        }

        <div
          className="
  bg-[#161616]
  border
  border-[#242424]
  rounded-2xl
  p-6
  mb-8
"
        >

          <h3 className="mb-4">
            Your Answer
          </h3>

          <textarea
            rows={8}
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="
      Type your answer here...
    "
            className="
      w-full
      bg-[#1c1c1c]
      border
      border-[#2e2e2e]
      rounded-lg
      p-4
      outline-none
      focus:border-amber-700/50
    "
          />

          <button
            onClick={
              submitAnswerHandler
            }
            disabled={isLoading}
            className="
      mt-4
      bg-amber-300
      text-black
      px-6
      py-3
      rounded-lg
      font-medium
    "
          >
            {
              isLoading
                ? "Evaluating..."
                : "Submit Answer"
            }
          </button>

        </div>

        {/* Controls */}

        <VoiceControls
          startRecording={startRecording}
          stopRecording={handleStopRecording}
          isRecording={isRecording}
          isTranscribing={isTranscribing}
        />

      </div>
    </div>
  );
}