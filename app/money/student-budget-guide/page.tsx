import {
  articleSchema,
  faqSchema,
} from "@/lib/structured-data";

import Link from "next/link";

export const metadata = {
  title: "Student Budget Guide: Managing Monthly Expenses",
  description:
    "Learn how to manage monthly expenses as a college student with a simple student budget, spending categories, saving strategies and practical money-management tips.",
    alternates: {
  canonical: "/money/student-budget-guide",
},
};

const budgetCategories = [
  {
    title: "Food",
    description:
      "Track meals, snacks, eating out, groceries and food delivery. Food can become one of the easiest categories to overspend on.",
  },
  {
    title: "Transport",
    description:
      "Include public transport, fuel, cabs, auto-rickshaws and other regular travel costs.",
  },
  {
    title: "College",
    description:
      "Account for stationery, printing, course materials, project expenses and other academic costs.",
  },
  {
    title: "Entertainment",
    description:
      "Include movies, outings, gaming, subscriptions and other optional spending.",
  },
];

const budgetingSteps = [
  "Find out how much money you have available each month.",
  "List your regular and unavoidable expenses.",
  "Estimate flexible expenses such as food and entertainment.",
  "Set aside money for savings or unexpected expenses.",
  "Track what you actually spend throughout the month.",
  "Review your spending and adjust your next month's budget.",
];

