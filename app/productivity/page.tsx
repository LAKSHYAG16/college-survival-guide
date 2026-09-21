import Link from "next/link";

const guides = [
  {
    title: "How to Stop Procrastinating as a College Student",
    description:
      "Simple techniques to get assignments and studying done without leaving everything until the last minute.",
    href: "/productivity/how-to-stop-procrastinating",
  },
];

export const metadata = {
  title: "Productivity & Time Management for College Students",
  description:
    "Practical productivity and time-management guides for college students, including procrastination, organization, planning and balancing college responsibilities.",
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
          Simple productivity, planning and time-management strategies for
          staying on top of college without burning yourself out.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRODUCTIVITY GUIDES</p>

            <h2>
              Make your time work for you.
            </h2>
          </div>

          <p>
            Practical systems for managing assignments, studying, deadlines
            and everything else competing for your attention.
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

          <h2>
            A good system is one you can actually stick to.
          </h2>

          <p>
            You don't need a complicated productivity setup. Start by knowing
            what needs to be done, deciding when you'll do it and keeping your
            tasks somewhere you can easily check.
          </p>
        </div>
      </section>
    </main>
  );
}