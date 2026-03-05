import type { LucideIcon } from 'lucide-react';
import { Code2, Palette, Briefcase } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications using modern frameworks like React and Node.js.',
    color: 'bg-blue-500',
    image: '/assets/web dev.png',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and visually engaging user interfaces that enhance user experience and improve product usability.',
    color: 'bg-purple-500',
    image: '/assets/ui-ux.png',
  },
  {
    icon: Briefcase,
    title: 'Freelancing',
    description:
      'Providing flexible, client-focused development and design services to deliver digital solutions for businesses.',
    color: 'bg-yellow-500',
    image: '/assets/freelancing.png',
  },
];
