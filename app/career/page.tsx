
import Link from "next/link";

const guides = [
  {
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "Learn what to include in your first internship resume, even if you have no previous work experience.",
    href: "/career/resume-for-internship-no-experience",
  },
];

export const metadata = {
  title: "College Career & Internship Guides",
  description:
    "Explore internship resume tips, project ideas, GitHub portfolio advice and practical career preparation guides for college students.",
  alternates: {
    canonical: "/career",
  },
};

export default function CareerPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">CAREER</p>

        <h1>
          Start building
          <br />
          <span>your career early.</span>
        </h1>

        <p>
          Discover practical guidance on internship applications,
          resumes, college projects, GitHub portfolios and preparing
          for your first professional opportunity.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAREER GUIDES</p>
            <h2>Turn college experience into career opportunities.</h2>
          </div>

          <p>
            You can begin preparing for internships before you have
            formal work experience. Start with the skills you are
            learning, the projects you have completed and the
            opportunities you want to pursue.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">CAREER</span>

              <h3>{guide.title}</h3>

              <p>{guide.description}</p>

              <span className="guide-link">
                Read guide <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">START HERE</p>

          <h2>
            You don't need years of experience to start building a career.
          </h2>

          <p>
            College projects, coursework, technical skills,
            volunteering and personal projects can help demonstrate
            your abilities. Describe what you built, which tools you
            used, what your responsibilities were and what you learned.
            Keep your claims accurate and focus on evidence of your skills.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAREER PREPARATION</p>
            <h2>Three practical steps to get started.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Build relevant projects</h3>
            <p>
              Choose projects that demonstrate skills related to the
              internships you want. Document your work and explain
              the problem your project solves.
            </p>
          </div>

          <div className="guide-card">
            <h3>Create a clear resume</h3>
            <p>
              Include your education, relevant skills, projects and
              achievements. Use simple formatting and tailor your
              resume to each suitable opportunity.
            </p>
          </div>

          <div className="guide-card">
            <h3>Prepare your portfolio</h3>
            <p>
              Keep your GitHub repositories organised, add useful
              README files and make it easy for recruiters to
              understand your contributions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
