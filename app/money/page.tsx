import Link from "next/link";

const guides = [
  {
    title: "Student Budget Guide: Managing Monthly Expenses",
    description:
      "Learn how to plan your monthly spending, track expenses and manage money while in college.",
    href: "/money/student-budget-guide",
  },
];

export const metadata = {
  title: "Student Budget & Money Guides | College Survival Guide",
  description:
    "Practical money and budgeting advice for college students, including monthly budgeting, saving money and managing everyday expenses.",
};

export default function MoneyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">MONEY</p>

        <h1>
          Make your money
          <br />
          <span>last longer.</span>
        </h1>

        <p>
          Simple budgeting and money-management advice to help college
          students make the most of a limited budget.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MONEY GUIDES</p>
            <h2>Spend smarter. Stress less.</h2>
          </div>

          <p>
            Practical advice for managing everyday expenses, saving money and
            building better financial habits during college.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">MONEY</span>

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
          <p className="eyebrow">A SIMPLE RULE</p>

          <h2>
            Know where your money goes before worrying about where it went.
          </h2>

          <p>
            Start by tracking your regular expenses such as food, transport,
            subscriptions and entertainment. Once you understand your spending
            habits, it becomes much easier to decide where you can save.
          </p>
        </div>
      </section>
    </main>
  );
}