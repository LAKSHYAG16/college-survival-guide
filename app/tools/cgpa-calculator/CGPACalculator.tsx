"use client";

import { useState } from "react";

type Subject = {
  id: number;
  credits: string;
  grade: string;
};

type GradePoints = Record<string, number>;

const gradePoints: GradePoints = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  D: 4,
  F: 0,
};

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, credits: "", grade: "" },
    { id: 2, credits: "", grade: "" },
    { id: 3, credits: "", grade: "" },
  ]);

  const [cgpa, setCgpa] = useState<number | null>(null);
  const [error, setError] = useState("");

  function addSubject() {
    setSubjects((current) => [
      ...current,
      {
        id: Date.now() + Math.random(),
        credits: "",
        grade: "",
      },
    ]);

    setCgpa(null);
    setError("");
  }

  function removeSubject(id: number) {
    setSubjects((current) =>
      current.filter((subject) => subject.id !== id)
    );

    setCgpa(null);
    setError("");
  }

  function updateSubject(
    id: number,
    field: "credits" | "grade",
    value: string
  ) {
    setSubjects((current) =>
      current.map((subject) =>
        subject.id === id
          ? {
              ...subject,
              [field]: value,
            }
          : subject
      )
    );

    setCgpa(null);
    setError("");
  }

  function calculateCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    if (subjects.length === 0) {
      setCgpa(null);
      setError("Add at least one subject before calculating your CGPA.");
      return;
    }

    for (const subject of subjects) {
      const creditsText = subject.credits.trim();
      const credits = Number(creditsText);
      const points = gradePoints[subject.grade];

      if (creditsText === "" || subject.grade === "") {
        setCgpa(null);
        setError(
          "Please enter both credits and a grade for every subject, or remove any unused subject rows."
        );
        return;
      }

      if (
        !Number.isFinite(credits) ||
        credits <= 0 ||
        !Number.isFinite(points)
      ) {
        setCgpa(null);
        setError(
          "Enter a positive credit value and select a valid grade for every subject."
        );
        return;
      }

      totalCredits += credits;
      totalPoints += credits * points;
    }

    if (totalCredits <= 0) {
      setCgpa(null);
      setError("Enter valid subject credits and grades to calculate CGPA.");
      return;
    }

    setCgpa(Number((totalPoints / totalCredits).toFixed(2)));
    setError("");
  }

  function resetCalculator() {
    setSubjects([
      { id: 1, credits: "", grade: "" },
      { id: 2, credits: "", grade: "" },
      { id: 3, credits: "", grade: "" },
    ]);

    setCgpa(null);
    setError("");
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">STUDENT TOOL</p>

        <h1>
          CGPA Calculator.
          <br />
          <span>Know where you stand.</span>
        </h1>

        <p>
          Calculate your semester CGPA using subject credits and grade
          points. Add your subjects, choose your grades, and get a
          result without complicated setup.
        </p>
      </section>

      <section className="section">
        <div className="calculator-card">
          <div className="calculator-header">
            <div>
              <p className="eyebrow">CGPA CALCULATOR</p>
              <h2>Enter your subjects</h2>
            </div>

            <p>
              Enter the credit value and grade for each subject.
              Complete every row or remove unused rows before calculating.
            </p>
          </div>

          <div className="subject-header">
            <span>Subject</span>
            <span>Credits</span>
            <span>Grade</span>
            <span aria-hidden="true"></span>
          </div>

          <div className="subject-list">
            {subjects.map((subject, index) => (
              <div className="subject-row" key={subject.id}>
                <div className="subject-number">{index + 1}</div>

                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  placeholder="Credits"
                  aria-label={`Credits for subject ${index + 1}`}
                  value={subject.credits}
                  onChange={(event) =>
                    updateSubject(
                      subject.id,
                      "credits",
                      event.target.value
                    )
                  }
                />

                <select
                  aria-label={`Grade for subject ${index + 1}`}
                  value={subject.grade}
                  onChange={(event) =>
                    updateSubject(
                      subject.id,
                      "grade",
                      event.target.value
                    )
                  }
                >
                  <option value="">Grade</option>
                  <option value="O">O — 10</option>
                  <option value="A+">A+ — 9</option>
                  <option value="A">A — 8</option>
                  <option value="B+">B+ — 7</option>
                  <option value="B">B — 6</option>
                  <option value="C">C — 5</option>
                  <option value="D">D — 4</option>
                  <option value="F">F — 0</option>
                </select>

                <button
                  type="button"
                  className="remove-subject"
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                  aria-label={`Remove subject ${index + 1}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="calculator-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={addSubject}
            >
              + Add Subject
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={calculateCGPA}
            >
              Calculate CGPA
            </button>
          </div>

          {error && (
            <p className="attendance-message" role="alert">
              {error}
            </p>
          )}

          {cgpa !== null && (
            <div className="calculator-result" aria-live="polite">
              <p className="eyebrow">YOUR CGPA</p>

              <div className="cgpa-value">{cgpa}</div>

              <p>
                Your calculated CGPA is based on the credits and grades
                entered above.
              </p>
            </div>
          )}

          <button
            type="button"
            className="reset-button"
            onClick={resetCalculator}
          >
            Reset calculator
          </button>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>What is CGPA?</h2>

          <p>
            CGPA stands for Cumulative Grade Point Average. It represents
            academic performance using grade points. This calculator
            calculates a credit-weighted average using the subjects and
            grades you enter.
          </p>

          <p>
            Each subject's grade point is multiplied by its credit value.
            The resulting points are added together and divided by the
            total credits.
          </p>

          <p>
            <strong>
              CGPA = Total of (Subject Credits × Grade Points) ÷ Total Credits
            </strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="article-content">
          <section className="article-section">
            <h2>How to Use the CGPA Calculator</h2>

            <ol>
              <li>
                Enter the number of credits assigned to your first subject.
              </li>
              <li>
                Select the grade you received in that subject.
              </li>
              <li>
                Repeat the process for each subject in the semester.
              </li>
              <li>
                Use Add Subject if you need additional rows.
              </li>
              <li>
                Select Calculate CGPA to view your result.
              </li>
              <li>
                Use Reset calculator to clear the entries and start again.
              </li>
            </ol>

            <p>
              Check your university's official grading scale before using
              the tool. The grade points shown here are examples of a
              grading system and may not match every institution.
            </p>
          </section>

          <section className="article-section">
            <h2>CGPA Calculation Example</h2>

            <p>
              Suppose a student has three subjects with the following
              credits and grade points:
            </p>

            <div className="article-callout">
              <ul>
                <li>Subject 1: 4 credits and 9 grade points.</li>
                <li>Subject 2: 3 credits and 8 grade points.</li>
                <li>Subject 3: 3 credits and 10 grade points.</li>
              </ul>

              <p>
                Total weighted points = (4 × 9) + (3 × 8) + (3 × 10)
                = 90.
              </p>

              <p>Total credits = 4 + 3 + 3 = 10.</p>

              <p>
                <strong>CGPA = 90 ÷ 10 = 9.00</strong>
              </p>
            </div>

            <p>
              This example shows why credits matter. A subject with more
              credits contributes more to the weighted average than a
              subject with fewer credits.
            </p>
          </section>

          <section className="article-section">
            <h2>Why Do Subject Credits Matter?</h2>

            <p>
              Credits indicate the weight assigned to a subject under
              your university's academic system. In a credit-weighted
              calculation, a higher-credit subject has a greater effect
              on the result.
            </p>

            <p>
              For example, a grade point of 9 in a four-credit subject
              contributes 36 weighted points. The same grade point in
              a two-credit subject contributes 18 weighted points.
            </p>

            <p>
              Always enter the credit values listed in your official
              syllabus or academic records.
            </p>
          </section>

          <section className="article-section">
            <h2>Can You Convert CGPA to Percentage?</h2>

            <p>
              Some universities provide a specific formula for converting
              CGPA into a percentage, while others use a different method
              or do not use a direct conversion formula.
            </p>

            <p>
              There is no single conversion formula that applies to every
              institution. Check your university's examination guidelines
              before converting your CGPA for applications, scholarships,
              or official documents.
            </p>
          </section>

          <section className="article-section">
            <h2>Tips for Understanding Your CGPA</h2>

            <ul>
              <li>
                Keep track of grades and credits for every subject.
              </li>
              <li>
                Check whether your university uses semester GPA, cumulative
                GPA, or another grading measure.
              </li>
              <li>
                Use the official grade-point scale for your course.
              </li>
              <li>
                Review your results after grades are published.
              </li>
              <li>
                Ask your academic office if you are unsure how credits
                or failed subjects affect your official CGPA.
              </li>
            </ul>
          </section>

          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>CGPA Calculator FAQs</h2>

            <div className="faq-item">
              <h3>What does CGPA stand for?</h3>

              <p>
                CGPA stands for Cumulative Grade Point Average. It
                summarizes academic performance using grade points
                under an institution's grading system.
              </p>
            </div>

            <div className="faq-item">
              <h3>How is CGPA calculated using credits?</h3>

              <p>
                Multiply each subject's grade point by its credits, add
                the weighted points, and divide by the total credits
                included in the calculation.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I calculate CGPA for one semester?</h3>

              <p>
                Yes. Enter the subjects, credits, and grades for that
                semester. The result is a credit-weighted average of
                the subjects you entered.
              </p>
            </div>

            <div className="faq-item">
              <h3>Does every university use the same grade points?</h3>

              <p>
                No. Grade-point scales and academic rules vary by
                institution. This calculator uses the scale displayed
                in the tool, so compare it with your university's
                official grading system before relying on the result.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is CGPA the same as percentage?</h3>

              <p>
                No. CGPA is expressed as a grade-point average, while
                percentage is expressed out of 100. Any conversion
                should follow your institution's official formula.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}