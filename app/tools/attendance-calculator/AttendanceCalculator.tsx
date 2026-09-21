"use client";

import { useState } from "react";

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState("");
  const [conducted, setConducted] = useState("");
  const [target, setTarget] = useState("75");

  const [result, setResult] = useState<{
    percentage: number;
    classesNeeded: number;
    classesCanMiss: number;
  } | null>(null);

  function calculateAttendance() {
    const attendedClasses = Number(attended);
    const totalClasses = Number(conducted);
    const targetPercentage = Number(target);

    if (
      !attended ||
      !conducted ||
      !target ||
      attendedClasses < 0 ||
      totalClasses <= 0 ||
      attendedClasses > totalClasses ||
      targetPercentage <= 0 ||
      targetPercentage > 100
    ) {
      setResult(null);
      return;
    }

    const currentPercentage =
      (attendedClasses / totalClasses) * 100;

    let classesNeeded = 0;
    let classesCanMiss = 0;

    if (currentPercentage < targetPercentage) {
      const targetDecimal = targetPercentage / 100;

      classesNeeded = Math.ceil(
        (targetDecimal * totalClasses - attendedClasses) /
          (1 - targetDecimal)
      );
    } else {
      const targetDecimal = targetPercentage / 100;

      classesCanMiss = Math.floor(
        attendedClasses / targetDecimal - totalClasses
      );
    }

    setResult({
      percentage: Number(currentPercentage.toFixed(2)),
      classesNeeded,
      classesCanMiss: Math.max(0, classesCanMiss),
    });
  }

  function resetCalculator() {
    setAttended("");
    setConducted("");
    setTarget("75");
    setResult(null);
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">STUDENT TOOL</p>

        <h1>
          Attendance Calculator.
          <br />
          <span>Know your safe limit.</span>
        </h1>

        <p>
          Calculate your current attendance and find out how many classes
          you need to attend or can miss to reach your target percentage.
        </p>
      </section>

      <section className="section">
        <div className="calculator-card attendance-card">
          <div className="calculator-header">
            <div>
              <p className="eyebrow">ATTENDANCE CALCULATOR</p>

              <h2>Enter your attendance</h2>
            </div>

            <p>
              Enter the number of classes attended, classes conducted and
              your required attendance percentage.
            </p>
          </div>

          <div className="attendance-input-grid">
            <div className="calculator-field">
              <label htmlFor="attended">
                Classes Attended
              </label>

              <input
                id="attended"
                type="number"
                min="0"
                placeholder="e.g. 32"
                value={attended}
                onChange={(event) =>
                  setAttended(event.target.value)
                }
              />
            </div>

            <div className="calculator-field">
              <label htmlFor="conducted">
                Classes Conducted
              </label>

              <input
                id="conducted"
                type="number"
                min="1"
                placeholder="e.g. 40"
                value={conducted}
                onChange={(event) =>
                  setConducted(event.target.value)
                }
              />
            </div>

            <div className="calculator-field">
              <label htmlFor="target">
                Target Attendance
              </label>

              <div className="percentage-input">
                <input
                  id="target"
                  type="number"
                  min="1"
                  max="100"
                  step="0.1"
                  value={target}
                  onChange={(event) =>
                    setTarget(event.target.value)
                  }
                />

                <span>%</span>
              </div>
            </div>
          </div>

          <div className="calculator-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={resetCalculator}
            >
              Reset
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={calculateAttendance}
            >
              Calculate Attendance
            </button>
          </div>

          {result !== null && (
            <div className="attendance-result">
              <p className="eyebrow">CURRENT ATTENDANCE</p>

              <div className="cgpa-value">
                {result.percentage}%
              </div>

              {result.percentage < Number(target) ? (
                <div className="attendance-message">
                  <h3>
                    You need to attend{" "}
                    {result.classesNeeded} more{" "}
                    {result.classesNeeded === 1
                      ? "class"
                      : "classes"}
                  </h3>

                  <p>
                    Attend the next{" "}
                    <strong>{result.classesNeeded}</strong>{" "}
                    consecutive classes to reach approximately{" "}
                    <strong>{target}%</strong> attendance.
                  </p>
                </div>
              ) : (
                <div className="attendance-message">
                  <h3>
                    You can miss{" "}
                    {result.classesCanMiss}{" "}
                    {result.classesCanMiss === 1
                      ? "class"
                      : "classes"}
                  </h3>

                  <p>
                    You can miss up to{" "}
                    <strong>{result.classesCanMiss}</strong>{" "}
                    {result.classesCanMiss === 1
                      ? "class"
                      : "classes"}{" "}
                    and remain at or above your{" "}
                    <strong>{target}%</strong> target.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>
            Attendance is simply the percentage of classes you attended.
          </h2>

          <p>
            Your current attendance is calculated by dividing the number
            of classes attended by the total number of classes conducted
            and multiplying the result by 100.
          </p>

          <p>
            <strong>
              Attendance % = (Classes Attended ÷ Classes Conducted) × 100
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}