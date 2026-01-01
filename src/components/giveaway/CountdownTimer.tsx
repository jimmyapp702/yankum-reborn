import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

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
    <div className="flex flex-col items-center">
      <div className="bg-secondary text-secondary-foreground w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 flex items-center justify-center rounded-sm">
        <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-muted-foreground mt-3 uppercase tracking-wider font-heading font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 text-primary" />
          <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm">
            Limited Time Only
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-12">
          GIVEAWAY ENDS IN
        </h2>
        
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </section>
  );
}
