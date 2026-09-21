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
  title: "Career & Internship Guides for College Students",
  description:
    "Practical career advice for college students, including internship applications, resumes, GitHub profiles and early career preparation.",
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
          Practical guides for resumes, internships, projects, GitHub and
          preparing for your first professional opportunity.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAREER GUIDES</p>
            <h2>Turn college experience into career opportunities.</h2>
          </div>

          <p>
            Whether you're looking for your first internship or building your
            portfolio, start with practical steps you can actually follow.
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
            College projects, coursework, technical skills, volunteering and
            personal projects can all help demonstrate what you can do. Start
            building evidence of your skills before you start applying.
          </p>
        </div>
      </section>
    </main>
  );
}