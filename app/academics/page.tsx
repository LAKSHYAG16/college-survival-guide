import Link from "next/link";
import type { Metadata } from "next";

const guides = [
  {
    title: "How to Study Effectively for College Exams",
    description:
      "Learn practical study techniques, revision strategies and ways to prepare for college exams without last-minute stress.",
    href: "/academics/how-to-study-for-college-exams",
  },
];

export const metadata: Metadata = {
  title: "College Study & Exam Guides",
  description:
    "Explore college study tips, exam preparation strategies, revision techniques and academic advice to improve your study routine and manage coursework.",
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
          Discover practical college study strategies, exam preparation
          tips and academic guidance to help you manage coursework,
          understand difficult topics and prepare confidently for exams.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STUDENT GUIDES</p>
            <h2>Academic advice that actually helps.</h2>
          </div>

          <p>
            College students often balance lectures, assignments,
            projects and examinations at the same time. Developing a
            consistent study routine can make these responsibilities
            easier to manage. Start with realistic goals, organize your
            workload and give yourself enough time to revise.
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
            Begin by listing your subjects, assignment deadlines and
            upcoming exams. Break large chapters into smaller tasks
            and decide what you want to accomplish during each study
            session. A clear plan helps you identify priorities and
            reduces the need for last-minute preparation.
          </p>

          <p>
            Active learning is another useful study habit. Test
            yourself with practice questions, explain concepts in your
            own words and review mistakes to understand where you need
            more practice. Revisit important topics regularly instead
            of relying entirely on rereading notes before an exam.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A BETTER APPROACH</p>
            <h2>Simple ways to improve your college study habits.</h2>
          </div>

          <p>
            Effective studying does not require a complicated routine.
            A few consistent habits can help you use your time more
            effectively throughout the semester.
          </p>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Plan your week</h3>
            <p>
              Set aside time for lectures, assignments and revision.
              Check upcoming deadlines and create a realistic weekly
              plan that leaves room for breaks.
            </p>
          </div>

          <div className="guide-card">
            <h3>Study actively</h3>
            <p>
              Use practice questions, flashcards and self-testing to
              check your understanding. Explaining a concept in your
              own words can help reveal gaps in your knowledge.
            </p>
          </div>

          <div className="guide-card">
            <h3>Review consistently</h3>
            <p>
              Revisit important concepts throughout the semester.
              Regular revision gives you opportunities to practise
              difficult topics before examination day.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">EXAM PREPARATION</p>

          <h2>How to prepare for college exams without cramming.</h2>

          <p>
            Start preparing by checking your syllabus and identifying
            the topics covered in the examination. Divide them into
            manageable sections and prioritize areas that need extra
            attention. Practise relevant questions and use previous
            mistakes to guide your revision.
          </p>

          <p>
            As the exam approaches, review key concepts and practise
            explaining them without relying on your notes. Keep your
            schedule realistic, get sufficient sleep and leave some
            time to revisit challenging material. If you need a more
            detailed approach, read our guide on{" "}
            <Link href="/academics/how-to-study-for-college-exams">
              how to study for college exams
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>

          <h2>College study FAQs</h2>

          <h3>How can I study effectively in college?</h3>
          <p>
            Set specific study goals, practise recalling information,
            solve relevant questions and review difficult concepts
            regularly. Choose methods that work for your subjects
            and learning needs.
          </p>

          <h3>When should I start preparing for college exams?</h3>
          <p>
            Start reviewing material throughout the semester whenever
            possible. The amount of preparation you need depends on
            the syllabus, exam schedule and your understanding of
            the subjects.
          </p>

          <h3>How can I manage assignments and exam preparation together?</h3>
          <p>
            List your deadlines, divide assignments into smaller
            tasks and schedule revision sessions in advance. Review
            your priorities regularly when deadlines overlap.
          </p>
        </div>
      </section>
    </main>
  );
}