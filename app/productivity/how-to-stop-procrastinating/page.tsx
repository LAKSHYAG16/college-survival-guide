import {
  articleSchema,
  faqSchema,
} from "@/lib/structured-data";

import Link from "next/link";

export const metadata = {
  title: "How to Stop Procrastinating as a College Student",
  description:
    "Learn how to stop procrastinating as a college student with practical techniques for starting assignments, studying consistently, managing distractions and meeting deadlines.",
};

const techniques = [
  {
    title: "Make the First Step Smaller",
    description:
      "Instead of telling yourself to finish an entire assignment, define the smallest useful action you can take, such as opening the document and writing the first heading.",
  },
  {
    title: "Use a Short Timer",
    description:
      "Commit to working for a short, defined period. Starting for 15 or 25 minutes can feel easier than committing to several hours.",
  },
  {
    title: "Remove Obvious Distractions",
    description:
      "Put your phone away, close unnecessary browser tabs and create an environment where the task you need to complete is easy to start.",
  },
  {
    title: "Define What 'Done' Means",
    description:
      "A vague task such as 'study physics' is difficult to start. A specific task such as 'solve questions 1–10' gives you a clear finish point.",
  },
];

const antiProcrastinationSteps = [
  "Choose one task instead of trying to work on everything at once.",
  "Break the task into a small first action.",
  "Set a realistic amount of time to work.",
  "Remove distractions before starting.",
  "Begin even if you don't feel completely motivated.",
  "Take a short break and decide what the next step is.",
];

