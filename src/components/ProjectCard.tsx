"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

export interface PreviewImage {
  title: string;
  src: string;
}

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  compact?: boolean;
  previewImages?: PreviewImage[];
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
  features,
  compact,
  previewImages,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen || !previewImages) return;
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % previewImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, previewImages]);

  const currentPreview = previewImages ? previewImages[activeImageIndex] : null;

  return (
    <>
      <motion.div
        whileHover={compact ? undefined : { y: -10, scale: 1.02 }}
        className={`${styles.card} ${compact ? styles.compact : ''}`}
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
            {previewImages && previewImages.length > 0 && (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-sm"
              >
                View Preview
              </button>
            )}
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>}
            {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">GitHub</a>}
          </div>
        </div>
      </motion.div>

      {/* Clean Fullscreen Portal Lightbox */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && previewImages && currentPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.lightboxOverlay}
              onClick={() => setIsModalOpen(false)}
            >
              {/* Floating Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={styles.lightboxCloseBtn}
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              {/* Prev Navigation Arrow */}
              {previewImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);
                  }}
                  className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={26} />
                </button>
              )}

              {/* Main Image Container */}
              <div
                className={styles.lightboxContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.lightboxImageWrapper}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      style={{ position: 'relative', width: '100%', height: '100%' }}
                    >
                      <Image
                        src={currentPreview.src}
                        alt={currentPreview.title}
                        fill
                        className={styles.lightboxImage}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Next Navigation Arrow */}
              {previewImages.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev + 1) % previewImages.length);
                  }}
                  className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                  aria-label="Next image"
                >
                  <ChevronRight size={26} />
                </button>
              )}

              {/* Bottom Caption & Dot Navigation Bar */}
              <div
                className={styles.lightboxCaptionBar}
                onClick={(e) => e.stopPropagation()}
              >
                <span className={styles.lightboxTitle}>{currentPreview.title}</span>
                {previewImages.length > 1 && (
                  <div className={styles.lightboxDots}>
                    {previewImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`${styles.lightboxDot} ${idx === activeImageIndex ? styles.lightboxDotActive : ''}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
