
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
  title: "Student Budget & Money Guides",
  description:
    "Explore student budgeting tips, monthly expense planning, saving strategies and practical money-management advice for college students.",
  alternates: {
    canonical: "/money",
  },
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
          Discover practical student budgeting tips, expense-tracking
          methods and money-management advice to help you make the most
          of a limited college budget.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MONEY GUIDES</p>
            <h2>Spend smarter. Stress less.</h2>
          </div>

          <p>
            Managing money during college means balancing essentials,
            personal spending and unexpected costs. A realistic budget
            can help you understand where your money goes and make
            more confident spending decisions.
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
            Begin by listing your available monthly funds and regular
            expenses, such as food, transport, accommodation and
            subscriptions. Set aside money for essential costs first,
            then decide how much you can comfortably spend on
            entertainment and other non-essential purchases.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUDGETING BASICS</p>
            <h2>Build better money habits in college.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Track your spending</h3>
            <p>
              Record daily expenses and review them at the end of
              each week. This helps you identify spending patterns
              and avoid losing track of small purchases.
            </p>
          </div>

          <div className="guide-card">
            <h3>Plan essential expenses</h3>
            <p>
              Account for accommodation, meals, transport, study
              supplies and other necessary costs before setting
              a flexible spending limit.
            </p>
          </div>

          <div className="guide-card">
            <h3>Prepare for unexpected costs</h3>
            <p>
              When possible, set aside a small amount for emergencies
              or unplanned college expenses so they are less likely
              to disrupt your budget.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
