import { Calendar, MapPin, Brain } from 'lucide-react';

interface ConferenceCardProps {
  location: string;
  date: string;
  theme: string;
  backgroundImage: string;
  onReserve: () => void;
}

const ConferenceCard = ({ location, date, theme, backgroundImage, onReserve }: ConferenceCardProps) => {
  return (
    <div className="conference-card">
      <div 
        className="h-48 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{date}</span>
        </div>
        
        <div className="flex items-start gap-2 mb-4">
          <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <h3 className="font-semibold text-foreground leading-tight">{theme}</h3>
        </div>
        
        <button 
          onClick={onReserve}
          className="btn-primary w-full text-center"
        >
          Reserve My Spot
        </button>
      </div>
    </div>
  );
};

export default ConferenceCard;