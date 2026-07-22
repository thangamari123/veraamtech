import { MonitorPlay, Shield, Settings, Zap, Wrench, Users, Monitor, Laptop, Smartphone, Calendar, Radio, Info } from 'lucide-react';
import LedVideoWallIcon from '../components/LedVideoWallIcon';
import IndoorLedWallIcon from '../components/IndoorLedWallIcon';
import DigitalSignageIcon from '../components/DigitalSignageIcon';
import DesignConsultationIcon from '../components/DesignConsultationIcon';

export { LedVideoWallIcon, IndoorLedWallIcon, DigitalSignageIcon, DesignConsultationIcon };

export const services = [
  {
    id: 1,
    slug: 'led-video-wall-solutions',
    title: 'LED Video Wall Solutions',
    icon: LedVideoWallIcon,
    shortDescription: 'Comprehensive LED video wall solutions for immersive visual experiences in any environment.',
    overview: 'VEERAAM TECH offers end-to-end LED video wall solutions tailored to your specific requirements. From conceptualization and design to installation and maintenance, we ensure seamless integration and breathtaking visual performance.',
    features: ['High Resolution', 'Seamless Splicing', 'Customizable Sizes', 'Energy Efficient'],
    applications: ['Control Rooms', 'Broadcast Studios', 'Corporate Lobbies', 'Retail Stores'],
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=2574'
  },
  {
    id: 2,
    slug: 'indoor-led-video-walls',
    title: 'Indoor LED Video Walls',
    icon: IndoorLedWallIcon,
    shortDescription: 'High-resolution indoor displays delivering stunning clarity and vibrant colors.',
    overview: 'Our indoor LED video walls are designed to deliver exceptional image quality with fine pixel pitches, perfect for environments where viewers are close to the screen.',
    features: ['Fine Pixel Pitch', 'High Refresh Rate', 'Wide Viewing Angle', 'Front Serviceable'],
    applications: ['Conference Rooms', 'Auditoriums', 'Shopping Malls', 'Exhibition Centers'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 3,
    slug: 'outdoor-led-video-walls',
    title: 'Outdoor LED Video Walls',
    icon: Zap,
    shortDescription: 'Weather-proof, ultra-bright displays designed to captivate audiences outdoors.',
    overview: 'Engineered to withstand harsh environmental conditions, our outdoor LED displays offer ultra-high brightness ensuring visibility even in direct sunlight.',
    features: ['IP65/IP68 Waterproof', 'Ultra High Brightness', 'UV Resistant', 'Robust Cabinet Design'],
    applications: ['Digital Billboards', 'Sports Stadiums', 'Transportation Hubs', 'Building Facades'],
    image: 'https://images.unsplash.com/photo-1563241527-2009cb7b64ce?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 4,
    slug: 'digital-signage',
    title: 'Digital Signage',
    icon: DigitalSignageIcon,
    shortDescription: 'Dynamic digital signage solutions to communicate effectively with your audience.',
    overview: 'Transform your communication strategy with our digital signage solutions. Easy to manage and highly engaging, they are perfect for advertising, information dissemination, and wayfinding.',
    features: ['Cloud Management', 'Multi-zone Display', 'Interactive Touch', 'Automated Scheduling'],
    applications: ['Retail Outlets', 'Hospitals', 'Restaurants', 'Corporate Campuses'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 5,
    slug: 'commercial-display-systems',
    title: 'Commercial Display Systems',
    icon: Laptop,
    shortDescription: 'Professional-grade LCD and LED displays for continuous 24/7 commercial operation.',
    overview: 'Our commercial displays are built for reliability and continuous operation, offering superior durability compared to consumer-grade televisions.',
    features: ['24/7 Operation', 'Anti-glare Coating', 'Slim Bezel', 'Built-in SoC'],
    applications: ['Menu Boards', 'Flight Information', 'Control Rooms', 'Boardrooms'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 6,
    slug: 'design-and-consultation',
    title: 'Design & Consultation',
    icon: DesignConsultationIcon,
    shortDescription: 'Expert consulting and design services to plan your optimal display solution.',
    overview: 'We work closely with you to understand your needs and design a custom display solution that aligns with your space, budget, and objectives.',
    features: ['Needs Assessment', 'Site Analysis', 'Custom Blueprinting', 'ROI Estimation'],
    applications: ['All Sectors', 'New Build Projects', 'Retrofits', 'Large Scale Deployments'],
    image: 'https://images.unsplash.com/photo-1503945438517-f65904a52ce6?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 7,
    slug: 'installation',
    title: 'Professional Installation',
    icon: Wrench,
    shortDescription: 'Flawless execution and installation by our certified engineering team.',
    overview: 'Our skilled technicians ensure that your display systems are installed safely, securely, and calibrated perfectly for optimal performance.',
    features: ['Certified Technicians', 'Safety Compliance', 'Structural Engineering', 'Precision Calibration'],
    applications: ['Indoor Walls', 'Outdoor Billboards', 'Suspended Displays', 'Custom Enclosures'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 8,
    slug: 'amc-and-maintenance',
    title: 'AMC & Maintenance',
    icon: Shield,
    shortDescription: 'Comprehensive Annual Maintenance Contracts to ensure 24/7 display uptime.',
    overview: 'Protect your investment with our proactive maintenance plans. We offer regular servicing, regular inspections, rapid response repairs, and remote monitoring to keep your displays running smoothly.',
    features: ['Preventative Maintenance', 'Priority Support', 'Spare Parts Inventory', 'Remote Diagnostics'],
    applications: ['Enterprise Clients', 'Retail Chains', 'Mission Critical Rooms', 'Public Venues'],
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 9,
    slug: 'training-and-support',
    title: 'Training & Support',
    icon: Users,
    shortDescription: 'Empowering your team with comprehensive training and round-the-clock support.',
    overview: 'We provide thorough training for your staff on how to operate, manage content, and perform basic troubleshooting on your new display systems.',
    features: ['On-site Training', 'User Manuals', '24/7 Helpdesk', 'Software Updates'],
    applications: ['IT Departments', 'Marketing Teams', 'Facility Managers', 'End Users'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 10,
    slug: 'fine-pixel-pitch-displays',
    title: 'Fine Pixel Pitch Displays',
    icon: MonitorPlay,
    shortDescription: 'Ultra-high resolution LED displays for critical viewing applications.',
    overview: 'Experience the ultimate in clarity with our fine pixel pitch LED displays. Designed for environments where extreme detail is paramount.',
    features: ['Sub-1mm Pitch', 'HDR Support', 'High Contrast Ratio', 'Zero Bezel'],
    applications: ['Command Centers', 'Design Studios', 'Executive Boardrooms', 'High-end Retail'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 11,
    slug: 'advertising-display-systems',
    title: 'Advertising Display Systems',
    icon: Radio,
    shortDescription: 'High-impact advertising displays to maximize brand visibility and ROI.',
    overview: 'Capture attention and drive engagement with our specialized advertising display systems, perfect for DOOH (Digital Out Of Home) campaigns.',
    features: ['Remote Content Management', 'Audience Analytics', 'High Brightness', 'Vandal Resistant'],
    applications: ['Bus Shelters', 'Malls', 'Street Furniture', 'Transit Stations'],
    image: 'https://images.unsplash.com/photo-1558488349-1662d512a806?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 12,
    slug: 'software-configuration',
    title: 'Software Configuration',
    icon: Smartphone,
    shortDescription: 'Tailored software setup for seamless content management and hardware control.',
    overview: 'We configure and optimize the software ecosystem driving your displays, ensuring easy content updates, scheduling, and system monitoring.',
    features: ['CMS Integration', 'Custom Dashboards', 'API Integration', 'Security Configuration'],
    applications: ['Network Operations', 'Retail Chains', 'Corporate Communications', 'Campus Wide Systems'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'
  }
];
