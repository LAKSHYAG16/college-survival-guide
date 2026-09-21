import Link from "next/link";

const guides = [
  {
    title: "College Essentials Checklist for First-Year Students",
    description:
      "A practical checklist of things to prepare before starting college, from everyday essentials to useful study supplies.",
    href: "/college-life/college-essentials-checklist",
  },
];

export const metadata = {
  title: "College Life Guides & Essentials | College Survival Guide",
  description:
    "Practical college life guides including first-year essentials, college checklists, routines and advice for adjusting to student life.",
};

export default function CollegeLifePage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">COLLEGE LIFE</p>

        <h1>
          Figure out
          <br />
          <span>the college stuff.</span>
        </h1>

        <p>
          Practical checklists, everyday advice and useful guides for making
          college life a little easier.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">COLLEGE LIFE GUIDES</p>

            <h2>
              The things nobody gives you a manual for.
            </h2>
          </div>

          <p>
            From preparing for your first year to handling everyday college
            life, find straightforward advice for the things that actually
            matter.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">COLLEGE LIFE</span>

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
          <p className="eyebrow">FIRST YEAR</p>

          <h2>
            You don't have to figure everything out at once.
          </h2>

          <p>
            College involves a lot of new responsibilities, routines and
            decisions. Start with the basics, build a routine that works for
            you and give yourself time to adjust.
          </p>
        </div>
      </section>
    </main>
  );
}