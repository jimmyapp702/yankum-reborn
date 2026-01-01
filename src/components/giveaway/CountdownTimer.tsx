import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

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
      <div className="relative bg-yankum-charcoal border border-yankum-steel/30 w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 flex items-center justify-center">
        {/* Industrial corner details */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        
        <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary-foreground tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-yankum-steel mt-3 uppercase tracking-[0.2em] font-heading font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-yankum-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--yankum-steel)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--yankum-steel)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-wide relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <AlertTriangle className="w-5 h-5 text-primary" />
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm">
            Limited Time Only
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground text-center mb-12 tracking-tight">
          GIVEAWAY ENDS IN
        </h2>
        
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <TimeBlock value={timeLeft.days} label="Days" />
          <div className="flex flex-col justify-center text-3xl md:text-4xl text-yankum-steel font-bold">:</div>
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <div className="flex flex-col justify-center text-3xl md:text-4xl text-yankum-steel font-bold">:</div>
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <div className="flex flex-col justify-center text-3xl md:text-4xl text-yankum-steel font-bold">:</div>
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-yankum-steel">
          <Clock className="w-4 h-4" />
          <span className="text-sm uppercase tracking-wider">Mission-critical deadline</span>
        </div>
      </div>
    </section>
  );
}
