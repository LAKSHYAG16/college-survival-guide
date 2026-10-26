import type { Metadata } from "next";
import AttendanceCalculator from "./AttendanceCalculator";

export const metadata: Metadata = {
  title: "College Attendance Calculator",
  description:
    "Free college attendance calculator to find your current attendance percentage, classes needed to reach your target, and classes you can safely miss.",
  alternates: {
    canonical: "/tools/attendance-calculator",
  },
};

export default function AttendanceCalculatorPage() {
  return (
    <>
      <AttendanceCalculator />

      <section className="section">
        <div className="article-content">
          <section className="article-section">
            <h2>How to Use the College Attendance Calculator</h2>

            <p>
              This college attendance calculator helps you check your
              current attendance and estimate how upcoming classes may
              affect your percentage. Enter the classes you have attended,
              the total classes conducted, and your target attendance.
            </p>

            <ol>
              <li>
                Enter the number of classes you have attended.
              </li>
              <li>
                Enter the total number of classes conducted.
              </li>
              <li>
                Enter your target attendance percentage, such as 75%.
              </li>
              <li>
                Click Calculate Attendance to view your result.
              </li>
              <li>
                Use Reset to clear the inputs and start again.
              </li>
            </ol>
          </section>

          <section className="article-section">
            <h2>How Is Attendance Percentage Calculated?</h2>

            <p>
              Attendance percentage is the proportion of conducted
              classes that you attended. Divide the classes attended
              by the total classes conducted, then multiply by 100.
            </p>

            <div className="article-callout">
              <h3>
                Attendance % = (Classes Attended ÷ Classes Conducted) × 100
              </h3>
            </div>

            <h3>Example calculation</h3>

            <p>
              Suppose 40 classes have been conducted and you attended
              34. Your attendance percentage is:
            </p>

            <div className="article-callout">
              <p>
                (34 ÷ 40) × 100 = <strong>85%</strong>
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>How Many Classes Must You Attend to Reach Your Target?</h2>

            <p>
              If your current attendance is below your target, the
              calculator estimates how many consecutive classes you
              need to attend to reach it.
            </p>

            <p>
              For example, if you attended 34 out of 40 classes and
              want to reach 90%, you must attend the next 20 classes
              without missing any.
            </p>

            <div className="article-callout">
              <p>
                (34 + 20) ÷ (40 + 20) × 100 = <strong>90%</strong>
              </p>
            </div>

            <p>
              This estimate assumes that each upcoming class counts
              equally and that you attend every class during this period.
            </p>
          </section>

          <section className="article-section">
            <h2>How Many Classes Can You Miss?</h2>

            <p>
              If your current attendance is at or above your target,
              the calculator estimates how many consecutive classes
              you could miss before your attendance falls below that
              target.
            </p>

            <p>
              For example, with 34 classes attended out of 40 and a
              target of 75%, you can miss up to 5 additional classes
              and remain at or above 75% attendance.
            </p>

            <p>
              This is a mathematical estimate, not a recommendation
              to miss classes. Check your college's official attendance
              requirements, including any subject-specific rules.
            </p>
          </section>

          <section className="article-section">
            <h2>Tips for Maintaining Good College Attendance</h2>

            <ul>
              <li>
                Track your attendance regularly throughout the semester.
              </li>
              <li>
                Calculate attendance separately for each subject when
                your college maintains separate records.
              </li>
              <li>
                Check your institution's minimum attendance policy.
              </li>
              <li>
                Keep a record of classes attended and conducted.
              </li>
              <li>
                Leave room for unexpected absences when planning ahead.
              </li>
              <li>
                Contact your faculty if your recorded attendance appears
                incorrect.
              </li>
            </ul>
          </section>

          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>Attendance Calculator FAQs</h2>

            <div className="faq-item">
              <h3>How do I calculate my college attendance?</h3>

              <p>
                Divide the number of classes attended by the total
                classes conducted and multiply by 100.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I calculate attendance for one subject?</h3>

              <p>
                Yes. Enter the classes attended and conducted for that
                subject. Repeat the calculation for each subject you
                want to check.
              </p>
            </div>

            <div className="faq-item">
              <h3>What attendance percentage should I target?</h3>

              <p>
                Requirements vary by institution and course. Check
                your college's official policy and enter the applicable
                target percentage into the calculator.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is the attendance result official?</h3>

              <p>
                No. The calculator provides an estimate based on your
                inputs. Your institution's official attendance records
                and rules determine your actual attendance status.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}