import React, { useState, useEffect } from "react";

export function useCountdown(initialSeconds: number): number {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const countdownInterval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [remainingSeconds]);

  return remainingSeconds;
}
