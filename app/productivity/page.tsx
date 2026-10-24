
import Link from "next/link";

const guides = [
  {
    title: "How to Stop Procrastinating as a College Student",
    description:
      "Discover practical techniques to overcome procrastination, start assignments earlier and make studying more manageable.",
    href: "/productivity/how-to-stop-procrastinating",
  },
];

export const metadata = {
  title: "Productivity & Time Management for College Students",
  description:
    "Explore productivity tips and time-management strategies for college students, including beating procrastination, planning assignments and building better study habits.",
  alternates: {
    canonical: "/productivity",
  },
};

export default function ProductivityPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">PRODUCTIVITY</p>

        <h1>
          Get things done
          <br />
          <span>without the chaos.</span>
        </h1>

        <p>
          Learn practical productivity, planning and time-management
          strategies to stay on top of college assignments, prepare for
          exams and manage your responsibilities without burning out.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRODUCTIVITY GUIDES</p>

            <h2>Make your time work for you.</h2>
          </div>

          <p>
            College life often involves lectures, assignments, exams
            and personal commitments competing for your attention.
            A simple routine can help you prioritize important tasks,
            manage deadlines and make steady progress.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">PRODUCTIVITY</span>

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
          <p className="eyebrow">KEEP IT SIMPLE</p>

          <h2>A good system is one you can actually stick to.</h2>

          <p>
            You don't need a complicated productivity setup. Start by
            listing your tasks, deciding when to work on them and keeping
            your schedule somewhere easy to check. Review your progress
            regularly and adjust your plan when your workload changes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BETTER STUDY HABITS</p>

            <h2>Three ways to manage your workload.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Break tasks into smaller steps</h3>
            <p>
              Instead of writing down a large task like "finish
              assignment," split it into research, outlining,
              drafting and reviewing. Smaller steps make it easier
              to begin and track your progress.
            </p>
          </div>

          <div className="guide-card">
            <h3>Prioritize important deadlines</h3>
            <p>
              Check upcoming exams, submissions and project dates.
              Start with urgent or high-priority work, and schedule
              study sessions before deadlines become stressful.
            </p>
          </div>

          <div className="guide-card">
            <h3>Make breaks part of your routine</h3>
            <p>
              Work in manageable sessions and take short breaks
              when needed. Get enough rest and leave room for
              exercise, meals and social activities to make your
              routine more sustainable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
