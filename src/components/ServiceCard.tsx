import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  backgroundImage: string;
  hoverContent: ReactNode;
  className?: string;
}

const ServiceCard = ({ title, backgroundImage, hoverContent, className = "" }: ServiceCardProps) => {
  return (
    <div className={`service-card group h-96 ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="service-card-overlay" />
      
      {/* Default visible content */}
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="text-2xl font-bold text-white z-10">{title}</h3>
      </div>
      
      {/* Hover content */}
      <div className="service-card-content">
        <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
        <div className="text-black/90">
          {hoverContent}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;