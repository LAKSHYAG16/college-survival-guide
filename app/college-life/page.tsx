
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
  title: "College Life Guides & Essentials",
  description:
    "Explore college life tips, first-year essentials, packing checklists and practical advice to help students adjust to college.",
  alternates: {
    canonical: "/college-life",
  },
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
          Discover practical college life tips, useful checklists and
          everyday advice to help you settle in, stay organised and
          make the most of your student experience.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">COLLEGE LIFE GUIDES</p>

            <h2>The things nobody gives you a manual for.</h2>
          </div>

          <p>
            Starting college can mean adjusting to new people,
            responsibilities and routines. Get straightforward advice
            for preparing for your first year and managing everyday
            student life.
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

          <h2>You don't have to figure everything out at once.</h2>

          <p>
            College involves new responsibilities, routines and
            decisions. Start by organising your essentials, learning
            your timetable and keeping track of important deadlines.
            If you live in a hostel, plan your everyday supplies and
            spending as well. Give yourself time to adjust instead
            of expecting everything to feel familiar immediately.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MAKE COLLEGE EASIER</p>
            <h2>Three habits worth building early.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Keep your essentials organised</h3>
            <p>
              Prepare your study materials, everyday items and
              important documents so you can find them when needed.
            </p>
          </div>

          <div className="guide-card">
            <h3>Build a realistic routine</h3>
            <p>
              Make time for classes, studying, meals, rest and
              activities you enjoy. Choose a routine you can maintain.
            </p>
          </div>

          <div className="guide-card">
            <h3>Track important tasks</h3>
            <p>
              Keep assignment deadlines, exam dates and college
              activities in one place to reduce last-minute stress.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
