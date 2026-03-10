import { Metadata } from 'next';
import { getAllProjects, getProjectYears } from '@/lib/content';
import { ProjectsPageContent } from './ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora todos los proyectos de Africa With Love: viajes, escuelas construidas, programas de desarrollo comunitario y más.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const years = getProjectYears();

  return <ProjectsPageContent projects={projects} years={years} />;
}
