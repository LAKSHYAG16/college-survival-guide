import Link from "next/link";
import type { Metadata } from "next";

const guides = [
  {
    title: "College Essentials Checklist for First-Year Students",
    description:
      "A practical checklist of things to prepare before starting college, from everyday essentials to useful study supplies.",
    href: "/college-life/college-essentials-checklist",
  },
];

export const metadata: Metadata = {
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
            Starting college means adjusting to new people,
            responsibilities and routines. From preparing for your
            first day to managing everyday tasks, a little planning
            can make the transition easier. You do not need to have
            everything figured out immediately.
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
            If you live in a hostel, prepare your everyday supplies
            and plan your spending. Give yourself time to adjust
            instead of expecting everything to feel familiar
            immediately.
          </p>

          <p>
            It can also take time to become comfortable with a new
            campus and meet people. Participate in activities that
            interest you, communicate with classmates and ask faculty
            or college staff for help when you need it. Small steps
            can make a new environment feel more manageable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MAKE COLLEGE EASIER</p>
            <h2>Three habits worth building early.</h2>
          </div>

          <p>
            Simple habits can help you stay organised without making
            your college routine unnecessarily complicated.
          </p>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Keep your essentials organised</h3>

            <p>
              Prepare your study materials, everyday items and
              important documents so you can find them when needed.
              Keep frequently used supplies in a consistent place.
            </p>
          </div>

          <div className="guide-card">
            <h3>Build a realistic routine</h3>

            <p>
              Make time for classes, studying, meals, rest and
              activities you enjoy. Start with a manageable schedule
              and adjust it as you understand your workload.
            </p>
          </div>

          <div className="guide-card">
            <h3>Track important tasks</h3>

            <p>
              Keep assignment deadlines, exam dates and college
              activities in one place. Reviewing upcoming tasks
              regularly can help you avoid unnecessary last-minute
              stress.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">HOSTEL AND DAILY LIFE</p>

          <h2>Prepare for the practical side of college.</h2>

          <p>
            If you are moving into a hostel or living away from home,
            think about the items you use every day. Clothing,
            toiletries, stationery, chargers, medicines you normally
            use and essential documents may be useful depending on
            your accommodation and college rules. Check what is
            provided before buying additional supplies.
          </p>

          <p>
            Everyday planning matters too. Keep track of food
            expenses, laundry, classes and personal commitments.
            A simple weekly checklist can help you remember routine
            responsibilities while leaving time for studying and
            relaxation.
          </p>

          <p>
            Preparing for your first semester? Use our{" "}
            <Link href="/college-life/college-essentials-checklist">
              college essentials checklist for first-year students
            </Link>{" "}
            to organise the items you may need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>

          <h2>College life FAQs</h2>

          <h3>What should I prepare before starting college?</h3>

          <p>
            Review your college instructions, organise essential
            documents, check your timetable and prepare the supplies
            you will need for classes and everyday life.
          </p>

          <h3>How can I adjust to college life as a first-year student?</h3>

          <p>
            Give yourself time to learn your routine, explore the
            campus, meet classmates and understand your academic
            responsibilities. Ask for help when something is unclear.
          </p>

          <h3>How can I stay organised during college?</h3>

          <p>
            Use a calendar or planner to track classes, assignments
            and exams. Keep important documents and study materials
            organised, and review your upcoming responsibilities
            regularly.
          </p>

          <h3>What should I pack for a college hostel?</h3>

          <p>
            Consider clothing, toiletries, study supplies, chargers
            and essential documents. Check your hostel's rules and
            facilities first so you bring what you need without
            packing unnecessary items.
          </p>
        </div>
      </section>
    </main>
  );
}