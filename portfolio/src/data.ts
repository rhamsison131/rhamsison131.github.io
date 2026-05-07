export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured: boolean;
}

export interface Service {
  num: string;
  name: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface PortfolioData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  heroDescription: string;
  location: string;
  established: string;
  email: string;
  stats: Stat[];
  bio: string[];
  projects: Project[];
  services: Service[];
  socials: SocialLink[];
}

const data: PortfolioData = {
  name: "Rham Sison",
  firstName: "Rham",
  lastName: "Sison",
  role: "Graphic Designer",
  tagline: "Visual Design · Layout · Print & Digital",
  heroDescription:
    "I design with intention — turning ideas into visuals that communicate clearly, look sharp, and leave a mark.",
  location: "Cebu City, Philippines",
  established: "Cebu City, PH",
  email: "a80741120@gmail.com",

  stats: [
    { num: "50+", label: "Projects Done" },
    { num: "100%", label: "Client Focus" },
    { num: "1", label: "Designer. All in." },
  ],

  bio: [
    "I'm Rham Sison, a graphic designer based in Cebu City, Philippines. I specialize in creating clean, purposeful layouts — from social media postings and event tarpaulins to a wide range of print and digital design work.",
    "Design, for me, is about clarity and impact. Every project is an opportunity to communicate something worth seeing. Whether it's a single posting or a full event rollout, I bring the same care and precision to every piece.",
  ],

  projects: [
    {
      id: 1,
      title: "Summer Festival Tarpaulin",
      category: "Print Design",
      description:
        "Large-format tarpaulin design for a local summer event. Bold typography, vivid color palette, and clean layout optimized for outdoor visibility.",
      tags: ["Tarpaulin", "Print", "Typography"],
      featured: true,
    },
    {
      id: 2,
      title: "Social Media Posting Set",
      category: "Digital Design",
      description:
        "A cohesive set of promotional postings for a local business. Consistent visual identity across multiple post formats.",
      tags: ["Social Media", "Digital", "Branding"],
      featured: false,
    },
    {
      id: 3,
      title: "Event Poster Series",
      category: "Poster Design",
      description:
        "Series of promotional posters for a community event. Designed for both digital sharing and physical print production.",
      tags: ["Poster", "Print", "Layout"],
      featured: false,
    },
  ],

  services: [
    {
      num: "01",
      name: "Social Media Design",
      description:
        "Eye-catching layouts for Facebook posts, Instagram content, and other digital platforms — designed to stop the scroll.",
    },
    {
      num: "02",
      name: "Tarpaulin & Banner Design",
      description:
        "Large-format print designs built for maximum visibility. Events, promotions, announcements — made to stand out.",
    },
    {
      num: "03",
      name: "Poster & Flyer Design",
      description:
        "Print-ready and digital posters designed with clear hierarchy and visual impact for any occasion.",
    },
    {
      num: "04",
      name: "Layout & Other Design Work",
      description:
        "Open to any design-related project — menus, certificates, invitations, and more. Just bring the idea.",
    },
  ],

  socials: [
    { label: "Facebook", url: "https://www.facebook.com/rham.sison" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rham-sison" },
    { label: "Email", url: "mailto:a80741120@gmail.com" },
  ],
};

export default data;
