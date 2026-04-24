"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  features?: string[];
}

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink, features }: ProjectProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className={styles.card}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {features && (
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">GitHub</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
