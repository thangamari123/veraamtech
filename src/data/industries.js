import { Briefcase, GraduationCap, ShoppingBag, Store, Plane, Train, HeartPulse, Hotel, Tent, Landmark, Shield, Church } from 'lucide-react';

export const industries = [
  {
    id: 1,
    slug: 'corporate-offices',
    name: 'Corporate Offices',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    description: 'Elevate your corporate environment with state-of-the-art displays for boardrooms, lobbies, and collaboration spaces.',
    challenges: 'Communicating effectively across large campuses and impressing visiting clients.',
    solutions: 'Lobby video walls for branding, interactive displays for meeting rooms, and digital signage for internal communications.',
    benefits: 'Enhanced corporate image, improved employee engagement, and streamlined communication.'
  },
  {
    id: 2,
    slug: 'education',
    name: 'Education',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000',
    description: 'Transform learning experiences with interactive displays and campus-wide digital signage networks.',
    challenges: 'Engaging modern students and distributing timely information across large campuses.',
    solutions: 'Interactive flat panels for classrooms, outdoor LED signs for campus announcements, and auditorium video walls.',
    benefits: 'Higher student engagement, better information retention, and modernized campus aesthetics.'
  },
  {
    id: 3,
    slug: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    description: 'Captivate shoppers and drive sales with high-impact visual merchandising displays.',
    challenges: 'Standing out in competitive retail environments and updating promotional content quickly.',
    solutions: 'Window-facing high-brightness displays, dynamic digital endcaps, and immersive in-store video walls.',
    benefits: 'Increased foot traffic, higher sales conversions, and agile marketing capabilities.'
  },
  {
    id: 4,
    slug: 'airports',
    name: 'Airports',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000',
    description: 'Ensure smooth passenger flow with clear, reliable Flight Information Display Systems (FIDS) and advertising networks.',
    challenges: 'Operating 24/7 in demanding environments while displaying critical real-time information.',
    solutions: 'Robust FIDS displays, large-scale advertising video walls, and interactive wayfinding kiosks.',
    benefits: 'Improved passenger experience, significant advertising revenue generation, and reliable operation.'
  },
  {
    id: 5,
    slug: 'healthcare',
    name: 'Hospitals & Healthcare',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
    description: 'Improve patient experiences and streamline operations with clear digital wayfinding and informational displays.',
    challenges: 'Reducing patient anxiety, guiding visitors through complex facilities, and communicating health protocols.',
    solutions: 'Digital directories, queue management displays, and informative waiting room screens.',
    benefits: 'Enhanced patient satisfaction, reduced perceived wait times, and efficient facility navigation.'
  },
  {
    id: 6,
    slug: 'government',
    name: 'Government',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=2000',
    description: 'Facilitate transparent communication and efficient operations in public service facilities.',
    challenges: 'Providing clear information to the public and ensuring reliable operation for critical services.',
    solutions: 'Public information displays, courtroom presentation systems, and command center video walls.',
    benefits: 'Improved public service delivery, enhanced transparency, and modernized infrastructure.'
  }
];
