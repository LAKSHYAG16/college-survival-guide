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
  title: "College Study & Exam Guides | College Survival Guide",
  description:
    "Practical study tips, exam preparation strategies and academic advice to help college students study effectively and improve their performance.",
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
          Practical study strategies, exam preparation tips and academic
          guidance designed for college students.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STUDENT GUIDES</p>
            <h2>Academic advice that actually helps.</h2>
          </div>

          <p>
            From exam preparation to improving your grades, find practical
            strategies you can use throughout college.
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
          <p className="eyebrow">QUICK TIP</p>

          <h2>
            Consistency beats last-minute studying.
          </h2>

          <p>
            Instead of waiting until exams are close, break your coursework
            into smaller study sessions throughout the semester. Regular
            revision makes it easier to identify weak topics before they
            become problems.
          </p>
        </div>
      </section>
    </main>
  );
}