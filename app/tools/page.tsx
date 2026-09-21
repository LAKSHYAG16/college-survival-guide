import Link from "next/link";

const tools = [
  {
    icon: "∑",
    title: "CGPA Calculator",
    description:
      "Calculate your CGPA quickly using your semester grades and credits.",
    href: "/tools/cgpa-calculator",
    status: "AVAILABLE",
  },
  {
    icon: "%",
    title: "Attendance Calculator",
    description:
      "Find out your current attendance percentage and how many classes you need to attend or can miss.",
    href: "/tools/attendance-calculator",
    status: "AVAILABLE",
  },
  {
    icon: "✓",
    title: "Study Planner",
    description:
      "Create a simple study plan around your classes, assignments and upcoming exams.",
    href: "/tools/study-planner",
    status: "AVAILABLE",
  },
];

export const metadata = {
  title: "Student Tools & Calculators | College Survival Guide",
  description:
    "Free student tools including a CGPA calculator, attendance calculator and study planner designed for college students.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">STUDENT TOOLS</p>

        <h1>
          Useful tools.
          <br />
          <span>No unnecessary complexity.</span>
        </h1>

        <p>
          Simple calculators and utilities designed to help college students
          get quick answers and manage everyday academic tasks.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS</p>

            <h2>
              Get the answer. Get back to college.
            </h2>
          </div>

          <p>
            Use these simple tools for common student calculations and
            planning tasks.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <Link
              href={tool.href}
              className={`tool-card ${tool.status === "COMING SOON" ? "tool-disabled" : ""
                }`}
              key={tool.title}
            >
              <span className="tool-icon">{tool.icon}</span>

              <span className="guide-category">{tool.status}</span>

              <h3>{tool.title}</h3>

              <p>{tool.description}</p>

              <span className="tool-link">
                {tool.status === "AVAILABLE"
                  ? "Open tool →"
                  : "Coming soon"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">BUILT FOR STUDENTS</p>

          <h2>
            Small tools can save a surprising amount of time.
          </h2>

          <p>
            These tools are designed to solve simple problems students deal
            with regularly, without requiring an account or complicated setup.
          </p>
        </div>
      </section>
    </main>
  );
}