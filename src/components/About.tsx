import Image from 'next/image';
import styles from './About.module.css';

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Worked With", value: "10+" },
  { label: "Hands-on Experience", value: "2+ Years" }
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.overview}>
            <p className={styles.overviewText}>
              I'm a Full Stack Developer passionate about building scalable mobile and web applications that solve real-world problems. I specialize in developing modern products using Flutter, Django, React, and REST APIs, with a strong focus on performance, clean architecture, and user experience.
            </p>
          </div>
          <p className={styles.text}>
            I have worked on diverse projects ranging from consumer mobile apps to business management systems, handling everything from frontend interfaces to backend APIs, deployment, and production releases.
          </p>
          <p className={styles.text}>
            My approach is centered around writing maintainable code, creating responsive and intuitive user interfaces, and delivering reliable solutions that provide real value.
          </p>
          <p className={styles.text}>
            Currently, I'm open to freelance opportunities and full-time roles where I can contribute, grow, and collaborate with talented teams.
          </p>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statNumber}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.profileWrapper}>
            <Image
              src="/profile.png"
              alt="Priyanshu Chavda"
              width={400}
              height={400}
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
