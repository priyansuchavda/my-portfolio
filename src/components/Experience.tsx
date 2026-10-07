import styles from './Experience.module.css';

type ExperienceItem = {
  role: string;
  company: string;
  startDate: string; // YYYY-MM
  endDate: string | null; // YYYY-MM or null for Present
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "16Arena Labs",
    startDate: "2026-04",
    endDate: null,
    achievements: [
      "Leading the development of the 16Arena ecosystem, focusing on scalable tournament management systems",
      "Architecting real-time features and optimizing application performance across mobile and web platforms",
      "Collaborating with cross-functional teams to deliver high-quality features and improve user engagement"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "DiscountBuddy (Client Project)",
    startDate: "2025-12",
    endDate: null,
    achievements: [
      "Developed a restaurant discovery and live deals platform with QR-based offer redemption and table reservations",
      "Built role-based dashboards using Django and PostgreSQL for efficient restaurant management",
      "Managed deployment and server hosting on Amazon Web Services, including application setup, updates, and production maintenance"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "16score · Full-time",
    startDate: "2025-04",
    endDate: null,
    achievements: [
      "Contributed to 16Score, an esports platform providing live scores and match statistics",
      "Developed end-to-end features for live score updates, match stats, and complex API integrations",
      "Improved UI responsiveness and backend application performance"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "MetaNinza · Full-time",
    startDate: "2025-08",
    endDate: "2026-04",
    achievements: [
      "Developed 16Arena, a Flutter-based tournament management application with a Django backend",
      "Implemented features like tournament management, shop module, real-time chat, and push notifications",
      "Built interconnected systems for organizations, teams, and users with real-time data handling"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Bluexkye",
    startDate: "2025-02",
    endDate: "2025-04",
    achievements: [
      "Worked with React, Django, MySQL, and PostgreSQL to build web applications",
      "Developed frontend components, backend APIs, and database models",
      "Gained experience in REST API integration and full-stack development workflows"
    ]
  }
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseYearMonth(value: string) {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

function formatMonthYear(value: string) {
  const { year, month } = parseYearMonth(value);
  return `${MONTHS[month - 1]} ${year}`;
}

function formatDurationLength(startDate: string, endDate: string | null) {
  const start = parseYearMonth(startDate);
  const end = endDate
    ? parseYearMonth(endDate)
    : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

  let totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
  }
  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }
  return `${months} mo${months > 1 ? "s" : ""}`;
}

function formatDuration(startDate: string, endDate: string | null) {
  const startLabel = formatMonthYear(startDate);
  const endLabel = endDate ? formatMonthYear(endDate) : "Present";
  const length = formatDurationLength(startDate, endDate);
  return `${startLabel} – ${endLabel} · ${length}`;
}

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
                <span className={styles.duration}>
                  {formatDuration(exp.startDate, exp.endDate)}
                </span>
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
