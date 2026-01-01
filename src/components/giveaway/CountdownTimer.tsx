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
    // Set giveaway end date to 30 days from now
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
      <div className="bg-foreground text-primary-foreground w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
        <span className="text-4xl md:text-5xl font-heading font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-muted-foreground mt-2 uppercase tracking-wider font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-16 bg-muted">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          GIVEAWAY ENDS IN:
        </h2>
        
        <div className="flex justify-center gap-4 md:gap-6">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}