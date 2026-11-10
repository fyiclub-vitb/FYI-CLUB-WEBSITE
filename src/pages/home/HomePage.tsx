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

interface HomePageProps {
  onOpenJoin: (eventTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenJoin }) => {
  return (
    <div className="w-full">
      <HeroSection />
      <MarqueeTicker />
      <BrandPoster />
      <ManifestoSection />
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
