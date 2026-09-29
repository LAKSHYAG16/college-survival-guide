import { articleSchema, faqSchema } from "@/lib/structured-data";
import Link from "next/link";

export const metadata = {
  title: "How to Make a Resume for an Internship With No Experience",
  description:
    "Learn how to make a resume for an internship with no experience. See a practical resume sample, what to include, how to present projects and skills, and how to structure your first student resume.",
  alternates: {
    canonical: "/career/resume-for-internship-no-experience",
  },

  openGraph: {
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "A practical guide and resume sample for creating an internship resume when you have little or no professional experience.",
    url: "https://college-survival-guide-plum.vercel.app/career/resume-for-internship-no-experience",
    siteName: "College Survival Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://college-survival-guide-plum.vercel.app/images/resume-internship-no-experience.png",
        width: 1600,
        height: 900,
        alt: "How to make a resume for an internship with no experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "A practical guide and resume sample for creating an internship resume when you have little or no professional experience.",
    images: [
      "https://college-survival-guide-plum.vercel.app/images/resume-internship-no-experience.png",
    ],
  },
};

const resumeSections = [
  {
    title: "1. Contact Information",
    description:
      "Start your resume with the information an employer needs to contact you.",
    items: [
      "Full name",
      "Professional email address",
      "Phone number",
      "City and country",
      "LinkedIn profile if you have one",
      "GitHub or portfolio link if relevant",
    ],
  },
  {
    title: "2. Education",
    description:
      "As a college student, your education is one of the strongest sections you currently have.",
    items: [
      "Degree and specialization",
      "College or university name",
      "Expected graduation year",
      "CGPA or percentage if it is useful and reasonably strong",
      "Relevant coursework when appropriate",
    ],
  },
  {
    title: "3. Projects",
    description:
      "Projects are one of the best ways to demonstrate practical skills when you don't have professional experience.",
    items: [
      "Project name",
      "What the project does",
      "Technologies or tools used",
      "Your specific contribution",
      "Important results or features",
      "GitHub or live demo link when available",
    ],
  },
  {
    title: "4. Skills",
    description:
      "List skills that are relevant to the internship rather than creating a very long list of technologies.",
    items: [
      "Programming languages",
      "Frameworks and libraries",
      "Databases",
      "Development tools",
      "Machine learning or data skills",
      "Communication or other relevant professional skills",
    ],
  },
  {
    title: "5. Certifications & Achievements",
    description:
      "Include certifications, competitions, hackathons or other achievements that demonstrate relevant ability.",
    items: [
      "Relevant online certifications",
      "Hackathons",
      "Coding competitions",
      "Academic achievements",
      "Technical workshops",
      "Relevant extracurricular achievements",
    ],
  },
];

