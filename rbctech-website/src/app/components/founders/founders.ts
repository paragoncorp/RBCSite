import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Founder {
  name: string;
  title: string;
  bio: string;
  initials: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-founders',
  imports: [CommonModule],
  templateUrl: './founders.html',
  styleUrl: './founders.scss',
})
export class Founders {
  founders: Founder[] = [
    {
      name: 'John Michael Rodriguez',
      title: 'Chief Executive Officer/President',
      bio: 'Visionary leader with over 20 years of experience in enterprise technology and digital transformation. John drives the strategic direction of RBCTech, championing innovation and sustainable growth.',
      initials: 'R',
      color: '#3e92cc',
      skills: ['Strategic Leadership', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Jan Aldrin Besmano',
      title: 'Co-Founder',
      bio: 'Pioneering technologist and systems architect with deep expertise in cloud infrastructure and AI-driven solutions. Jan spearheads our engineering culture and technical excellence across all platforms.',
      initials: 'B',
      color: '#d4af37',
      skills: ['Cloud Architecture', 'AI & Machine Learning', 'Systems Engineering']
    },
    {
      name: 'Miguel Felipe Calo',
      title: 'Chief Technology Officer',
      bio: 'Operations strategist with a proven track record in scaling technology companies from startup to enterprise. Miguel ensures seamless delivery, client success, and organizational efficiency.',
      initials: 'C',
      color: '#2ecc71',
      skills: ['Operations Management', 'Client Success', 'Process Optimization']
    }
  ];
}
