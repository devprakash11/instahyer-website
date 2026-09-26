import {
  BadgeCheck,
  BarChart3,
  Bot,
  Briefcase,
  Globe2,
  Handshake,
  Lightbulb,
  MessageCircle,
  MessageSquare,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
} from "lucide-react";

export const eventDetails = [
  { label: "Date", value: "22 August, 2026", note: "Saturday" },
  { label: "Time", value: "4:00 PM - 5:30 PM", note: "IST" },
  { label: "Format", value: "Live Online", note: "Google Meet" },
  { label: "Price", value: "Free", note: "Registration" },
];

export const benefits = [
  {
    icon: Lightbulb,
    title: "Learn from Real Experience",
    description:
      "Hear how leading HR professionals navigated unprecedented challenges and transformed remote hiring.",
  },
  {
    icon: BarChart3,
    title: "Build Scalable Hiring Systems",
    description:
      "Discover the frameworks, tools and processes needed to attract, assess and hire top talent remotely.",
  },
  {
    icon: MessageSquare,
    title: "Ask Industry Leaders",
    description:
      "Submit your questions in advance and get expert answers live during the webinar.",
  },
];

export const learningOutcomes = [
  { icon: Globe2, title: "How remote hiring has changed recruitment" },
  { icon: Handshake, title: "Building trust during virtual interviews" },
  { icon: UserCheck, title: "Evaluating candidates remotely" },
  { icon: Bot, title: "Technology and automation in hiring" },
  { icon: Network, title: "Scaling distributed recruitment teams" },
  { icon: Users, title: "Preparing HR leadership for future growth" },
];

export const panelists = [
  {
    name: "Aniruudh Patel",
    role: "Head of Human Resources",
    company: "Target",
    bio: "Leading HR transformation and creating future-ready organisations that people love.",
    image: "/images/panelist-aniruudh.webp",
    linkedin: "",
  },
  {
    name: "Ajit Singh",
    role: "HR Leader",
    company: "Dell",
    bio: "Passionate about building people-first cultures and simplifying HR for maximum impact.",
    image: "/images/panelist-ajit.webp",
    linkedin: "",
  },
  {
    name: "Mayank Singh",
    role: "HR Business Partner",
    company: "Amazon",
    bio: "Driving people strategies and scaling teams for high-growth business around the world.",
    image: "/images/panelist-mayank.webp",
    linkedin: "",
  },
];

export const agendaItems = [
  {
    number: "01",
    time: "04:00 PM",
    title: "Welcome and context",
    description: "What changed in hiring and why remote-first capability now matters.",
  },
  {
    number: "02",
    time: "04:10 PM",
    title: "Lessons from a defining year",
    description: "The practices that improved agility, inclusion and hiring continuity.",
  },
  {
    number: "03",
    time: "04:35 PM",
    title: "Building future-proof HR leadership",
    description: "A practical framework for growth, scalability and stronger talent decisions.",
  },
  {
    number: "04",
    time: "05:00 PM",
    title: "Live panel Q&A",
    description: "Your questions answered by leaders from Amazon, Dell and Target.",
  },
  {
    number: "05",
    time: "05:25 PM",
    title: "Contest highlights and closing",
    description: "Featured #FutureOfHR questions, key takeaways and next steps.",
  },
];

export const whyAttend = [
  {
    icon: BadgeCheck,
    title: "Actionable insights",
    description: "Leave with ideas you can apply to current hiring challenges immediately.",
  },
  {
    icon: Briefcase,
    title: "Enterprise perspective",
    description: "Hear how experienced leaders are adapting people strategy at scale.",
  },
  {
    icon: MessageCircle,
    title: "Direct access to experts",
    description: "Submit your question and get practical answers during the live Q&A.",
  },
  {
    icon: Users,
    title: "Built for HR teams",
    description: "Relevant for recruiters, HRBPs, talent leaders and enterprise decision makers.",
  },
];

export const contestBenefits = [
  { icon: Sparkles, text: "Exciting prizes for the most insightful questions" },
  { icon: Target, text: "A chance to have your question featured live" },
  { icon: ShieldCheck, text: "Practical answers from experienced HR leaders" },
  { icon: Scale, text: "Simple entry through the webinar registration form" },
];

export const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Agenda", href: "#agenda" },
      { label: "Contest", href: "#contest" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Webinar", href: "#home" },
    ],
  },
];
