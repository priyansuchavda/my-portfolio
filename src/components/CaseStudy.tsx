import Image from 'next/image';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>Case Study</span>
          <h2 className={styles.title}>Automating Invoice Creation for Small Businesses</h2>
          <div className={styles.content}>
            <h3>The Problem</h3>
            <p>
              Small business owners often rely on manual tools like Canva or Word to create invoices from scratch every time, 
              leading to repetitive work, inconsistent branding, and human errors in calculations.
            </p>
            <h3>The Solution</h3>
            <p>
              I built InvoiceGen — a lightweight system that eliminates repetitive work by automating the entire process. 
              With pre-filled templates and dynamic inputs, users can generate and share professional PDFs in seconds.
            </p>
            
            <div className={styles.impactGrid}>
              <div className={styles.impactItem}>
                <strong>Impact</strong>
                <p>Reduced invoice creation time from several minutes to a few seconds while improving consistency.</p>
              </div>
              <div className={styles.impactItem}>
                <strong>Tech Stack</strong>
                <p>Flutter, PDF Generation, Custom UI Engine</p>
              </div>
            </div>
          </div>
          <a href="/projects" className="btn btn-primary">View All Projects</a>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/invoice-gen-case-study.png" 
              alt="InvoiceGen Case Study Mockup" 
              width={600} 
              height={600}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
