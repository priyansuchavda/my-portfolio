import styles from './Experience.module.css';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "16Arena Labs",
    duration: "Apr 2026 – Present · 1 mo",
    achievements: [
      "Leading the development of the 16Arena ecosystem, focusing on scalable tournament management systems",
      "Architecting real-time features and optimizing application performance across mobile and web platforms",
      "Collaborating with cross-functional teams to deliver high-quality features and improve user engagement"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "DiscountBuddy (Freelancing)",
    duration: "Dec 2025 – Present · 5 mos",
    achievements: [
      "Developed a restaurant discovery and live deals platform with QR-based offer redemption and table reservations",
      "Built role-based dashboards using Django and PostgreSQL for efficient restaurant management",
      "Managed deployment and server hosting on Amazon Web Services, including application setup, updates, and production maintenance"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "16score · Full-time",
    duration: "Apr 2025 – Present · 1 yr 1 mo",
    achievements: [
      "Contributed to 16Score, an esports platform providing live scores and match statistics",
      "Developed end-to-end features for live score updates, match stats, and complex API integrations",
      "Improved UI responsiveness and backend application performance"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "MetaNinza · Full-time",
    duration: "Aug 2025 – Apr 2026 · 9 mos",
    achievements: [
      "Developed 16Arena, a Flutter-based tournament management application with a Django backend",
      "Implemented features like tournament management, shop module, real-time chat, and push notifications",
      "Built interconnected systems for organizations, teams, and users with real-time data handling"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Bluexkye",
    duration: "Feb 2025 – Apr 2025 · 3 mos",
    achievements: [
      "Worked with React, Django, MySQL, and PostgreSQL to build web applications",
      "Developed frontend components, backend APIs, and database models",
      "Gained experience in REST API integration and full-stack development workflows"
    ]
  }
];




const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>

        {experiences.map((exp, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.duration}>{exp.duration}</span>
              </div>
              <h4 className={styles.company}>{exp.company}</h4>
              <ul className={styles.achievements}>
                {exp.achievements.map((item, iIndex) => (
                  <li key={iIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
