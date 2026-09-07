import webDevelopmentImage from '../assets/images/services-new/web-development.png';
import logoDesignImage from '../assets/images/services-new/logo-design.png';
import websiteDesignImage from '../assets/images/services-new/website-design.png';
import mobileAppImage from '../assets/images/services-new/mobile-app.png';
import customSoftwareImage from '../assets/images/services-new/custom-software.png';

export interface ServiceItem {
  slug: string;
  title: string;
  eyebrow: string;
  short: string;
  problem: string;
  solution: string;
  image: string;
  deliverables: string[];
  outcomes: string[];
  process: { title: string; text: string }[];
}

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    eyebrow: 'Fast, scalable, maintainable',
    short: 'Modern websites built around performance, clarity and business growth.',
    problem:
      'Your website is slow, outdated, difficult to update or no longer reflects the quality of the business behind it.',
    solution:
      'We build a clean, responsive website with a maintainable codebase, strong performance and a structure that is easy to grow.',
    image: webDevelopmentImage,
    deliverables: [
      'Responsive frontend development',
      'Modern React-based implementation',
      'Performance-focused build',
      'Reusable components',
      'Forms and business integrations',
      'Deployment and launch support',
    ],
    outcomes: [
      'Faster user experience',
      'Clearer customer journey',
      'Easier future updates',
      'A stronger online presence',
    ],
    process: [
      { title: 'Audit', text: 'We review your current website, goals, content and technical problems.' },
      { title: 'Structure', text: 'We define the pages, hierarchy and conversion path before development starts.' },
      { title: 'Build', text: 'We develop the responsive website and connect the features your business needs.' },
      { title: 'Launch', text: 'We test, deploy and support the website after it goes live.' },
    ],
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    eyebrow: 'A stronger visual first impression',
    short: 'Professional logo systems designed to make your business easier to recognize and trust.',
    problem:
      'Your brand looks generic, inconsistent or disconnected from the level of service your company actually provides.',
    solution:
      'We create a focused logo direction and visual identity that works consistently across websites, social media and business materials.',
    image: logoDesignImage,
    deliverables: [
      'Logo concept exploration',
      'Primary and secondary logo marks',
      'Color direction',
      'Typography direction',
      'Light and dark variants',
      'Practical export-ready assets',
    ],
    outcomes: [
      'More professional presentation',
      'Better visual consistency',
      'Stronger brand recognition',
      'Cleaner digital presence',
    ],
    process: [
      { title: 'Discover', text: 'We understand the business, audience, positioning and existing visual problems.' },
      { title: 'Explore', text: 'We develop focused logo concepts instead of random decorative ideas.' },
      { title: 'Refine', text: 'The strongest direction is improved for clarity, balance and practical use.' },
      { title: 'Deliver', text: 'You receive a usable identity system prepared for real business applications.' },
    ],
  },
  {
    slug: 'website-design',
    title: 'Website Design',
    eyebrow: 'Clear UX before code',
    short: 'User-focused website design that makes the business easy to understand and easy to act on.',
    problem:
      'Visitors land on the website but cannot quickly understand what you offer, why it matters or what they should do next.',
    solution:
      'We create a clear page structure and interface that guides visitors through the right information and toward the right action.',
    image: websiteDesignImage,
    deliverables: [
      'Page architecture',
      'Wireframes',
      'Responsive UI design',
      'Conversion-focused sections',
      'Design system direction',
      'Developer-ready layouts',
    ],
    outcomes: [
      'Clearer messaging',
      'Better usability',
      'Stronger conversion flow',
      'Consistent visual system',
    ],
    process: [
      { title: 'Understand', text: 'We map the audience, offer and the main decisions visitors need to make.' },
      { title: 'Wireframe', text: 'We build the information hierarchy before focusing on visual styling.' },
      { title: 'Design', text: 'We create polished responsive layouts aligned with your brand.' },
      { title: 'Prepare', text: 'Designs are structured for smooth implementation and future expansion.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    eyebrow: 'Business workflows in your users’ hands',
    short: 'Focused mobile experiences for customers, teams and services that need to work away from a desk.',
    problem:
      'Your customers or staff need to complete important tasks on the go, but the current process depends on desktop tools or manual communication.',
    solution:
      'We design and build a mobile experience around the exact workflow users need, with a simple interface and a practical feature set.',
    image: mobileAppImage,
    deliverables: [
      'Mobile product planning',
      'App interface design',
      'Frontend application development',
      'API integration',
      'Authentication workflows',
      'Testing and deployment support',
    ],
    outcomes: [
      'Faster mobile workflows',
      'Better customer convenience',
      'Less manual follow-up',
      'A more accessible service',
    ],
    process: [
      { title: 'Define', text: 'We identify the exact mobile use case and what users need to accomplish.' },
      { title: 'Prototype', text: 'We design the core flow and validate the experience before full development.' },
      { title: 'Develop', text: 'We build the application and connect required APIs and services.' },
      { title: 'Improve', text: 'We test real workflows and refine the product before release.' },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    eyebrow: 'Built around your operation',
    short: 'Purpose-built systems for businesses that have outgrown spreadsheets, chat messages and disconnected tools.',
    problem:
      'Core business work is spread across spreadsheets, messages and repetitive manual steps, making the process difficult to control and scale.',
    solution:
      'We turn that workflow into a custom web-based system designed around your actual roles, rules, approvals, data and reporting needs.',
    image: customSoftwareImage,
    deliverables: [
      'Workflow discovery',
      'Role-based business systems',
      'Dashboards and internal portals',
      'Approval workflows',
      'Reporting and data management',
      'API and third-party integrations',
    ],
    outcomes: [
      'Less repetitive admin work',
      'One source of operational data',
      'Clearer accountability',
      'Software that can grow with the business',
    ],
    process: [
      { title: 'Map', text: 'We document the current process, users, bottlenecks and business rules.' },
      { title: 'Design', text: 'We turn the workflow into a clear system architecture and user experience.' },
      { title: 'Build', text: 'We develop the platform in stages around the most important business functions.' },
      { title: 'Support', text: 'We launch, monitor and continue improving the system as operations evolve.' },
    ],
  },
];

export function getService(slug?: string) {
  return SERVICE_ITEMS.find((service) => service.slug === slug);
}
