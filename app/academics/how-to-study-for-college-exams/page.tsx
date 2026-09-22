import {
  articleSchema,
  faqSchema,
} from "@/lib/structured-data";

import Link from "next/link";

export const metadata = {
  title: "How to Study Effectively for College Exams",
  description:
    "Learn how to study effectively for college exams with practical revision strategies, study planning techniques, active recall, practice questions and exam preparation tips.",
  alternates: {
    canonical: "/academics/how-to-study-for-college-exams",
  },
};

const studyMethods = [
  {
    title: "Active Recall",
    description:
      "Instead of repeatedly reading your notes, close them and try to remember the important concepts yourself.",
  },
  {
    title: "Spaced Revision",
    description:
      "Review difficult topics multiple times over several days instead of trying to learn everything in one long session.",
  },
  {
    title: "Practice Questions",
    description:
      "Use previous questions, sample problems and exercises to test whether you can actually apply what you studied.",
  },
  {
    title: "Teach the Concept",
    description:
      "Explain a topic in simple words as if you were teaching someone else. This can reveal gaps in your understanding.",
  },
];

const studyPlan = [
  "List every subject and the topics you need to cover.",
  "Identify the topics you understand least.",
  "Break large topics into smaller study sessions.",
  "Schedule regular revision instead of relying on one final session.",
  "Practice questions after learning each major topic.",
  "Review mistakes and weak areas before the exam.",
];

