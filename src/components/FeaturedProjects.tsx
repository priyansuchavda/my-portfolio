import ProjectCard from './ProjectCard';
import styles from './FeaturedProjects.module.css';

const featuredProjects = [
  {
    title: "DiscountBuddy (Client Project)",
    description: "A smart deals and savings app that helps users discover the best discounts, coupons, and offers from multiple brands and stores in one place.",
    tags: ["Flutter", "Django rest framework", "PostgreSQL", "AWS", "REST APIs", "App Deployment"],
    features: [
      "Developed a cross-platform mobile application using Flutter with Django REST Framework backend",
      "Contributed to backend development in Django, including API integration and data management",
      "Designed a clean and user-friendly UI for a smooth browsing experience",
      "Implemented user authentication, push notifications, and performance optimizations",
      "Integrated Firebase for push notifications and analytics on both backend and app side",
      "Contributed to AWS deployment, server hosting, and production environment management"
    ],
    liveLink: "https://play.google.com/store/apps/details?id=com.discountbuddy.app"
  },
  {
    title: "ChitChat (Personal Project)",
    description: "A real-time chat application designed for seamless and secure communication with a clean, minimal user experience.",
    tags: ["Flutter", "Django", "Django Channels", "JWT Authentication", "WebSockets", "REST APIs"],
    features: [
      "Developed a cross-platform mobile chat application using Flutter with a Django backend",
      "Implemented real-time messaging using WebSocket connections (Django Channels)",
      "Built JWT-based authentication for secure user access and session handling",
      "Designed and managed socket connection lifecycle, including connection handling and message broadcasting",
      "Created a simple, intuitive, and responsive UI focused on casual conversations",
      "Developed REST APIs for user management and chat-related operations"
    ]
  },
  {
    title: "InvoiceGen (Real-World Problem Solution)",
    description: "A custom invoice generation system built to solve inefficiencies in manual invoice creation for small businesses.",
    tags: ["Flutter", "PDF Generation"],
    features: [
      "Identified a real-world problem where business owners repeatedly created invoices manually using tools like Canva, leading to time loss and inconsistency",
      "Designed a reusable invoice template system with pre-filled company details and dynamic input fields",
      "Enabled one-click PDF generation and instant sharing functionality for faster client communication",
      "Automated repetitive workflow, reducing invoice creation time from minutes to seconds",
      "Built a clean and user-friendly interface requiring minimal user input"
    ]
  }
];

const companyProjects = [
  {
    title: "16Score",
    description: "Esports Live Score & Statistics Platform. A real-time esports companion app that delivers live match updates, player statistics, and performance insights.",
    tags: [
  "Flutter",
  "Dart",
  "REST APIs",
  "Firebase",
  "Push Notifications",
  "Analytics",
  "App Deployment"
],
    features: [
  "Built a tournament management system with bracket rendering, points table calculations, and match scheduling.",
  "Implemented real-time live scores and match updates using WebSocket technology.",
  "Developed analytics dashboards with performance graphs and historical statistics for teams and players.",
  "Integrated a news section with RSS feed synchronization, deep-linking, and a smooth swipe-based user interface.",
  "Redesigned the application with a modern premium UI, custom animations, and improved typography.",
  "Optimized app performance and navigation using GetX state management with efficient local caching."
],
    liveLink: "https://play.google.com/store/apps/details?id=com.bluexkye.sixteenscore"
  },
  {
    title: "16Arena",
    description: "Tournament Management System. A complete tournament platform for managing matches, leaderboards, and player participation.",
tags: [
  "Flutter",
  "Dart",
  "REST APIs",
  "Firebase",
  "Push Notifications",
  "Analytics",
  "App Deployment"
],
    features: [
      "Built a tournament management system with bracket generation, match scheduling, and leaderboard updates.",
      "Implemented real-time online status and chat synchronization using WebSocket technology.",
      "Integrated HTML5 games inside the app using WebView with session handling and score submission.",
      "Redesigned the app UI with a modern and responsive layout for better user experience.",
      "Improved app performance and navigation using GetX state management.",
      "Integrated monetization features such as offerwalls and wallet balance management."
    ],
    
    liveLink: "https://play.google.com/store/apps/details?id=com.sixteenarena.app"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>Personal projects and experiments</p>
      </div>
      <div className={styles.grid}>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className={styles.sectionHeader} style={{ marginTop: '4rem' }}>
        <h2 className={styles.sectionTitle}>Company Projects</h2>
        <p className={styles.sectionSubtitle}>Projects where I contributed as part of a team</p>
      </div>
      <div className={styles.grid}>
        {companyProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
