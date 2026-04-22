"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import styles from "./Resume.module.css";

// Dynamically import react-pdf components with no SSR to avoid DOMMatrix error
const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), { ssr: false });

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWidth(window.innerWidth);

    // Import pdfjs only on client side
    import("react-pdf").then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
    });

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!isClient) return null;

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Resume</h2>
        <a
          href="/resume.pdf"
          download="Priyanshu_Chavda_Resume.pdf"
          className={styles.downloadBtn}
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </a>
      </div>

      <div className={styles.documentWrapper}>
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.document}
        >
          {numPages && Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className={styles.pageWrapper}>
              <Page
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                className={styles.page}
              />
            </div>
          ))}
        </Document>
      </div>

      <div className={styles.footer}>
        <a
          href="/resume.pdf"
          download="Priyanshu_Chavda_Resume.pdf"
          className={styles.downloadBtn}
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
