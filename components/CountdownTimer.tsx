import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeBlockProps {
  value: number;
  label: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg w-16 h-16 md:w-32 md:h-32 border border-gray-700">
    <span 
      key={value} 
      className="text-2xl md:text-6xl font-bold text-amber-400 tabular-nums animate-pop-in"
    >
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-xs md:text-base text-gray-400 mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);

  if (!timeLeft) {
    return (
      <div className="text-3xl font-bold text-green-400 animate-pulse">
        لقد انطلقنا!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4 space-x-reverse text-center">
      <TimeBlock value={timeLeft.days} label="أيام" />
      <span className="text-2xl md:text-4xl text-gray-600 pb-4 md:pb-8">:</span>
      <TimeBlock value={timeLeft.hours} label="ساعات" />
      <span className="text-2xl md:text-4xl text-gray-600 pb-4 md:pb-8">:</span>
      <TimeBlock value={timeLeft.minutes} label="دقائق" />
      <span className="text-2xl md:text-4xl text-gray-600 pb-4 md:pb-8">:</span>
      <TimeBlock value={timeLeft.seconds} label="ثواني" />
    </div>
  );
};

export default CountdownTimer;