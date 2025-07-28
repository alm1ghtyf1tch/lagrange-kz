import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  );
};

export default ScrollIndicator;