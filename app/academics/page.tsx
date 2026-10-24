
import Link from "next/link";

const guides = [
  {
    title: "How to Study Effectively for College Exams",
    description:
      "Learn practical study techniques, revision strategies and ways to prepare for college exams without last-minute stress.",
    href: "/academics/how-to-study-for-college-exams",
  },
];

export const metadata = {
  title: "College Study & Exam Guides",
  description:
    "Explore practical college study tips, exam preparation strategies, revision techniques and academic advice to help students study effectively.",
  alternates: {
    canonical: "/academics",
  },
};

export default function AcademicsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">ACADEMICS</p>

        <h1>
          Study smarter.
          <br />
          <span>Not harder.</span>
        </h1>

        <p>
          Discover practical study strategies, college exam preparation
          tips and academic guidance to help you manage coursework,
          revise effectively and feel more prepared for exams.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STUDENT GUIDES</p>
            <h2>Academic advice that actually helps.</h2>
          </div>

          <p>
            College often means balancing lectures, assignments,
            projects and exams. The right study routine can help you
            stay organised, understand difficult topics and avoid
            relying entirely on last-minute revision.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">ACADEMICS</span>

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
          <p className="eyebrow">STUDY SMARTER</p>

          <h2>Build a study routine you can maintain.</h2>

          <p>
            Start by listing your subjects, upcoming assignments and
            exam dates. Divide large topics into smaller tasks and
            schedule regular revision sessions. Practise recalling
            information without looking at your notes, solve relevant
            questions and review mistakes to identify topics that
            need more attention.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A BETTER APPROACH</p>
            <h2>Simple ways to improve your college study habits.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Plan your week</h3>
            <p>
              Set aside time for lectures, assignments and revision.
              A realistic weekly plan makes it easier to keep track
              of deadlines.
            </p>
          </div>

          <div className="guide-card">
            <h3>Study actively</h3>
            <p>
              Test yourself with practice questions, explain concepts
              in your own words and revisit topics you find difficult.
            </p>
          </div>

          <div className="guide-card">
            <h3>Review consistently</h3>
            <p>
              Revisit important concepts throughout the semester
              instead of trying to learn everything immediately
              before an exam.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