export default function StudentBudgetGuidePage() {
  const article = articleSchema({
    title: "Student Budget Guide: Managing Monthly Expenses",
    description:
      "A practical student budget guide covering monthly expenses, essential spending, saving money, hostel costs and simple ways to track your spending.",
    url: "https://college-survival-guide-plum.vercel.app/money/student-budget-guide",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
  });

  const faq = faqSchema([
    {
      question: "How should a college student create a monthly budget?",
      answer:
        "Start by estimating your monthly income or available allowance, then divide expenses into essential costs, flexible spending and savings.",
    },
    {
      question: "How much money should a college student save?",
      answer:
        "There is no single amount that works for every student. Saving a small, consistent amount after essential expenses can help build a financial buffer.",
    },
    {
      question: "What are common expenses for college students?",
      answer:
        "Common expenses include accommodation, food, transportation, study materials, phone or internet costs, personal expenses and entertainment.",
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
          <p className="eyebrow">MONEY</p>

          <h1>
            Student Budget Guide:
            <br />
            <span>Managing Monthly Expenses</span>
          </h1>

          <p className="article-intro">
            A simple guide to planning your monthly student budget, tracking
            everyday spending and making your money last longer during college.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="article-page">
        <div className="article-content">
          <div className="article-meta">
            <span>MONEY</span>
            <span>•</span>
            <span>STUDENT BUDGET</span>
          </div>

          <p className="article-lead">
            Managing money in college does not require a complicated financial
            system. The first step is simply knowing how much money you have,
            where it needs to go and which expenses are flexible.
          </p>

          <p>
            Your budget will look different depending on whether you live at
            home, in a hostel, in a rented apartment or somewhere else. Use the
            framework below as a starting point and adjust the categories to
            your situation.
          </p>

          {/* Quick start */}
          <div className="article-callout">
            <p className="eyebrow">QUICK START</p>

            <h2>A simple monthly budget</h2>

            <ul>
              <li>Start with your total monthly money available.</li>
              <li>Separate essential expenses from optional spending.</li>
              <li>Keep some money aside for unexpected costs.</li>
              <li>Track your actual spending.</li>
              <li>Adjust the next month's budget based on what you learned.</li>
            </ul>
          </div>

          {/* Budgeting steps */}
          <section className="article-section">
            <p className="eyebrow">STEP BY STEP</p>

            <h2>How to create a student budget</h2>

            <p>
              You don't need a spreadsheet with dozens of categories. A simple
              system that you actually use is more useful than a detailed
              budget that you abandon after a week.
            </p>

            <ul className="checklist">
              {budgetingSteps.map((step) => (
                <li key={step}>
                  <span className="check-icon">✓</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Categories */}
          <section className="article-section">
            <p className="eyebrow">EXPENSES</p>

            <h2>Know where your money is going.</h2>

            <p>
              Start by dividing your spending into a few broad categories.
              This makes it easier to see which areas are taking up most of
              your budget.
            </p>

            <div className="related-grid">
              {budgetCategories.map((category) => (
                <div className="related-card" key={category.title}>
                  <span>EXPENSE CATEGORY</span>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fixed vs flexible */}
          <section className="article-section">
            <h2>Separate essential and flexible expenses.</h2>

            <p>
              Some expenses are difficult to avoid, while others can be
              changed depending on your priorities.
            </p>

            <ul>
              <li>
                <strong>Essential:</strong> accommodation, required college
                expenses, basic food and necessary transportation.
              </li>

              <li>
                <strong>Flexible:</strong> eating out, entertainment,
                subscriptions, shopping and some travel.
              </li>
            </ul>

            <p>
              Knowing the difference helps you make decisions when you are
              close to your monthly limit.
            </p>
          </section>

          {/* Saving */}
          <section className="article-section">
            <h2>How to save money as a college student</h2>

            <p>
              Saving doesn't always mean cutting everything enjoyable from
              your college life. Small recurring expenses can make a noticeable
              difference over time.
            </p>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>Compare prices before making regular purchases.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Review subscriptions you rarely use.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Plan larger purchases instead of buying impulsively.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Use student discounts when they are available.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Keep track of frequent small purchases.</span>
              </li>
            </ul>
          </section>

          {/* Hostel */}
          <section className="article-section">
            <h2>Budgeting when you live in a hostel</h2>

            <p>
              Hostel students often have a different expense pattern from
              students living at home. Some major costs may already be covered,
              while smaller daily expenses can add up.
            </p>

            <ul>
              <li>Food outside the mess</li>
              <li>Snacks and drinks</li>
              <li>Laundry</li>
              <li>Local transportation</li>
              <li>Subscriptions</li>
              <li>College supplies</li>
              <li>Weekend outings</li>
            </ul>
          </section>

          {/* Tracking */}
          <section className="article-section">
            <h2>Track your spending for one month.</h2>

            <p>
              If you don't know where your money goes, try tracking every
              expense for a month. You don't need to judge every purchase.
              You're simply collecting information about your actual habits.
            </p>

            <p>
              At the end of the month, look for recurring expenses and
              categories where your actual spending was much higher than you
              expected.
            </p>
          </section>

          {/* Mistakes */}
          <section className="article-section">
            <h2>Common Student Budgeting Mistakes</h2>

            <ul>
              <li>Creating a budget that is unrealistic.</li>
              <li>Forgetting irregular expenses.</li>
              <li>Ignoring small recurring purchases.</li>
              <li>Not tracking spending after creating the budget.</li>
              <li>Trying to eliminate every form of entertainment.</li>
              <li>Having no money set aside for unexpected expenses.</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="article-section">
            <h2>Monthly Budget Checklist</h2>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>I know how much money I have available this month.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I know my regular essential expenses.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have set a limit for flexible spending.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I have accounted for unexpected expenses.</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>I am tracking my actual spending.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>Student Budget FAQs</h2>

            <div className="faq-item">
              <h3>How much money should a college student spend per month?</h3>

              <p>
                There is no universal amount because expenses vary significantly
                depending on accommodation, city, food, transportation and
                personal circumstances. A useful budget starts with your actual
                available income and regular expenses.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can I save money while living in a hostel?</h3>

              <p>
                Start by tracking frequent expenses such as food outside the
                mess, snacks, transportation, subscriptions and weekend
                spending. These smaller expenses can be easier to adjust than
                fixed accommodation costs.
              </p>
            </div>

            <div className="faq-item">
              <h3>Should college students have an emergency fund?</h3>

              <p>
                Keeping some money available for unexpected expenses can make
                it easier to handle situations such as urgent travel,
                replacement electronics or unexpected college costs.
              </p>
            </div>
          </section>

          {/* Related */}
          <section className="article-related">
            <p className="eyebrow">KEEP READING</p>

            <h2>More College Survival Guides</h2>

            <div className="related-grid">
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

              <Link
                href="/career/resume-for-internship-no-experience"
                className="related-card"
              >
                <span>CAREER</span>

                <h3>How to Make a Resume for an Internship With No Experience</h3>

                <p>
                  Learn how to present your education, projects and skills on
                  your first internship resume.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}