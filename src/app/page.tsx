import { HeroSection } from '@/components/sections/HeroSection';
import { PhotoCarouselSection } from '@/components/sections/PhotoCarouselSection';
import { MissionStory } from '@/components/sections/MissionStory';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { DonationSection } from '@/components/sections/DonationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getSiteConfig, getFeaturedProjects } from '@/lib/content';

export default function HomePage() {
  const siteConfig = getSiteConfig();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={siteConfig.name}
        tagline={siteConfig.tagline}
        description={siteConfig.description}
        backgroundImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072"
      />

      {/* Photo Carousel */}
      <PhotoCarouselSection />

      {/* Mission Story */}
      <MissionStory founder={siteConfig.founder} />

      {/* Impact Stats */}
      <ImpactStats impact={siteConfig.impact} />

      {/* Featured Projects */}
      <ProjectsGrid
        projects={featuredProjects.slice(0, 3)}
        showViewAll={true}
        title="Nuestros Proyectos"
        subtitle="Cada viaje es una historia de transformación, trabajo en equipo y amor compartido."
      />

      {/* Donation Section */}
      <DonationSection donation={siteConfig.donation} variant="default" />

      {/* Contact Section */}
      <ContactSection contact={siteConfig.contact} variant="default" />
    </>
  );
}
