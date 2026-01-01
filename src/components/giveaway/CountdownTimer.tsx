import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-foreground">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-8 text-background">
          <span className="text-sm font-heading uppercase tracking-widest opacity-60 hidden sm:block">
            Ends In
          </span>
          <div className="flex items-center gap-6 font-heading font-bold text-lg">
            <div className="text-center">
              <span className="text-2xl tabular-nums">{timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="text-xs opacity-60 ml-1">D</span>
            </div>
            <span className="opacity-30">:</span>
            <div className="text-center">
              <span className="text-2xl tabular-nums">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-xs opacity-60 ml-1">H</span>
            </div>
            <span className="opacity-30">:</span>
            <div className="text-center">
              <span className="text-2xl tabular-nums">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs opacity-60 ml-1">M</span>
            </div>
            <span className="opacity-30 hidden sm:block">:</span>
            <div className="text-center hidden sm:block">
              <span className="text-2xl tabular-nums">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs opacity-60 ml-1">S</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