export default function StopProcrastinatingPage() {
  const article = articleSchema({
    title: "How to Stop Procrastinating as a College Student",
    description:
      "Practical techniques for college students to reduce procrastination, start assignments earlier, manage distractions and build consistent study habits.",
    url: "https://college-survival-guide.vercel.app/productivity/how-to-stop-procrastinating",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
  });

  const faq = faqSchema([
    {
      question: "Why do college students procrastinate?",
      answer:
        "Procrastination can happen when a task feels difficult, unclear, boring or overwhelming. Distractions and poor planning can also make delaying work easier.",
    },
    {
      question: "How can I stop procrastinating on assignments?",
      answer:
        "Start by breaking the assignment into smaller tasks, choosing a specific starting time and removing obvious distractions.",
    },
    {
      question: "How can I become more consistent with studying?",
      answer:
        "Use a realistic schedule, study in focused sessions, reduce distractions and focus on completing small planned tasks consistently.",
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
          <p className="eyebrow">PRODUCTIVITY</p>

          <h1>
            How to Stop Procrastinating
            <br />
            <span>as a College Student</span>
          </h1>

          <p className="article-intro">
            Practical techniques for starting assignments, studying
            consistently, managing distractions and getting important work
            finished before the deadline.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="article-page">
        <div className="article-content">
          <div className="article-meta">
            <span>PRODUCTIVITY</span>
            <span>•</span>
            <span>COLLEGE STUDENT GUIDE</span>
          </div>

          <p className="article-lead">
            Procrastination is easy to fall into when a task feels difficult,
            boring, unclear or overwhelming. The solution is not always to
            simply "try harder." Making the task easier to start can be much
            more practical.
          </p>

          <p>
            College can make this especially difficult because assignments,
            studying, projects and personal responsibilities often compete for
            the same limited time. A simple system can help you move from
            thinking about a task to actually starting it.
          </p>

          {/* Quick start */}
          <div className="article-callout">
            <p className="eyebrow">START NOW</p>

            <h2>When you're already procrastinating</h2>

            <ul>
              <li>Pick one task.</li>
              <li>Put your phone away.</li>
              <li>Choose the smallest possible first step.</li>
              <li>Set a short timer.</li>
              <li>Start before you feel completely ready.</li>
            </ul>
          </div>

          {/* Why */}
          <section className="article-section">
            <p className="eyebrow">UNDERSTAND IT</p>

            <h2>Why do college students procrastinate?</h2>

            <p>
              Procrastination does not always mean that you are unwilling to
              work. A task can be difficult to start because it feels too large,
              unclear, unpleasant or because there are easier distractions
              available.
            </p>

            <p>
              Identifying what makes a task difficult to start can help you
              choose a more practical solution.
            </p>
          </section>

          {/* Techniques */}
          <section className="article-section">
            <p className="eyebrow">TECHNIQUES</p>

            <h2>Simple ways to make starting easier.</h2>

            <div className="related-grid">
              {techniques.map((technique) => (
                <div className="related-card" key={technique.title}>
                  <span>TECHNIQUE</span>

                  <h3>{technique.title}</h3>

                  <p>{technique.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Break down */}
          <section className="article-section">
            <h2>Break large assignments into smaller tasks.</h2>

            <p>
              "Finish my project" is a large and vague task. It becomes easier
              to act when you turn it into specific steps.
            </p>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>Read the assignment requirements.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Create the project structure.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Complete the first section.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Review what is still missing.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Finish and check the final submission.</span>
              </li>
            </ul>
          </section>

          {/* Motivation */}
          <section className="article-section">
            <h2>Don't wait for motivation to appear.</h2>

            <p>
              Motivation can change from day to day. Building a habit around
              starting a task can reduce how much you depend on feeling
              motivated before doing the work.
            </p>

            <p>
              Instead of asking yourself whether you feel like studying, decide
              what your next small action is and start with that.
            </p>
          </section>

          {/* Environment */}
          <section className="article-section">
            <h2>Design your environment for fewer distractions.</h2>

            <p>
              Your environment can make some behaviors easier and others more
              difficult. Before starting an important task, remove the most
              obvious sources of interruption.
            </p>

            <ul>
              <li>Put your phone somewhere out of reach.</li>
              <li>Close unnecessary browser tabs.</li>
              <li>Turn off non-essential notifications.</li>
              <li>Keep the materials for your current task nearby.</li>
              <li>Use a consistent study location when possible.</li>
            </ul>
          </section>

          {/* Time blocking */}
          <section className="article-section">
            <h2>Give important tasks a specific time.</h2>

            <p>
              A task that exists only on your to-do list can easily be pushed
              to later. Assigning it a specific time gives you a clearer
              starting point.
            </p>

            <p>
              For example, instead of writing "study database systems," try
              "study database systems from 7:00–7:45 PM."
            </p>
          </section>

          {/* Recovery */}
          <section className="article-section">
            <h2>What to do after you've wasted a few hours.</h2>

            <p>
              Don't turn one unproductive afternoon into an entire unproductive
              day. The next useful action is still the next useful action,
              regardless of how late you start.
            </p>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>Stop judging the time you have already lost.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Choose the most important remaining task.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Make the first step very small.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Start a short focused session.</span>
              </li>
            </ul>
          </section>

          {/* Simple system */}
          <section className="article-section">
            <p className="eyebrow">A SIMPLE SYSTEM</p>

            <h2>Use this six-step anti-procrastination routine.</h2>

            <ul className="checklist">
              {antiProcrastinationSteps.map((step) => (
                <li key={step}>
                  <span className="check-icon">✓</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Common mistakes */}
          <section className="article-section">
            <h2>Common Productivity Mistakes</h2>

            <ul>
              <li>Creating an unrealistic daily schedule.</li>
              <li>Trying to complete several difficult tasks simultaneously.</li>
              <li>Spending more time planning than actually working.</li>
              <li>Keeping your phone next to you during focused work.</li>
              <li>Waiting for the perfect amount of motivation.</li>
              <li>Giving up completely after one unproductive day.</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="article-section">
            <h2>Procrastination Prevention Checklist</h2>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>I know what my most important task is.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have defined the first small step.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>My phone and unnecessary notifications are away.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have given the task a specific time.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I am focusing on starting rather than feeling motivated.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>Procrastination FAQs</h2>

            <div className="faq-item">
              <h3>How can I stop procrastinating on college assignments?</h3>

              <p>
                Start by breaking the assignment into smaller actions and
                choosing a specific time to begin. Removing obvious
                distractions can also make starting easier.
              </p>
            </div>

            <div className="faq-item">
              <h3>Why do I procrastinate even when I know a deadline is close?</h3>

              <p>
                A task can still feel difficult to start even when the deadline
                creates urgency. Breaking the task into smaller steps can make
                the immediate action more manageable.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is using a study timer helpful for procrastination?</h3>

              <p>
                A timer can make a task feel more manageable by giving you a
                defined period to focus. The exact duration can vary depending
                on the task and your ability to concentrate.
              </p>
            </div>
          </section>

          {/* Related */}
          <section className="article-related">
            <p className="eyebrow">KEEP READING</p>

            <h2>More College Survival Guides</h2>

            <div className="related-grid">
              <Link
                href="/academics/how-to-study-for-college-exams"
                className="related-card"
              >
                <span>ACADEMICS</span>

                <h3>How to Study Effectively for College Exams</h3>

                <p>
                  Practical strategies for planning revision and preparing for
                  college exams.
                </p>
              </Link>

              <Link
                href="/college-life/college-essentials-checklist"
                className="related-card"
              >
                <span>COLLEGE LIFE</span>

                <h3>College Essentials Checklist for First-Year Students</h3>

                <p>
                  A practical checklist for preparing for your first year of
                  college.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}