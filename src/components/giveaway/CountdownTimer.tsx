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
      <div className="bg-background text-foreground w-16 h-16 flex items-center justify-center rounded-lg mb-1">
        <span className="text-2xl font-heading font-bold tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section className="py-8 bg-primary">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Clock className="w-5 h-5" />
            <span className="font-heading font-semibold uppercase tracking-wider text-sm">
              Giveaway Ends In
            </span>
          </div>
          <div className="flex items-center gap-3">
            <TimeBlock value={timeLeft.days} label="Days" />
            <span className="text-primary-foreground/50 text-2xl font-bold">:</span>
            <TimeBlock value={timeLeft.hours} label="Hrs" />
            <span className="text-primary-foreground/50 text-2xl font-bold">:</span>
            <TimeBlock value={timeLeft.minutes} label="Min" />
            <span className="text-primary-foreground/50 text-2xl font-bold hidden sm:block">:</span>
            <div className="hidden sm:block">
              <TimeBlock value={timeLeft.seconds} label="Sec" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
