import marqueePlaceholder from './assets/images/marquee/placeholder.svg';
import workPlaceholder from './assets/images/work/logo/nedd-logo.png';
import marqueeOne from './assets/images/marquee/Rectangle-161124839.png';
import marqueeTwo from './assets/images/marquee/Rectangle-161124837.png';
import marqueeThree from './assets/images/marquee/Rectangle-161124835.png';
import marqueeFour from './assets/images/marquee/people-sharing-feelings-emotions-group-therapy-session.png';
import webDevelopmentImage from './assets/images/services/web-development.jpg';
import logoDesignImage from './assets/images/services/logo-design-281x300.jpg';
import webDesignImage from './assets/images/services/web-deisgn-959x1024.jpg';
import mobileAppImage from './assets/images/services/mob-application-281x300.jpg';
import customSoftwareImage from './assets/images/services/branding-1438x1536.jpg';

export const SITE = {
  name: 'NEDD Consultant',
  logo: '/neddconsultantlogo-removebg.png',
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
  marqueeOne,
  marqueeTwo,
  marqueeThree,
  marqueeFour,
  marqueeOne,
  marqueeTwo,
  marqueeThree,
  marqueeFour,
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
  { title: 'ELITEREHAB SOLUTIONS', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'ASIAN IMPORTS.MD', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'PEST SOLUTIONS', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
  { title: 'COWBOY STYLE REFINED', tags: ['Website Development', 'UI/UX Design'], img: workPlaceholder },
];

const PORTFOLIO = import.meta.glob('./assets/images/portfolio/**/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;

export type PortfolioCategory = 'Website Design' | 'Website Development' | 'Logo Design' | 'Mobile Application';

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
    const category =
      folder === 'website-design'
        ? 'Website Design'
        : folder === 'website-development'
        ? 'Website Development'
        : folder === 'logo-design' || folder === 'logo'
        ? 'Logo Design'
        : folder === 'mobile-application'
        ? 'Mobile Application'
        : 'Website Design';
    const title = normalized
      .split('/')
      .pop()
      ?.replace(/\.[^/.]+$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() ??
      '';

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

export const WORK: WorkItem[] = [
  { id: 1, title: 'COWBOY STYLE REFINED', category: 'Website', img: workPlaceholder },
  { id: 2, title: 'SECOND STREET GALLERY', category: 'Website', img: workPlaceholder },
  { id: 3, title: 'ELITEREHAB SOLUTIONS', category: 'Website', img: workPlaceholder },
  { id: 4, title: 'ASIAN IMPORTS.MD', category: 'Website', img: workPlaceholder },
  { id: 5, title: 'PEST SOLUTIONS', category: 'Website', img: workPlaceholder },
  { id: 6, title: 'ELITEREHAB SOLUTIONS', category: 'Website', img: workPlaceholder },
  { id: 7, title: 'ASIAN IMPORTS.MD', category: 'Website', img: workPlaceholder },
  { id: 8, title: 'PEST SOLUTIONS', category: 'Website', img: workPlaceholder },
  { id: 9, title: 'COWBOY STYLE REFINED', category: 'Website', img: workPlaceholder },
  { id: 10, title: 'BRAND IDENTITY 01', category: 'Logo', img: workPlaceholder },
  { id: 11, title: 'BRAND IDENTITY 02', category: 'Logo', img: workPlaceholder },
  { id: 12, title: 'BRAND IDENTITY 03', category: 'Logo', img: workPlaceholder },
  { id: 13, title: 'MARK STUDY 12', category: 'Logo', img: workPlaceholder },
  { id: 14, title: 'MARK STUDY 11', category: 'Logo', img: workPlaceholder },
  { id: 15, title: 'MARK STUDY 10', category: 'Logo', img: workPlaceholder },
  { id: 16, title: 'MARK STUDY 16', category: 'Logo', img: workPlaceholder },
  { id: 17, title: 'MARK STUDY 15', category: 'Logo', img: workPlaceholder },
  { id: 18, title: 'BRAND IDENTITY 05', category: 'Logo', img: workPlaceholder },
  { id: 19, title: 'MOBILE APP 01', category: 'Mobile Application', img: workPlaceholder },
  { id: 20, title: 'MOBILE APP 02', category: 'Mobile Application', img: workPlaceholder },
  { id: 21, title: 'MOBILE APP 03', category: 'Mobile Application', img: workPlaceholder },
  { id: 22, title: 'MOBILE APP 04', category: 'Mobile Application', img: workPlaceholder },
  { id: 23, title: 'MOBILE APP 05', category: 'Mobile Application', img: workPlaceholder },
  { id: 24, title: 'MOBILE APP 06', category: 'Mobile Application', img: workPlaceholder },
];

export const TESTIMONIALS = [
  {
    quote: 'The team took time to understand what we were trying to improve before talking about the build. That made the final solution much easier for our staff to use.',
    name: 'Jordan Avery',
    role: 'Founder, Second Street Gallery',
  },
  {
    quote: 'We needed more than a website. We needed a clearer way to present the business and manage the work behind it. NEDD helped us think through both sides.',
    name: 'Mara Lin',
    role: 'CEO, EliteRehab Solutions',
  },
  {
    quote: 'Communication was straightforward and the project stayed focused on what the business actually needed. We always knew what was being built and why.',
    name: 'Daniel Cho',
    role: 'Owner, Asian Imports',
  },
];