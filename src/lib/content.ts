import fs from 'fs';
import path from 'path';

// Types
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Video {
  src: string;
  title: string;
  thumbnail?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectImpact {
  beneficiaries?: number;
  volunteers?: number;
  classrooms?: number;
  teachers_trained?: number;
  wells?: number;
  committee_trained?: number;
  families_trained?: number;
  hectares?: number;
  [key: string]: number | undefined;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  year: number;
  location: string;
  date: string;
  featured?: boolean;
  summary: string;
  description: string;
  coverImage: string;
  gallery: GalleryImage[];
  videos: Video[];
  impact: ProjectImpact;
  testimonials?: Testimonial[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  image: string;
}

export interface Impact {
  years: number;
  communities: number;
  schools: number;
  trips: number;
  volunteers: number;
  children: number;
}

export interface Donation {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  accountType: string;
  rut: string;
  email: string;
  paypal?: string;
  message: string;
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  founder: Founder;
  impact: Impact;
  donation: Donation;
  contact: Contact;
  seo: SEO;
}

const contentDirectory = path.join(process.cwd(), 'content');
const projectsDirectory = path.join(contentDirectory, 'projects');

export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDirectory, 'site.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as SiteConfig;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents) as Project;
    })
    .sort((a, b) => b.year - a.year);

  return projects;
}

export function getFeaturedProjects(): Project[] {
  const projects = getAllProjects();
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export function getProjectSlugs(): string[] {
  const projects = getAllProjects();
  return projects.map((project) => project.slug);
}

export function getProjectsByYear(year: number): Project[] {
  const projects = getAllProjects();
  return projects.filter((project) => project.year === year);
}

export function getProjectYears(): number[] {
  const projects = getAllProjects();
  const years = [...new Set(projects.map((project) => project.year))];
  return years.sort((a, b) => b - a);
}
