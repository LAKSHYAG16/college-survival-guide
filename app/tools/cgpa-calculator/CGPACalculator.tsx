"use client";

import { useState } from "react";

type Subject = {
  id: number;
  credits: string;
  grade: string;
};

const gradePoints: Record<string, number> = {
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

  function addSubject() {
    setSubjects((current) => [
      ...current,
      {
        id: Date.now(),
        credits: "",
        grade: "",
      },
    ]);
  }

  function removeSubject(id: number) {
    setSubjects((current) =>
      current.filter((subject) => subject.id !== id)
    );
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
  }

  function calculateCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (const subject of subjects) {
      const credits = Number(subject.credits);
      const points = gradePoints[subject.grade];

      if (!credits || !subject.grade || points === undefined) {
        continue;
      }

      totalCredits += credits;
      totalPoints += credits * points;
    }

    if (totalCredits === 0) {
      setCgpa(null);
      return;
    }

    const result = totalPoints / totalCredits;

    setCgpa(Number(result.toFixed(2)));
  }

  function resetCalculator() {
    setSubjects([
      { id: 1, credits: "", grade: "" },
      { id: 2, credits: "", grade: "" },
      { id: 3, credits: "", grade: "" },
    ]);

    setCgpa(null);
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
          Calculate your semester CGPA using your subjects, credits and
          grades. No account or complicated setup required.
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
              Add the credit value and grade for each subject.
            </p>
          </div>

          <div className="subject-header">
            <span>Subject</span>
            <span>Credits</span>
            <span>Grade</span>
            <span></span>
          </div>

          <div className="subject-list">
            {subjects.map((subject, index) => (
              <div className="subject-row" key={subject.id}>
                <div className="subject-number">
                  {index + 1}
                </div>

                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="Credits"
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

          {cgpa !== null && (
            <div className="calculator-result">
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

          <h2>
            CGPA is calculated using your credit-weighted grades.
          </h2>

          <p>
            For each subject, the grade point is multiplied by the
            subject&apos;s credits. The total grade points are then
            divided by the total number of credits.
          </p>

          <p>
            <strong>
              CGPA = Total (Credit × Grade Point) ÷ Total Credits
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}