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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <span className="text-2xl sm:text-3xl font-heading font-bold tabular-nums text-primary-foreground">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs text-primary-foreground/60 uppercase tracking-wider ml-1">{label}</span>
    </div>
  );

  return (
    <section className="py-5 bg-primary border-y border-primary-foreground/10">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <span className="text-xs font-heading uppercase tracking-widest text-primary-foreground/70 hidden sm:block">
            Ends In
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            <TimeBlock value={timeLeft.days} label="d" />
            <span className="text-primary-foreground/30 text-xl">:</span>
            <TimeBlock value={timeLeft.hours} label="h" />
            <span className="text-primary-foreground/30 text-xl">:</span>
            <TimeBlock value={timeLeft.minutes} label="m" />
            <span className="text-primary-foreground/30 text-xl hidden sm:block">:</span>
            <div className="hidden sm:block">
              <TimeBlock value={timeLeft.seconds} label="s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
