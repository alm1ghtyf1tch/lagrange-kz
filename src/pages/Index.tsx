import { useState } from 'react';
import { Phone, Mail, Linkedin, Instagram, MessageCircle, CheckCircle } from 'lucide-react';
import IntroAnimation from '@/components/IntroAnimation';
import ServiceCard from '@/components/ServiceCard';
import ConferenceCard from '@/components/ConferenceCard';
import ScrollIndicator from '@/components/ScrollIndicator';
import heroImage from '@/assets/hero-bg.jpg';
import strategyImage from '@/assets/strategy-bg.jpg';
import developmentImage from '@/assets/development-bg.jpg';
import admissionImage from '@/assets/admission-bg.jpg';
import almatyImage from '@/assets/conference-almaty.jpg';
import astanaImage from '@/assets/conference-astana.jpg';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleReserveSpot = (location: string) => {
    // Open Calendly or Tally form in new tab
    window.open('https://calendly.com/lagrange-kz', '_blank');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! Interested in Lagrange.kz from your website!");
    window.open(`https://wa.me/77476564234?text=${message}`, '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/company/lagrange-kz', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/lagrange.kz', '_blank');
  };

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/2ebb2ac5-4700-4cd2-a7af-390aa7b9b092.png)` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-hero mb-6 fade-in-up">
            Guiding Students of All Grades to Global Academic Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in-up" style={{ animationDelay: '0.2s' }}>
            From primary education to global universities — your trusted partner in every educational journey.
          </p>
          <button className="btn-primary fade-in-up" style={{ animationDelay: '0.4s' }}>
            Book a Free Consultation
          </button>
        </div>
        <ScrollIndicator />
      </section>

      {/* Vision Statement Section */}
      <section className="py-24 px-6 bg-muted/20 border-t border-border/20 shadow-sm relative z-10">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-display leading-tight text-center w-full">
            We create educational journeys<br />
            for the next generation of <span className="text-primary font-extrabold bg-primary/10 px-2 py-1 rounded">leaders</span><br />
            and <span className="text-primary font-extrabold bg-primary/10 px-2 py-1 rounded">pioneers</span>
          </h2>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 border-t border-border/20 shadow-sm relative z-20 bg-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {/* Step 1 - Number on left */}
            <div className="grid md:grid-cols-12 gap-8 items-center py-16 border-b border-border/30">
              <div className="md:col-span-2 flex justify-center md:justify-start order-2 md:order-1">
                <span className="text-[120px] md:text-[150px] font-bold text-primary/20 leading-none">1</span>
              </div>
              <div className="md:col-span-10 order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Native language tutoring in MYP and GCSE
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our experts offer MYP and GCSE tutoring in various languages, preparing students for a smooth transfer to English language education. We strive to inspire teenagers to reach their full potential — all while meeting the most demanding requirements from the world's leading schools.
                </p>
              </div>
            </div>

            {/* Step 2 - Number on right */}
            <div className="grid md:grid-cols-12 gap-8 items-center py-16 border-b border-border/30">
              <div className="md:col-span-10">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Transferring painlessly from national to international programmes
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We carefully address all the challenges faced by students seeking to transition to IB and British Curriculum education.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <span className="text-[120px] md:text-[150px] font-bold text-primary/20 leading-none">2</span>
              </div>
            </div>

            {/* Step 3 - Number on left */}
            <div className="grid md:grid-cols-12 gap-8 items-center py-16">
              <div className="md:col-span-2 flex justify-center md:justify-start order-2 md:order-1">
                <span className="text-[120px] md:text-[150px] font-bold text-primary/20 leading-none">3</span>
              </div>
              <div className="md:col-span-10 order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Completing GCSE and A-Level tuition from any part of the world
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lagrange.kz makes high-quality education accessible to students regardless of their location. We empower teenagers to pursue globally recognised qualifications without the need to relocate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 border-t border-border/20 shadow-sm relative z-10 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4">Our Pathways to Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive educational guidance through three core pillars of excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Strategy"
              backgroundImage={strategyImage}
              hoverContent={
                <div>
                  <p className="mb-4">
                    We assist teenagers in exploring a wide range of modern professions, aligning them with their interests and outlining a multi-year roadmap to reach their ideal career:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Educational profile exploration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Target schools and universities research</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Personalised educational strategy</span>
                    </li>
                  </ul>
                </div>
              }
            />
            
            <ServiceCard
              title="Development"
              backgroundImage={developmentImage}
              hoverContent={
                <div>
                  <p className="mb-4">
                    Our charismatic tutors, masters and doctorate holders from all seven continents, lead students to complete the necessary stages of their educational strategy:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Individual tutoring in state curriculums, IB, GCSE, and A-Level programmes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Preparation for IELTS, TOEFL, SAT, and Oxbridge exams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Experiential learning</span>
                    </li>
                  </ul>
                </div>
              }
            />
            
            <ServiceCard
              title="Admission"
              backgroundImage={admissionImage}
              hoverContent={
                <div>
                  <p className="mb-4">
                    Oxbridge and Ivy League graduates resolve all requirements for enrolment and empower students to enter elite schools and universities alike:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Portfolio construction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Counselling in essay writing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Preparation for school and university interviews</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="py-12 px-6 bg-primary/5 border-t border-border/20 shadow-sm relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in our educational guidance?
          </p>
          <button className="btn-outline">
            Send an Inquiry
          </button>
        </div>
      </section>

      {/* Conference Section */}
      <section className="py-20 px-6 bg-muted/30 border-t border-border/20 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4">🎓 Upcoming Conferences in Kazakhstan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring world-class education events to your city — connect, learn, and grow.
            </p>
            
            {/* Countdown */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg inline-block">
              <p className="text-primary font-semibold">Next Event Starts in 03 Days 05 Hours</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ConferenceCard
              location="Almaty"
              date="March 15, 2024"
              theme="Get Into Top Asian Universities"
              backgroundImage={almatyImage}
              onReserve={() => handleReserveSpot('Almaty')}
            />
            
            <ConferenceCard
              location="Astana"
              date="March 22, 2024"
              theme="Oxbridge & Ivy League Success Strategies"
              backgroundImage={astanaImage}
              onReserve={() => handleReserveSpot('Astana')}
            />
          </div>
          
          <div className="text-center">
            <button className="btn-outline">
              View All Conferences
            </button>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 text-center">
            <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
              "The Lagrange.kz conference in Almaty completely changed my perspective on university applications. 
              The insights from Oxbridge graduates were invaluable."
            </blockquote>
            <p className="mt-4 font-semibold">— Aida K., Conference Attendee</p>
          </div>
        </div>
      </section>

      {/* Outro CTA Section */}
      <section className="py-20 px-6 border-t border-border/20 shadow-sm relative z-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display mb-8">
            We will help you <br />
            <span className="text-primary">from A to Z</span>. <br />
            Call us.
          </h2>
          <button className="btn-primary text-xl px-12 py-6">
            Schedule Your Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-muted/50 border-t border-border/20 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left Column - Contact Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Lagrange.kz</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="w-4 h-4" />
                    <span>+7 747 656 42 34</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4" />
                    <span>info@lagrange.kz</span>
                  </div>
                </div>
              </div>
              
              {/* Middle Column - Social Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={openLinkedIn}
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </button>
                <button
                  onClick={openInstagram}
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>
              </div>
              
              {/* Right Column - Additional Info */}
              <div className="text-center md:text-right">
                <p className="text-muted-foreground">
                  Your trusted partner in<br />
                  educational excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;