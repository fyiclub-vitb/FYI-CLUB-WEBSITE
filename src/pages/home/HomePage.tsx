import React from 'react';
import {
  HeroSection,
  MarqueeTicker,
  BrandPoster,
  ManifestoSection,
  BulbWireRoadmap,
  SelectedWorks,
  ActivitiesGuilds,
  UpcomingEvents,
  GuildTeam,
  FaqSection,
  JoinSection,
} from './sections';
import { KineticMarqueeRibbon } from '../../components/animations';

interface HomePageProps {
  onOpenJoin: (eventTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenJoin }) => {
  return (
    <div className="w-full">
      <HeroSection />
      <KineticMarqueeRibbon
        items={['BUILT FOR DEPLOYMENTS', 'WHILE CAMPUS SLEEPS WE COMPILE', 'NO SLIDE DECKS ALLOWED', '100% STUDENT DRIVEN', 'SOLDER SMOKE & BARE-METAL CODE', 'ROGUE INNOVATION GUILD']}
      />
      <MarqueeTicker />
      <BrandPoster />
      <ManifestoSection />
      <KineticMarqueeRibbon
        items={['OPEN SOURCE BY DEFAULT', 'ZERO CORPORATE CRAP', 'ACTUAL CODE > PITCH DECKS', 'VIT BHOPAL CHAPTER', 'TESTED ON VOLATILE HOSTEL WI-FI', 'FYI GUILD']}
        angle={1.5}
        bg="bg-primary"
        textColor="text-white"
      />
      <BulbWireRoadmap />
      <SelectedWorks />
      <ActivitiesGuilds />
      <UpcomingEvents onClaimPass={(title) => onOpenJoin(title)} />
      <GuildTeam />
      <FaqSection />
      <JoinSection onOpenJoin={() => onOpenJoin()} />
    </div>
  );
};

export default HomePage;
