import webDevelopmentImage from './assets/images/services/web-development.png';
import logoDesignImage from './assets/images/services/logo-design.png';
import webDesignImage from './assets/images/services/website-design.png';
import mobileAppImage from './assets/images/services/mobile-app-development.png';
import customSoftwareImage from './assets/images/services/custom-software.png';

const workPlaceholder = '/nedd-consultant-mark.png';

export const SITE = {
  name: 'NEDD Consultant',
  logo: '/nedd-consultant-logo.png',
  logoMark: '/nedd-consultant-mark.png',
  email: 'info.neddconsultant@gmail.com',
  phone: '+1 (281) 547-9290',
  address: '111 Town Square Place, Jersey City, NJ 07310',
};

export const EMAILJS = {
  serviceId: 'service_6da8zs2',
  templateId: 'template_2da8mam',
  publicKey: 'zPts01q41JaVsP9VV',
};

export const MARQUEE_IMAGES = [
  webDevelopmentImage,
  logoDesignImage,
  webDesignImage,
  mobileAppImage,
  customSoftwareImage,
  webDevelopmentImage,
  logoDesignImage,
  webDesignImage,
];

export const SERVICES = [
  {
    title: 'Website Development',
    problem: 'Your current site is slow, outdated or impossible to update without calling a developer every time.',
    solution: 'We build a fast, modern site on a clean codebase that your team can actually maintain and grow.',
    img: webDevelopmentImage,
  },
  {
    title: 'Logo Design',
    problem: 'Your brand looks inconsistent or generic, and it does not match how serious the business actually is.',
    solution: 'We design a distinct, professional logo and identity that looks right everywhere it appears.',
    img: logoDesignImage,
  },
  {
    title: 'Website Design',
    problem: 'Visitors land on the site and cannot tell what you do or why they should trust you within seconds.',
    solution: 'We design a clear, on-brand layout that leads visitors straight to the action you want them to take.',
    img: webDesignImage,
  },
  {
    title: 'Mobile Apps',
    problem: 'Customers or staff need to get things done on the go, but nothing built for mobile exists yet.',
    solution: 'We build a focused mobile app for that exact use case, so it works reliably wherever people are.',
    img: mobileAppImage,
  },
  {
    title: 'Custom Software',
    problem: 'Your team runs core work through spreadsheets, WhatsApp and manual steps that have outgrown the business.',
    solution: 'We design and build a purpose-built system around your exact workflow — not a generic template.',
    img: customSoftwareImage,
  },
];

export const CASE_STUDIES = [
  { title: 'COWBOY STYLE REFINED', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'SECOND STREET GALLERY', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'ELITEREHAB SOLUTIONS', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'ASIAN IMPORTS.MD', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'PEST SOLUTIONS', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
];

const PORTFOLIO = import.meta.glob('./assets/images/portfolio/**/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<
  string,
  { default: string }
>;

export type PortfolioCategory =
  | 'Website Design'
  | 'Website Development'
  | 'Logo Design'
  | 'Mobile Application';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  img: string;
}

const portfolioItems: PortfolioItem[] = Object.entries(PORTFOLIO)
  .filter(([path]) => !path.includes('placeholder.svg'))
  .map(([path, module], index) => {
    const normalized = path.replace('./assets/images/portfolio/', '');
    const folder = normalized.split('/')[0];

    const category: PortfolioCategory =
      folder === 'website-design'
        ? 'Website Design'
        : folder === 'website-development'
        ? 'Website Development'
        : folder === 'logo-design' || folder === 'logo'
        ? 'Logo Design'
        : 'Mobile Application';

    const title =
      normalized
        .split('/')
        .pop()
        ?.replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() ?? '';

    return {
      id: index + 1,
      title,
      category,
      img: module.default,
    };
  });

export const PORTFOLIO_ITEMS = portfolioItems;

export type WorkCategory = 'All' | 'Logo' | 'Website' | 'Mobile Application';

export interface WorkItem {
  id: number;
  title: string;
  category: 'Logo' | 'Website' | 'Mobile Application';
  img: string;
}

export const WORK: WorkItem[] = PORTFOLIO_ITEMS.map((item) => ({
  id: item.id,
  title: item.title,
  category:
    item.category === 'Logo Design'
      ? 'Logo'
      : item.category === 'Mobile Application'
      ? 'Mobile Application'
      : 'Website',
  img: item.img,
}));

export const TESTIMONIALS = [
  {
    quote:
      'The team took time to understand what we were trying to improve before talking about the build. That made the final solution much easier for our staff to use.',
    name: 'Jordan Avery',
    role: 'Founder, Second Street Gallery',
  },
  {
    quote:
      'We needed more than a website. We needed a clearer way to present the business and manage the work behind it. NEDD helped us think through both sides.',
    name: 'Mara Lin',
    role: 'CEO, EliteRehab Solutions',
  },
  {
    quote:
      'Communication was straightforward and the project stayed focused on what the business actually needed. We always knew what was being built and why.',
    name: 'Daniel Cho',
    role: 'Owner, Asian Imports',
  },
];
