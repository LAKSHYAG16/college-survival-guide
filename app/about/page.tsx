import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover College Survival Guide, a student resource for college study tips, internship preparation, budgeting, productivity, and everyday college life.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | College Survival Guide",
    description:
      "Learn how College Survival Guide helps students navigate academics, careers, budgeting, and college life.",
    url: "/about",
    type: "website",
  },
};

const areas = [
  {
    number: "01",
    title: "Academic Success",
    description:
      "Explore study techniques, exam preparation strategies, and practical resources to organize your academic life.",
    href: "/academics",
    linkText: "Explore academics",
  },
  {
    number: "02",
    title: "Career Preparation",
    description:
      "Learn about internship applications, resume writing, and the steps you can take to prepare for your future career.",
    href: "/career",
    linkText: "Explore career guides",
  },
  {
    number: "03",
    title: "Student Budgeting",
    description:
      "Discover practical budgeting tips and money-management strategies designed for everyday student life.",
    href: "/money",
    linkText: "Explore money guides",
  },
  {
    number: "04",
    title: "College Life",
    description:
      "Find useful checklists, planning resources, and advice for navigating the everyday challenges of college.",
    href: "/college-life",
    linkText: "Explore college life",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-glow" />

        <div className="about-hero-content">
          <p className="about-eyebrow">ABOUT COLLEGE SURVIVAL GUIDE</p>

          <h1>
            College is a journey.
            <br />
            <span>Make it count.</span>
          </h1>

          <p className="about-hero-description">
            Practical advice, useful tools, and straightforward guidance to
            help students navigate academics, careers, money, and everyday
            college life.
          </p>

          <div className="about-hero-actions">
            <Link href="/academics" className="button button-primary">
              Explore Our Guides <span aria-hidden="true">→</span>
            </Link>

            <Link href="/tools" className="button button-secondary">
              Explore Student Tools
            </Link>
          </div>
        </div>

        <div className="about-hero-bottom">
          <span>BUILT FOR STUDENTS</span>
          <span>DESIGNED FOR EVERYDAY COLLEGE LIFE</span>
        </div>
      </section>

      <section className="about-section">
        <div className="about-intro-grid">
          <div>
            <p className="about-eyebrow">WHY WE EXIST</p>
            <h2>
              Making college life
              <br />
              <span>easier to navigate.</span>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              College brings exciting opportunities, but balancing assignments,
              internships, finances, and personal responsibilities can be
              challenging.
            </p>

            <p>
              College Survival Guide brings practical student resources
              together in one place, helping you find a useful starting point
              without getting lost in unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-section-heading">
          <p className="about-eyebrow">OUR MISSION</p>
          <h2>
            Useful information.
            <br />
            <span>Practical next steps.</span>
          </h2>
          <p>
            Our aim is to make common college challenges easier to understand
            through clear explanations, helpful resources, and student-focused
            guidance.
          </p>
        </div>
      </section>

      <section className="about-section about-resources">
        <div className="about-section-heading">
          <p className="about-eyebrow">EXPLORE THE GUIDE</p>
          <h2>Resources for every part of college life.</h2>
          <p>
            From studying for exams to preparing for internships, explore
            resources built around common student needs.
          </p>
        </div>

        <div className="about-resource-grid">
          {areas.map((area) => (
            <article className="about-resource-card" key={area.number}>
              <span className="about-resource-number">{area.number}</span>

              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              <Link href={area.href} className="about-resource-link">
                {area.linkText} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-audience">
        <div className="about-audience-card">
          <p className="about-eyebrow">WHO THIS IS FOR</p>

          <h2>
            Wherever you are
            <br />
            in your college journey.
          </h2>

          <p>
            Whether you're adjusting to your first semester, organizing your
            study routine, managing a student budget, or applying for an
            internship, College Survival Guide aims to provide approachable
            information to help you take your next step.
          </p>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="about-final-cta-content">
          <p className="about-eyebrow">YOUR NEXT STEP STARTS HERE</p>

          <h2>
            Make your college
            <br />
            journey count.
          </h2>

          <p>
            Explore the guides and tools designed to help you navigate student
            life with greater confidence.
          </p>

          <Link href="/" className="button button-primary">
            Explore College Survival Guide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}