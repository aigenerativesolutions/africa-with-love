import { Metadata } from 'next';
import { getSiteConfig } from '@/lib/content';
import { AboutHero } from './AboutHero';
import { AboutStory } from './AboutStory';
import { AboutTimeline } from './AboutTimeline';
import { AboutValues } from './AboutValues';

export const metadata: Metadata = {
  title: 'Sobre Luis Castillo',
  description: 'Conoce la historia de Luis Castillo, fundador de Africa With Love, y su misión de 12 años transformando comunidades en Uganda.',
};

export default function AboutPage() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <AboutHero founder={siteConfig.founder} />
      <AboutStory founder={siteConfig.founder} />
      <AboutTimeline />
      <AboutValues />
    </>
  );
}
