
import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  {
    icon: "✦",
    title: "Academics",
    description:
      "Improve your study habits, prepare for college exams and manage academic responsibilities with practical advice.",
    href: "/academics",
  },
  {
    icon: "↗",
    title: "Career",
    description:
      "Learn how to create your first resume, prepare for internships and develop skills for future career opportunities.",
    href: "/career",
  },
  {
    icon: "◈",
    title: "Money",
    description:
      "Understand student budgeting, track monthly expenses and build better money-management habits during college.",
    href: "/money",
  },
  {
    icon: "◇",
    title: "College Life",
    description:
      "Explore college essentials, everyday student challenges and useful tips for adjusting to campus life.",
    href: "/college-life",
  },
  {
    icon: "◷",
    title: "Productivity",
    description:
      "Manage deadlines, overcome procrastination and organize your time between classes, assignments and exams.",
    href: "/productivity",
  },
  {
    icon: "⌘",
    title: "Student Tools",
    description:
      "Use free calculators and planning tools to track CGPA, check attendance and organize study sessions.",
    href: "/tools",
  },
];

const guides = [
  {
    category: "COLLEGE LIFE",
    title: "College Essentials Checklist for First-Year Students",
    description:
      "Prepare for your first year with a practical checklist covering everyday college essentials and important preparations.",
    href: "/college-life/college-essentials-checklist",
  },
  {
    category: "CAREER",
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "Learn how to highlight your education, projects and skills when creating your first internship resume.",
    href: "/career/resume-for-internship-no-experience",
  },
  {
    category: "ACADEMICS",
    title: "How to Study Effectively for College Exams",
    description:
      "Discover simple revision techniques, study planning strategies and practical ways to prepare for college exams.",
    href: "/academics/how-to-study-for-college-exams",
  },
  {
    category: "MONEY",
    title: "Student Budget Guide: Managing Monthly Expenses",
    description:
      "Learn how to plan monthly expenses, understand spending habits and make better financial decisions as a student.",
    href: "/money/student-budget-guide",
  },
  {
    category: "PRODUCTIVITY",
    title: "How to Stop Procrastinating as a College Student",
    description:
      "Explore practical ways to start assignments earlier, manage distractions and avoid unnecessary last-minute stress.",
    href: "/productivity/how-to-stop-procrastinating",
  },
];

const tools = [
  {
    icon: "∑",
    title: "CGPA Calculator",
    description:
      "Calculate your CGPA using semester grades and credits to better understand your academic progress.",
    href: "/tools/cgpa-calculator",
  },
  {
    icon: "%",
    title: "Attendance Calculator",
    description:
      "Check your attendance percentage and estimate how many classes you need to attend to reach your target.",
    href: "/tools/attendance-calculator",
  },
  {
    icon: "✓",
    title: "Study Planner",
    description:
      "Organize study sessions, assignments and exam preparation into a manageable schedule.",
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

            <h1>
              Your <span>College Survival Guide.</span>
              <br />
              Everything you need in one place.
            </h1>

            <p className="hero-description">
              Explore practical college guides, student tools and
              straightforward advice for academics, internships,
              budgeting, productivity and everyday college life.
              Find useful resources to help you make informed
              decisions throughout your college journey.
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
              College comes with different challenges, from preparing
              for exams to managing money and finding internships.
              Browse our student resources by topic and find
              guidance relevant to your current needs.
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
              Read practical guides covering common college
              challenges. Whether you're preparing for an exam,
              creating your first resume or planning your monthly
              budget, start with a topic that matters to you.
            </p>
          </div>

          <div className="guide-grid">
            {guides.map((guide, index) => (
              <Link
                href={guide.href}
                className={`guide-card ${
                  index === 0 ? "guide-featured" : ""
                }`}
                key={guide.href}
              >
                <span className="guide-category">
                  {guide.category}
                </span>

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
                Save time on common academic tasks with simple
                student tools. Calculate your CGPA, understand
                your attendance and organize study sessions
                without complicated setup.
              </p>
            </div>

            <div className="tools-grid">
              {tools.map((tool) => (
                <Link
                  href={tool.href}
                  className="tool-card"
                  key={tool.title}
                >
                  <span className="tool-icon">{tool.icon}</span>

                  <h3>{tool.title}</h3>

                  <p>{tool.description}</p>

                  <span className="tool-link">
                    Open tool →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Helpful Content */}
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GETTING STARTED</p>

              <h2>Build better habits during college.</h2>
            </div>

            <p>
              Small improvements in planning, studying and
              everyday decision-making can make college
              responsibilities easier to manage.
            </p>
          </div>

          <div className="guide-grid">
            <div className="guide-card">
              <h3>Plan your academic week</h3>

              <p>
                Review your class schedule, assignment deadlines
                and upcoming exams at the beginning of each week.
                Set aside time for revision so that important
                work doesn't pile up at the last minute.
              </p>
            </div>

            <div className="guide-card">
              <h3>Prepare for future opportunities</h3>

              <p>
                Keep track of useful skills, academic projects
                and extracurricular activities. These experiences
                can help you build a stronger resume when
                applying for internships.
              </p>
            </div>

            <div className="guide-card">
              <h3>Manage your daily responsibilities</h3>

              <p>
                Balance academics with personal commitments by
                setting realistic priorities. Tracking expenses,
                organizing tasks and maintaining a manageable
                routine can reduce unnecessary stress.
              </p>
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
              Explore helpful college guides, academic calculators
              and practical resources designed around everyday
              student needs.
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
              Practical resources for academics, career planning,
              budgeting and everyday college life.
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