export default function StudyForCollegeExamsPage() {
  const article = articleSchema({
    title: "How to Study Effectively for College Exams",
    description:
      "Practical study techniques for college exams including active recall, spaced revision, practice questions, focused study sessions and exam preparation.",
    url: "https://college-survival-guide-plum.vercel.app/academics/how-to-study-for-college-exams",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    image:
      "https://college-survival-guide-plum.vercel.app/images/study-for-college-exams.png",
  });

  const faq = faqSchema([
    {
      question: "How many hours should I study for college exams?",
      answer:
        "The ideal amount varies by subject and student. Consistent focused study sessions are generally more useful than simply counting hours.",
    },
    {
      question: "What is the most effective way to study for exams?",
      answer:
        "Active recall, spaced revision and practice questions are useful techniques for remembering and applying information.",
    },
    {
      question: "How should I prepare during the final week before exams?",
      answer:
        "Focus on reviewing important concepts, practicing questions, identifying weak areas and avoiding learning large amounts of completely new material at the last minute.",
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
          <p className="eyebrow">ACADEMICS</p>

          <h1>
            How to Study Effectively
            <br />
            <span>for College Exams</span>
          </h1>

          <p className="article-intro">
            Practical study and revision strategies to help you prepare for
            college exams without depending entirely on last-minute studying.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="article-page">
        <div className="article-content">
          <div className="article-meta">
            <span>ACADEMICS</span>
            <span>•</span>
            <span>EXAM PREPARATION</span>
          </div>

          <p className="article-lead">
            Studying effectively is less about spending every available hour
            with a textbook and more about using your study time deliberately.
            A good approach combines learning, active practice and regular
            revision.
          </p>

          <p>
            Whether you have several weeks before your exams or only a limited
            amount of time left, the basic process is similar: understand what
            you need to learn, prioritize it, practice recalling it and review
            the areas where you struggle.
          </p>

          {/* Quick start */}
          <div className="article-callout">
            <p className="eyebrow">QUICK START</p>

            <h2>If you don't know where to begin</h2>

            <ul>
              <li>Write down every subject you need to prepare.</li>
              <li>List the important topics for each subject.</li>
              <li>Mark the topics you find difficult.</li>
              <li>Start with a realistic study schedule.</li>
              <li>Test yourself instead of only rereading notes.</li>
            </ul>
          </div>

          {/* Study methods */}
          <section className="article-section">
            <p className="eyebrow">STUDY METHODS</p>

            <h2>Use study methods that require active thinking.</h2>

            <p>
              Simply reading the same material repeatedly can create a feeling
              of familiarity without guaranteeing that you can recall or apply
              the information later. Try methods that make you retrieve and use
              what you have learned.
            </p>

            <div className="related-grid">
              {studyMethods.map((method) => (
                <div className="related-card" key={method.title}>
                  <span>METHOD</span>

                  <h3>{method.title}</h3>

                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Planning */}
          <section className="article-section">
            <p className="eyebrow">PLANNING</p>

            <h2>Create a realistic study plan.</h2>

            <p>
              A study plan does not need to divide every minute of your day.
              Its main purpose is to make your workload visible and give you a
              clear idea of what you should work on next.
            </p>

            <ul className="checklist">
              {studyPlan.map((item) => (
                <li key={item}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Pomodoro */}
          <section className="article-section">
            <h2>Try focused study sessions.</h2>

            <p>
              If you find it difficult to concentrate for long periods, divide
              your study time into focused sessions. For example, you could
              study for around 25–50 minutes and then take a short break.
            </p>

            <p>
              The exact duration is less important than having a clear period
              where you focus on one task instead of constantly switching
              between apps, notifications and unrelated work.
            </p>
          </section>

          {/* Notes */}
          <section className="article-section">
            <h2>Make your notes useful for revision.</h2>

            <p>
              Your notes should make it easier to review a topic later. Avoid
              rewriting every sentence from a textbook or lecture.
            </p>

            <ul>
              <li>Summarize important concepts in your own words.</li>
              <li>Highlight definitions, formulas and important examples.</li>
              <li>Write down questions you still cannot answer.</li>
              <li>Keep difficult topics easy to find for later revision.</li>
            </ul>
          </section>

          {/* Practice */}
          <section className="article-section">
            <h2>Practice before you think you're ready.</h2>

            <p>
              One of the simplest ways to find gaps in your preparation is to
              attempt questions without looking at your notes first.
            </p>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>Attempt previous exam questions</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Solve textbook exercises</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Practice formulas without looking them up</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Explain difficult concepts without your notes</span>
              </li>
            </ul>
          </section>

          {/* Last week */}
          <section className="article-section">
            <h2>What to do during the final week.</h2>

            <p>
              As the exam gets closer, shift more of your time toward active
              revision and practice instead of trying to learn everything from
              scratch.
            </p>

            <ul>
              <li>Review your weakest topics first.</li>
              <li>Practice questions under realistic conditions.</li>
              <li>Review important formulas and definitions.</li>
              <li>Use your mistakes to decide what to revise next.</li>
              <li>Avoid sacrificing all of your sleep for extra study hours.</li>
            </ul>
          </section>

          {/* Common mistakes */}
          <section className="article-section">
            <h2>Common Study Mistakes to Avoid</h2>

            <ul>
              <li>Waiting until the night before the exam to begin.</li>
              <li>Only rereading notes without testing yourself.</li>
              <li>Spending too much time making notes look perfect.</li>
              <li>Studying one subject while ignoring the others.</li>
              <li>Keeping your phone and notifications constantly available.</li>
              <li>Ignoring topics you find difficult.</li>
            </ul>
          </section>

          {/* Exam checklist */}
          <section className="article-section">
            <h2>College Exam Preparation Checklist</h2>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>I know which topics are included in the exam.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have identified my weakest topics.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have practiced questions from important topics.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have reviewed my mistakes.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I know the exam date, time and location.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have prepared the materials I need for exam day.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>College Exam Study FAQs</h2>

            <div className="faq-item">
              <h3>How many hours should I study for college exams?</h3>

              <p>
                There is no single number that works for every student. The
                useful measure is whether your study sessions are helping you
                understand, recall and apply the material while leaving enough
                time for sleep and other responsibilities.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is studying the night before an exam effective?</h3>

              <p>
                Last-minute revision can be useful for reviewing material you
                already know, but relying entirely on one night leaves little
                time for identifying and fixing gaps in understanding.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is the best way to remember what I study?</h3>

              <p>
                Active recall, spaced revision and practice questions are
                commonly used approaches for strengthening your ability to
                retrieve information.
              </p>
            </div>
          </section>

          {/* Related */}
          <section className="article-related">
            <p className="eyebrow">KEEP READING</p>

            <h2>More College Survival Guides</h2>

            <div className="related-grid">
              <Link
                href="/productivity/how-to-stop-procrastinating"
                className="related-card"
              >
                <span>PRODUCTIVITY</span>

                <h3>How to Stop Procrastinating as a College Student</h3>

                <p>
                  Simple techniques for getting assignments and studying done
                  without last-minute stress.
                </p>
              </Link>

              <Link
                href="/career/resume-for-internship-no-experience"
                className="related-card"
              >
                <span>CAREER</span>

                <h3>How to Make a Resume for an Internship With No Experience</h3>

                <p>
                  Build your first internship resume using your projects,
                  education and skills.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}