export default function ResumeInternshipPage() {
  const article = articleSchema({
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "Learn how to create a strong internship resume with no previous work experience, including a practical resume sample, education, projects, skills, certifications and achievements.",
    url: "https://college-survival-guide-plum.vercel.app/career/resume-for-internship-no-experience",
    datePublished: "2026-09-21",
    dateModified: "2026-09-29",
    image:
      "https://college-survival-guide-plum.vercel.app/images/resume-internship-no-experience.png",
  });

  const faq = faqSchema([
    {
      question: "Can I make a resume without work experience?",
      answer:
        "Yes. Students can use education, academic projects, technical skills, certifications, achievements and relevant activities to demonstrate their abilities.",
    },
    {
      question: "How long should a student resume be?",
      answer:
        "For most college students applying for internships, a concise one-page resume is usually sufficient.",
    },
    {
      question: "What should I put on my resume if I have no experience?",
      answer:
        "Focus on your education, projects, skills, certifications, achievements and other relevant experiences that demonstrate your ability to contribute.",
    },
    {
      question: "What should an internship resume look like with no experience?",
      answer:
        "A student internship resume can focus on education, relevant projects, technical skills, certifications and achievements instead of professional work experience.",
    },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq),
        }}
      />

      {/* Hero */}
      <section className="article-hero">
        <div className="article-hero-inner">
          <p className="eyebrow">CAREER</p>

          <h1>
            How to Make a Resume
            <br />
            <span>for an Internship With No Experience</span>
          </h1>

          <p className="article-intro">
            A practical guide to creating your first internship resume,
            including what to write when you don't have previous professional
            experience.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="article-page">
        <div className="article-content">
          <div className="article-meta">
            <span>CAREER</span>
            <span>•</span>
            <span>INTERNSHIP GUIDE</span>
          </div>

          <p className="article-lead">
            Not having professional experience does not mean you have nothing
            to put on a resume. As a college student, your education, projects,
            technical skills, coursework and extracurricular activities can
            demonstrate what you are capable of.
          </p>

          <p>
            The goal of your first resume is not to pretend that you have
            experience you don't have. Instead, organize the experience you
            already have in a way that makes your skills easy to understand.
          </p>

          {/* Quick structure */}
          <div className="article-callout">
            <p className="eyebrow">QUICK STRUCTURE</p>

            <h2>What should a student resume include?</h2>

            <ul>
              <li>Contact information</li>
              <li>Education</li>
              <li>Relevant projects</li>
              <li>Technical and professional skills</li>
              <li>Certifications or achievements</li>
              <li>Relevant extracurricular experience</li>
            </ul>
          </div>

          {/* Resume sample */}
          <section className="article-section">
            <h2>Resume Sample for an Internship With No Experience</h2>

            <p>
              If you are applying for your first internship, your resume does
              not need to contain previous employment. A simple one-page resume
              can use your education, projects, skills and achievements to show
              what you can contribute.
            </p>

            <p>
              The following is a general example. Replace the placeholder
              information with your own details and adjust the sections based
              on the internship you are applying for.
            </p>

            <div className="article-callout">
              <p className="eyebrow">SAMPLE RESUME</p>

              <h3>YOUR NAME</h3>

              <p>
                Computer Science Student
                <br />
                City, Country
                <br />
                email@example.com | +91 XXXXX XXXXX
                <br />
                LinkedIn | GitHub | Portfolio
              </p>

              <h3>EDUCATION</h3>

              <p>
                <strong>B.Tech in Computer Science Engineering</strong>
                <br />
                Your College / University
                <br />
                Expected Graduation: 2027
                <br />
                CGPA: X.XX / 10
              </p>

              <h3>SKILLS</h3>

              <p>
                <strong>Programming:</strong> Python, C++, Java
                <br />
                <strong>Web:</strong> HTML, CSS, JavaScript, React
                <br />
                <strong>Data / AI:</strong> Machine Learning, Pandas,
                NumPy
                <br />
                <strong>Tools:</strong> Git, GitHub, VS Code
              </p>

              <h3>PROJECTS</h3>

              <p>
                <strong>Student Expense Tracker</strong>
                <br />
                • Built a web application for tracking and categorizing
                monthly student expenses.
                <br />
                • Added expense categories, monthly summaries and local data
                storage.
                <br />
                • Used React and JavaScript to create the user interface.
              </p>

              <p>
                <strong>Academic Machine Learning Project</strong>
                <br />
                • Developed a machine learning model to solve a classification
                problem using a public dataset.
                <br />
                • Performed data preprocessing, feature preparation and model
                evaluation.
                <br />
                • Compared multiple models using appropriate evaluation
                metrics.
              </p>

              <h3>CERTIFICATIONS & ACHIEVEMENTS</h3>

              <p>
                • Relevant technical certification
                <br />
                • College hackathon participation
                <br />
                • Coding competition or academic achievement
              </p>
            </div>
          </section>

          {/* Sections */}
          {resumeSections.map((section) => (
            <section className="article-section" key={section.title}>
              <h2>{section.title}</h2>

              <p>{section.description}</p>

              <ul className="checklist">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Project writing */}
          <section className="article-section">
            <h2>How to Write Projects on Your Resume</h2>

            <p>
              When you don't have professional experience, your projects can
              provide evidence that you can actually apply what you have
              learned.
            </p>

            <p>
              Instead of simply writing the name of a project, explain what you
              built, which technologies you used and what you personally
              contributed.
            </p>

            <div className="article-callout">
              <p className="eyebrow">WEAK EXAMPLE</p>

              <h3>Expense Tracker - React</h3>

              <p>
                This tells the recruiter the project name and technology, but
                provides very little information about what you actually did.
              </p>

              <p className="eyebrow">STRONGER EXAMPLE</p>

              <h3>Student Expense Tracker</h3>

              <p>
                Built a web application for tracking monthly student expenses
                using React and JavaScript. Added expense categorization,
                monthly summaries and local data storage.
              </p>
            </div>

            <p>
              Whenever possible, describe your contribution using clear action
              words such as built, developed, implemented, analyzed, designed,
              automated or optimized.
            </p>
          </section>

          {/* ATS */}
          <section className="article-section">
            <h2>How to Make an Internship Resume ATS-Friendly</h2>

            <p>
              Many companies use applicant tracking systems to organize
              applications. A simple, text-based resume is generally easier
              for software and recruiters to process than a heavily designed
              document.
            </p>

            <ul>
              <li>Use clear section headings.</li>
              <li>Use standard job-related terminology.</li>
              <li>Include skills that actually match the internship.</li>
              <li>Avoid filling the resume with graphics or unnecessary icons.</li>
              <li>Keep formatting consistent throughout the document.</li>
              <li>Use a readable font and appropriate spacing.</li>
              <li>Save the resume in the format requested by the employer.</li>
            </ul>
          </section>

          {/* No experience */}
          <section className="article-section">
            <h2>What If You Have Absolutely No Experience?</h2>

            <p>
              That's normal for many first-year and second-year students.
              Instead of adding unrelated experience just to fill space, focus
              on things that demonstrate your ability to learn and apply
              knowledge.
            </p>

            <ul>
              <li>College projects</li>
              <li>Personal projects</li>
              <li>Coursework</li>
              <li>Hackathons</li>
              <li>Open-source contributions</li>
              <li>Relevant certifications</li>
              <li>Student organizations</li>
            </ul>

            <p>
              Even a small project can be useful if you clearly explain the
              problem, your contribution, the technologies used and the result.
            </p>
          </section>

          {/* Tailoring */}
          <section className="article-section">
            <h2>How to Tailor Your Resume to an Internship</h2>

            <p>
              You do not need to completely rewrite your resume for every
              application. Instead, compare the internship description with
              your existing skills and projects.
            </p>

            <ul>
              <li>Identify the main skills mentioned in the job description.</li>
              <li>Move your most relevant skills higher in the skills section.</li>
              <li>Highlight projects related to the internship.</li>
              <li>Use relevant terminology when it accurately describes your experience.</li>
              <li>Remove unrelated information when space is limited.</li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="article-section">
            <h2>Common Student Resume Mistakes</h2>

            <ul>
              <li>Making the resume unnecessarily long</li>
              <li>Listing every technology you've ever tried</li>
              <li>Using a generic objective paragraph</li>
              <li>Adding skills you cannot actually demonstrate</li>
              <li>Using an unprofessional email address</li>
              <li>Including irrelevant personal information</li>
              <li>
                Writing project descriptions without explaining your
                contribution
              </li>
              <li>Using inconsistent fonts, spacing or formatting</li>
              <li>Sending the same generic resume to every internship</li>
            </ul>
          </section>

          {/* One page */}
          <section className="article-section">
            <h2>Should a College Student's Resume Be One Page?</h2>

            <p>
              For most students applying for early internships, a focused
              one-page resume is enough. The goal is not to include everything
              you have ever done. The goal is to make the most relevant
              information easy to find.
            </p>

            <p>
              If you have several strong projects, achievements or substantial
              experience, the appropriate length can depend on the internship
              and your background. Prioritize relevance over simply filling
              space.
            </p>
          </section>

          {/* Related SEO links */}
          <section className="article-section">
            <h2>Prepare for Your Internship Application</h2>

            <p>
              Your resume is only one part of preparing for college and
              internship applications. You can also improve your study habits
              and manage your finances while preparing for your career.
            </p>

            <ul>
              <li>
                <Link href="/academics/how-to-study-for-college-exams">
                  Learn how to study effectively for college exams
                </Link>
              </li>

              <li>
                <Link href="/money/student-budget-guide">
                  Read the student budget guide for managing monthly expenses
                </Link>
              </li>

              <li>
                <Link href="/productivity/how-to-stop-procrastinating">
                  Learn how to stop procrastinating as a college student
                </Link>
              </li>
            </ul>
          </section>

          {/* Final checklist */}
          <section className="article-section">
            <h2>Final Resume Checklist</h2>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>Your contact information is correct</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Your education section is up to date</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Your projects explain what you actually built</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Your listed skills are relevant to the internship</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Your resume uses clear and consistent formatting</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>There are no spelling or formatting mistakes</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>The resume is easy to scan quickly</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>Internship Resume FAQs</h2>

            <div className="faq-item">
              <h3>Can I get an internship without previous experience?</h3>

              <p>
                Yes. Students can demonstrate relevant ability through
                projects, coursework, technical skills, competitions,
                certifications and other practical work.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long should a college student's resume be?</h3>

              <p>
                For a student applying for an early internship, a concise
                one-page resume is usually sufficient. Focus on information
                that is relevant to the position.
              </p>
            </div>

            <div className="faq-item">
              <h3>Should I include my CGPA on my resume?</h3>

              <p>
                It depends on the internship and your academic record. Include
                it when it is relevant or when the employer specifically asks
                for academic performance.
              </p>
            </div>

            <div className="faq-item">
              <h3>What should I put on my resume if I have no experience?</h3>

              <p>
                Focus on your education, projects, skills, certifications,
                achievements, coursework and other relevant experiences that
                demonstrate your ability to contribute.
              </p>
            </div>
          </section>

          {/* Related */}
          <section className="article-related">
            <p className="eyebrow">KEEP BUILDING</p>

            <h2>More College Guides</h2>

            <div className="related-grid">
              <Link
                href="/college-life/college-essentials-checklist"
                className="related-card"
              >
                <span>COLLEGE LIFE</span>

                <h3>College Essentials Checklist for First-Year Students</h3>

                <p>
                  Prepare for college with a practical first-year checklist.
                </p>
              </Link>

              <Link
                href="/productivity/how-to-stop-procrastinating"
                className="related-card"
              >
                <span>PRODUCTIVITY</span>

                <h3>How to Stop Procrastinating as a College Student</h3>

                <p>
                  Simple techniques for getting important work done on time.
                </p>
              </Link>

              <Link
                href="/money/student-budget-guide"
                className="related-card"
              >
                <span>MONEY</span>

                <h3>Student Budget Guide: Managing Monthly Expenses</h3>

                <p>
                  Learn how to organize monthly expenses and build a practical
                  student budget.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}