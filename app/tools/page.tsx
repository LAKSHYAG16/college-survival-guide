
import Link from "next/link";

const tools = [
  {
    icon: "∑",
    title: "CGPA Calculator",
    description:
      "Calculate your CGPA using semester grades and credits. Use it to understand your academic performance and track your progress.",
    href: "/tools/cgpa-calculator",
    status: "AVAILABLE",
  },
  {
    icon: "%",
    title: "Attendance Calculator",
    description:
      "Calculate your current attendance percentage and find out how many more classes you need to attend to reach your target.",
    href: "/tools/attendance-calculator",
    status: "AVAILABLE",
  },
  {
    icon: "✓",
    title: "Study Planner",
    description:
      "Organize your classes, assignments and upcoming exams into a practical study plan that helps you manage your time.",
    href: "/tools/study-planner",
    status: "AVAILABLE",
  },
];

export const metadata = {
  title: "Student Tools & Calculators",
  description:
    "Use free student tools including a CGPA calculator, attendance calculator and study planner to manage college academics and everyday tasks.",
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
          Get quick answers to common academic questions with free,
          easy-to-use student calculators and planning tools. Whether
          you're checking your grades, tracking attendance or organizing
          exam preparation, start here.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS</p>

            <h2>Get the answer. Get back to college.</h2>
          </div>

          <p>
            Choose a tool based on what you need to calculate or organize.
            Each tool focuses on a common student task, so you can spend
            less time working things out manually.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <Link
              href={tool.href}
              className={`tool-card ${
                tool.status === "COMING SOON" ? "tool-disabled" : ""
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
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW TO USE THESE TOOLS</p>

            <h2>Start with your biggest academic concern.</h2>
          </div>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Check your academic progress</h3>
            <p>
              Use the CGPA calculator to work out your grade average
              using the information requested by the calculator.
              Check your university's grading rules when interpreting
              your result.
            </p>
          </div>

          <div className="guide-card">
            <h3>Keep track of attendance</h3>
            <p>
              Use the attendance calculator to understand your current
              percentage and plan future classes. Always check your
              institution's minimum attendance requirement before
              making decisions about absences.
            </p>
          </div>

          <div className="guide-card">
            <h3>Plan your study sessions</h3>
            <p>
              Use the study planner to organize upcoming work into
              manageable tasks. Give priority to close deadlines,
              difficult subjects and topics that need more revision.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">BUILT FOR STUDENTS</p>

          <h2>Small tools can save a surprising amount of time.</h2>

          <p>
            These tools are designed to simplify everyday academic
            tasks without unnecessary setup. Use their results as
            a planning aid, and refer to your college's official
            rules for grading, attendance and academic requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
