import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-foreground text-background flex items-center justify-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tabular-nums">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary" />
      </div>
      <span className="block mt-4 text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-heading font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="container-wide">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-heading font-semibold uppercase tracking-widest text-muted-foreground">
              Giveaway Ends In
            </span>
          </div>
          
          {/* Timer blocks */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <TimeBlock value={timeLeft.days} label="Days" />
            <div className="text-4xl font-bold text-muted-foreground/30 self-start mt-6">:</div>
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <div className="text-4xl font-bold text-muted-foreground/30 self-start mt-6">:</div>
            <TimeBlock value={timeLeft.minutes} label="Mins" />
            <div className="text-4xl font-bold text-muted-foreground/30 self-start mt-6 hidden sm:block">:</div>
            <div className="hidden sm:block">
              <TimeBlock value={timeLeft.seconds} label="Secs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
