import styles from './Experience.module.css';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "DiscountBuddy (Client Project)",
    duration: "Dec 2025 – Present",
    achievements: [
      "Developed a restaurant discovery and live deals platform with QR-based offer redemption and table reservations",
      "Built role-based dashboards using Django and PostgreSQL for efficient restaurant management",
      "Managed deployment and server hosting on Amazon Web Services, including application setup, updates, and production maintenance"
    ]
  },
  {
    role: "Flutter Developer",
    company: "MetaNinza",
    duration: "Aug 2025 – Present",
    achievements: [
      "Developed 16Arena, a Flutter-based tournament management application",
      "Implemented features like tournament management, shop module, real-time chat, and push notifications",
      "Built interconnected systems for organizations, teams, and users with real-time data handling"
    ]
  },
  {
    role: "Flutter Developer",
    company: "16Score",
    duration: "Apr 2025 – Present",
    achievements: [
      "Contributed to 16Score, an esports platform providing live scores and match statistics",
      "Developed Flutter features for live score updates, match stats, and API integrations",
      "Improved UI responsiveness and application performance"
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bluexkye Softwares",
    duration: "Feb 2025 – Aug 2025",
    achievements: [
      "Worked with React, Django, MySQL, and PostgreSQL to build web applications",
      "Developed frontend components, backend APIs, and database models",
      "Gained experience in REST API integration and full-stack development workflows"
    ]
  }
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
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
