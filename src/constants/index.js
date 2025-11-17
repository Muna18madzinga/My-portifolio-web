const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 85, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Exceptional work in developing an innovative AI-powered loyalty platform. The team demonstrated strong technical skills and creative problem-solving throughout the hackathon.",
    imgPath: "/images/Screenshot.png",
    logoPath: "/images/Screenshot.png",
    title: "Loyalty Reimagined AI Hackathon - NMB Bank x Xplug",
    date: "September 2025",
    responsibilities: [
      "Developed a prototype loyalty system that dynamically adapts to customer behaviour, location, and engagement history.",
      "Integrated AI features including churn prediction, reinforcement learning, and voice-enabled chatbot navigation.",
      "Leveraged location intelligence to personalize rewards and drive customer retention across industries.",
      "Worked in a cross-functional team to ideate, design, and pitch the solution to judges and industry mentors.",
      "Gained hands-on experience in building scalable, customer-centric platforms using modern AI tools and frameworks.",
      "Explored real-world applications of AI in marketing, customer engagement, and behavioural analytics.",
    ],
  },
  {
    review: "Theo's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/Screenshot.png",
    logoPath: "/images/Screenshot.png",
    title: "Full Stack Developer",
    date: "June 2024 - December 2024",
    responsibilities: [
      "Led the development of Northgate's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Northgate ecosystem.",
    ],
  },
  {
    review: "Theo's work on Northgate's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/Screenshot.png",
    logoPath: "/images/Screenshot.png",
    title: "React Native Developer",
    date: "December 2024 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Northgate's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const projects = [
  {
    id: 1,
    title: "On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde",
    description: "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
    imgPath: "/images/project1.png",
    bgColor: "",
    isFeatured: true,
  },
  {
    id: 2,
    title: "The Library Management Platform",
    description: "",
    imgPath: "/images/project2.png",
    bgColor: "#FFEFDB",
    isFeatured: false,
  },
  {
    id: 3,
    title: "YC Directory - A Startup Showcase App",
    description: "",
    imgPath: "/images/project3.png",
    bgColor: "#FFE7EB",
    isFeatured: false,
  },
];

const testimonials = [

];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
