import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-brand-gradient flex items-center justify-center ${isAnimatingOut ? 'animate-slide-up' : ''}`}>
      <div className="text-center">
        <h1 className="text-display text-white mb-4 animate-fade-in-up">
          Lagrange.kz
        </h1>
        <div className="w-24 h-1 bg-white/30 mx-auto animate-fade-in"></div>
      </div>
    </div>
  );
};

export default IntroAnimation;