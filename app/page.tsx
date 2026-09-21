import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  {
    icon: "✦",
    title: "Academics",
    description: "Study smarter, prepare effectively, and handle college exams.",
    href: "/academics",
  },
  {
    icon: "↗",
    title: "Career",
    description: "Build your resume, find internships, and prepare for your career.",
    href: "/career",
  },
  {
    icon: "◈",
    title: "Money",
    description: "Learn to manage your monthly expenses and save as a student.",
    href: "/money",
  },
  {
    icon: "◇",
    title: "College Life",
    description: "Navigate everyday college life with practical guides and checklists.",
    href: "/college-life",
  },
  {
    icon: "◷",
    title: "Productivity",
    description: "Manage your time, beat procrastination, and stay organized.",
    href: "/productivity",
  },
  {
    icon: "⌘",
    title: "Student Tools",
    description: "Useful calculators and simple tools built for college students.",
    href: "/tools",
  },
];

const guides = [
  {
    category: "COLLEGE LIFE",
    title: "College Essentials Checklist for First-Year Students",
    description:
      "A practical checklist of things to prepare before starting college.",
    href: "/college-life/college-essentials-checklist",
  },
  {
    category: "CAREER",
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "Learn what to include in your first internship resume, even without work experience.",
    href: "/career/resume-for-internship-no-experience",
  },
  {
    category: "ACADEMICS",
    title: "How to Study Effectively for College Exams",
    description:
      "Simple strategies for planning your revision and preparing for exams.",
    href: "/academics/how-to-study-for-college-exams",
  },
  {
    category: "MONEY",
    title: "Student Budget Guide: Managing Monthly Expenses",
    description:
      "Practical ways to plan your spending and manage a student budget.",
    href: "/money/student-budget-guide",
  },
  {
    category: "PRODUCTIVITY",
    title: "How to Stop Procrastinating as a College Student",
    description:
      "Simple techniques to get assignments and studying done without last-minute stress.",
    href: "/productivity/how-to-stop-procrastinating",
  },
];

const tools = [
  {
    icon: "∑",
    title: "CGPA Calculator",
    description: "Calculate your CGPA quickly using your semester grades.",
    href: "/tools/cgpa-calculator",
  },
  {
    icon: "%",
    title: "Attendance Calculator",
    description: "Find out how many classes you need to attend or can miss.",
    href: "/tools/attendance-calculator",
  },
  {
    icon: "✓",
    title: "Study Planner",
    description:
      "Plan your study sessions around classes, assignments, and exams.",
    href: "/tools/study-planner",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <p className="eyebrow">THE COLLEGE SURVIVAL GUIDE</p>

            {/* <h1>
              College doesn&apos;t come
              <br />
              with a <span>manual.</span>
            </h1> */}
            <h1>
              Your <span>College Survival Guide.</span>
              <br />
              Everything you need in one place.
            </h1>

            {/* <p className="hero-description">
              Practical guides, useful tools and simple advice to help you
              navigate college with confidence.
            </p> */}
            <p className="hero-description">
              Practical college guides, student tools and advice for academics,
              internships, budgeting, productivity and everyday college life.
            </p>

            <div className="hero-actions">
              <Link href="#guides" className="button button-primary">
                Explore Guides <span>→</span>
              </Link>

              <Link href="/tools" className="button button-secondary">
                Student Tools
              </Link>
            </div>
          </div>

          <div className="hero-bottom">
            <span>ACADEMICS</span>
            <span>CAREER</span>
            <span>MONEY</span>
            <span>COLLEGE LIFE</span>
            <span>PRODUCTIVITY</span>
          </div>
        </section>

        {/* Categories */}
        <section className="section categories-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Navigate your college life.</h2>
            </div>

            <p>
              Everything organized into simple sections so you can find what
              you need without digging through endless pages.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                href={category.href}
                className="category-card"
                key={category.href}
              >
                <span className="card-icon">{category.icon}</span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="card-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="section guides-section" id="guides">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STUDENT GUIDES</p>
              <h2>Answers to questions students actually ask.</h2>
            </div>

            <p>
              Straightforward guides designed around common college problems
              and searches.
            </p>
          </div>

          <div className="guide-grid">
            {guides.map((guide, index) => (
              <Link
                href={guide.href}
                className={`guide-card ${index === 0 ? "guide-featured" : ""}`}
                key={guide.href}
              >
                <span className="guide-category">{guide.category}</span>

                <h3>{guide.title}</h3>

                <p>{guide.description}</p>

                <span className="guide-link">
                  Read guide <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="tools-section">
          <div className="section tools-inner">
            <div className="section-heading tools-heading">
              <div>
                <p className="eyebrow">STUDENT TOOLS</p>
                <h2>Skip the calculations.</h2>
              </div>

              <p>
                Simple tools designed to give students quick answers without
                unnecessary complexity.
              </p>
            </div>

            <div className="tools-grid">
              {tools.map((tool) => (
                <Link
                  href={tool.href}
                  className={`tool-card ${tool.href === "#" ? "tool-disabled" : ""
                    }`}
                  key={tool.title}
                >
                  <span className="tool-icon">{tool.icon}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>

                  <span className="tool-link">
                    {tool.href === "#" ? "Coming soon" : "Open tool →"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-glow" />

          <div className="cta-content">
            <p className="eyebrow">ONE PLACE. LESS HASSLE.</p>

            <h2>Make college a little easier.</h2>

            <p>
              Guides, tools and practical advice — organized for students.
            </p>

            <Link href="#guides" className="button button-primary">
              Explore the Guide <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Link href="/" className="footer-brand">
              <span>✦</span> College Survival Guide
            </Link>

            <p>
              Practical resources for navigating college with a little less
              stress.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <Link href="/academics">Academics</Link>
              <Link href="/career">Career</Link>
              <Link href="/money">Money</Link>
            </div>

            <div>
              <h4>More</h4>
              <Link href="/college-life">College Life</Link>
              <Link href="/productivity">Productivity</Link>
              <Link href="/tools">Tools</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 College Survival Guide</span>
          <span>Built as an academic SEO project.</span>
        </div>
      </footer>
    </>
  );
}