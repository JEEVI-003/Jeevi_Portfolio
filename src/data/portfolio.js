// ============================================================
// CENTRALIZED PORTFOLIO DATA
// Edit this file to update site content.
// ============================================================

export const profile = {
  name: "JEEVIKESH S N",
  role: "Software Engineer",
  tagline:
    "I build backend systems and mobile applications — from REST APIs to cross-platform apps.",
  photo: "src/assets/j_port_ph.png",
  resumeUrl: "JEEVIKESH_S N_Resume",
};

export const heroTechnologies = [
  "Java",
  "Spring Boot",
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const social = {
  github: "https://github.com/JEEVI-003",
  linkedin: "https://linkedin.com/in/jeevikesh-s-n",
  email: "snjeevikesh@gmail.com",
  phone: "+91 8667684249",
};

export const about = {
  paragraphs: [
    "I'm a Software Engineer with hands-on internship experience in Flutter and Spring Boot development, focused on building practical applications, backend services, and user-facing software.",
    
    "My work spans application development, REST APIs, database integration, authentication, and responsive interfaces. I enjoy working across the backend and frontend of a product to understand how the different parts come together.",
    
    "During my internship at RGreen Technologies in Madurai, I worked as a Flutter & Spring Boot Developer Intern, gaining practical experience in mobile application development, backend services, API integration, and application-level problem solving.",
    
    "I have also worked on projects including MediaJungle, an OTT media platform for mobile and TV experiences, and a Movie Tickets Booking System focused on movie browsing, seat selection, booking workflows, and administration.",
    
    "My current focus is strengthening my skills as a full-stack software developer, with particular interest in Java, Spring Boot, REST APIs, Flutter, databases, and building reliable real-world applications."
  ],

  focusAreas: [
    {
      title: "Backend",
      description: "Java, Spring Boot, REST APIs, authentication and backend services",
    },
    {
      title: "Mobile",
      description: "Flutter and Dart for cross-platform application development",
    },
    {
      title: "Web",
      description: "HTML, CSS, JavaScript and modern application interfaces",
    },
  ],

  engineeringFocus: [
    "Backend and REST API development",
    "Mobile application development",
    "Database integration",
    "Authentication and application security",
    "Cross-platform application development",
    "Clean and maintainable code",
  ],

  experience: {
    company: "RGreen Technologies",
    location: "Madurai",
    role: "Flutter & Spring Boot Developer Intern",
    duration: "6-Month Internship",
    description:
      "Worked on mobile and backend development using Flutter and Spring Boot, with practical exposure to API integration, application development, database-backed workflows, and software problem solving.",
  },
};

export const skillGroups = [
  {
    category: "Languages",
    items: ["Java", "Dart", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST API", "Spring Security"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Android"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Concepts",
    items: ["OOP", "DSA", "REST APIs", "JWT"],
  },
];
export const experience = [
  {
    company: "RGreen Technologies",
    role: "Flutter & Spring Boot Developer Intern",
    duration: "December – June · 6 Months",
    location: "Madurai, Tamil Nadu",
    points: [
      "Worked as a Flutter and Spring Boot Developer Intern on application development tasks.",
      "Contributed to mobile application development using Flutter and Dart.",
      "Worked with Spring Boot for backend application development and REST API integration.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Spring Boot",
    ],
  },
];

export const projects = [
  {
    title: "MediaJungle",

    subtitle: "Full-Stack OTT Streaming Platform",

    description:
      "A full-stack OTT streaming platform built with Flutter and Spring Boot for Android Mobile and TV experiences.",

    category: "Full Stack",

    overview:
      "Built a cross-platform OTT application with a Flutter client and Spring Boot backend, integrating authentication, subscriptions, payments, and notifications.",

    backend: [
      "10+ RESTful backend services",
      "JWT-based authentication",
      "Spring Security",
      "Role-Based Access Control",
      "PostgreSQL",
    ],

    platforms: [
      "Flutter",
      "Android Mobile",
      "Android TV",
      "Fire TV",
      "Custom TV navigation",
    ],

    features: [
      "Video player",
      "Playlists",
      "Watchlist",
      "Subscriptions",
      "Payments",
      "Notifications",
    ],

    stack: [
      "Flutter",
      "Dart",
      "Java",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "JWT",
      "Spring Security",
      "RBAC",
      "Git",
    ],

    github: "",
    demo: "",
    image: null,
    featured: true,
  },

  {
    title: "Movie Tickets Booking System",

    subtitle: "Movie Tickets Booking Platform",

    description:
      "A web-based movie ticket booking platform for browsing movies, selecting seats, managing bookings, and handling tickets through user and admin portals.",

    category: "Web Application",

    overview:
      "A web-based movie ticket booking platform with separate user and admin experiences, covering movie browsing, seat selection, booking confirmation, ticket cancellation, and administrative management.",

    platforms: [
      "Web Application",
      "User Portal",
      "Admin Portal",
    ],

    backend: [
      "PHP",
      "MySQL",
      "MySQLi",
      "Session authentication",
    ],

    features: [
      "Movie browsing",
      "Trailer links",
      "Seat selection",
      "Booking confirmation",
      "Payment option flow",
      "My bookings",
      "Ticket cancellation",
      "Admin dashboard",
    ],

    stack: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQLi",
      "Sessions",
    ],

    github: "",
    demo: "",
    image: null,
    featured: false,
  },

  {
    title: "Online Book Store",

    subtitle: "Online Book Store",

    description:
      "A web-based bookstore where users can discover books, search by title or author, manage a wishlist and cart, and place orders, supported by an admin management system.",

    category: "Web Application",

    overview:
      "Developed an online bookstore platform with customer and admin modules. Customers can register, log in, search books, browse categories, manage cart and wishlist items, update profiles, place orders, and contact the store. Administrators can manage books, orders, users, and messages.",

    platforms: [
      "Web Application",
      "Customer Portal",
      "Admin Portal",
    ],

    backend: [
      "PHP",
      "MySQL",
      "XAMPP",
    ],

    features: [
      "User Registration & Login",
      "Book Search",
      "Book Categories",
      "Shopping Cart",
      "Wishlist",
      "Checkout",
      "Order Details",
      "Admin Dashboard",
      "Book Management",
      "Order Management",
      "User Accounts",
      "Customer Messages",
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "XAMPP",
    ],

    role: "Full-stack web application development",

    status: "Academic Project",

    github: "",
    demo: "",
    image: null,
    featured: false,
  },
];
export const contact = {
  email: "snjeevikesh@gmail.com",
  github: "https://github.com/JEEVI-003",
  linkedin: "https://linkedin.com/in/jeevikesh-s-n",
  phone: "+91 8667684249",
};
