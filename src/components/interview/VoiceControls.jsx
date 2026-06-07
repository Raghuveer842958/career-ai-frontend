export default function VoiceControls({
  startRecording,
  stopRecording,
  isRecording,
  isTranscribing,
}) {

  return (
    <div className="flex items-center justify-center gap-6">

      <button
        onClick={
          isRecording
            ? stopRecording
            : startRecording
        }
        disabled={isTranscribing}
        className={`
          w-16
          h-16
          rounded-full
          text-2xl
          border

          ${isRecording
            ? "bg-red-500 border-red-500 animate-pulse"
            : "bg-[#161616] border-[#242424]"
          }
        `}
      >
        {
          isRecording
            ? "⏹️"
            : "🎤"
        }
      </button>

      <button
        className="
          px-6 py-3
          rounded-xl
          bg-red-900/20
          border border-red-800/40
          text-red-400
        "
      >
        End Interview
      </button>

      {
        isTranscribing && (
          <div className="text-amber-300">
            Transcribing...
          </div>
        )
      }

    </div>
  );
}