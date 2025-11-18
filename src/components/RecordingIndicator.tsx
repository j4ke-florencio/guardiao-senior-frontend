
import React from 'react';

interface RecordingIndicatorProps {
  recordingTime: number;
}

const RecordingIndicator: React.FC<RecordingIndicatorProps> = ({ recordingTime }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  // Simple wave animation with random delays for a more dynamic look
  const waveBars = [
    { height: 'h-2', delay: 'delay-0' },
    { height: 'h-4', delay: 'delay-150' },
    { height: 'h-6', delay: 'delay-300' },
    { height: 'h-3', delay: 'delay-75' },
    { height: 'h-5', delay: 'delay-200' },
    { height: 'h-4', delay: 'delay-400' },
    { height: 'h-2', delay: 'delay-100' },
  ];

  return (
    <div className="flex-1 flex items-center gap-4 p-2">
      <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
      <span className="text-xl text-guardiao-cinza-escuro font-mono">
        {formatTime(recordingTime)}
      </span>
      <div className="flex items-center justify-center gap-1 h-8">
        {waveBars.map((bar, index) => (
          <div
            key={index}
            className={`w-1 ${bar.height} bg-guardiao-azul rounded-full animate-pulse ${bar.delay}`}
            style={{ animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RecordingIndicator;