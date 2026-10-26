"use client";

import { useState } from "react";

type Task = {
  id: number;
  subject: string;
  task: string;
  date: string;
  hours: string;
};

const createEmptyTask = (): Task => ({
  id: Date.now() + Math.random(),
  subject: "",
  task: "",
  date: "",
  hours: "",
});

export default function StudyPlanner() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      subject: "",
      task: "",
      date: "",
      hours: "",
    },
  ]);

  const [showPlan, setShowPlan] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata",
  });

  const validTasks = tasks.filter(
    (task) =>
      task.subject.trim() &&
      task.task.trim() &&
      task.date &&
      Number(task.hours) > 0
  );

  const sortedTasks = [...validTasks].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const totalHours = sortedTasks.reduce(
    (total, task) => total + Number(task.hours),
    0
  );

  function addTask() {
    setTasks((current) => [...current, createEmptyTask()]);
    setShowPlan(false);
    setError("");
  }

  function removeTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
    setShowPlan(false);
    setError("");
  }

  function updateTask(
    id: number,
    field: keyof Omit<Task, "id">,
    value: string
  ) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, [field]: value } : task
      )
    );

    setShowPlan(false);
    setError("");
  }

  function generatePlan() {
    if (tasks.length === 0) {
      setError("Add at least one task before generating your study plan.");
      setShowPlan(false);
      return;
    }

    for (let index = 0; index < tasks.length; index++) {
      const task = tasks[index];

      if (!task.subject.trim()) {
        setError(`Please enter a subject for task ${index + 1}.`);
        setShowPlan(false);
        return;
      }

      if (!task.task.trim()) {
        setError(`Please enter a task description for task ${index + 1}.`);
        setShowPlan(false);
        return;
      }

      if (!task.date) {
        setError(`Please select a deadline for task ${index + 1}.`);
        setShowPlan(false);
        return;
      }

      if (task.date < today) {
        setError(
          `Task ${index + 1} has a past deadline. Choose today or a future date.`
        );
        setShowPlan(false);
        return;
      }

      const hours = Number(task.hours);

      if (!task.hours || !Number.isFinite(hours) || hours <= 0) {
        setError(
          `Enter a study duration greater than zero for task ${index + 1}.`
        );
        setShowPlan(false);
        return;
      }
    }

    setError("");
    setShowPlan(true);
  }

  function resetPlanner() {
    setTasks([
      {
        id: 1,
        subject: "",
        task: "",
        date: "",
        hours: "",
      },
    ]);

    setShowPlan(false);
    setError("");
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">FREE STUDENT TOOL</p>

        <h1>
          College Study Planner.
          <br />
          <span>Turn deadlines into a plan.</span>
        </h1>

        <p>
          Organize your subjects, assignments, revision tasks and deadlines
          into one clear study plan. Estimate your study hours and see which
          tasks need your attention first.
        </p>
      </section>

      <section className="section">
        <div className="calculator-card planner-card">
          <div className="calculator-header">
            <div>
              <p className="eyebrow">STUDY PLANNER</p>
              <h2>Add your study tasks</h2>
            </div>

            <p>
              Enter each subject, task, deadline and estimated study duration.
              Your completed plan will be sorted by deadline.
            </p>
          </div>

          <div className="planner-list">
            {tasks.map((task, index) => (
              <div className="planner-row" key={task.id}>
                <div className="planner-number">{index + 1}</div>

                <div className="planner-fields">
                  <div className="calculator-field">
                    <label htmlFor={`subject-${task.id}`}>
                      Subject
                    </label>

                    <input
                      id={`subject-${task.id}`}
                      type="text"
                      placeholder="e.g. Machine Learning"
                      value={task.subject}
                      onChange={(event) =>
                        updateTask(task.id, "subject", event.target.value)
                      }
                    />
                  </div>

                  <div className="calculator-field">
                    <label htmlFor={`task-${task.id}`}>
                      Task
                    </label>

                    <input
                      id={`task-${task.id}`}
                      type="text"
                      placeholder="e.g. Revise regression"
                      value={task.task}
                      onChange={(event) =>
                        updateTask(task.id, "task", event.target.value)
                      }
                    />
                  </div>

                  <div className="calculator-field">
                    <label htmlFor={`date-${task.id}`}>
                      Deadline
                    </label>

                    <input
                      id={`date-${task.id}`}
                      type="date"
                      min={today}
                      value={task.date}
                      onChange={(event) =>
                        updateTask(task.id, "date", event.target.value)
                      }
                    />
                  </div>

                  <div className="calculator-field">
                    <label htmlFor={`hours-${task.id}`}>
                      Study Hours
                    </label>

                    <input
                      id={`hours-${task.id}`}
                      type="number"
                      min="0.5"
                      step="0.5"
                      placeholder="e.g. 2"
                      value={task.hours}
                      onChange={(event) =>
                        updateTask(task.id, "hours", event.target.value)
                      }
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="remove-subject"
                  onClick={() => removeTask(task.id)}
                  disabled={tasks.length === 1}
                  aria-label={`Remove task ${index + 1}`}
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
              onClick={addTask}
            >
              + Add Task
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={generatePlan}
            >
              Generate Study Plan
            </button>
          </div>

          {error && (
            <p className="attendance-message" role="alert">
              {error}
            </p>
          )}

          {showPlan && (
            <div className="study-plan-result" aria-live="polite">
              <p className="eyebrow">YOUR STUDY PLAN</p>

              <h3>Upcoming tasks</h3>

              <div className="calculator-results">
                <div className="result-item">
                  <span>Total tasks</span>
                  <strong>{sortedTasks.length}</strong>
                </div>

                <div className="result-item">
                  <span>Total study time</span>
                  <strong>
                    {Number(totalHours.toFixed(2))} hours
                  </strong>
                </div>
              </div>

              <div className="study-plan-list">
                {sortedTasks.map((task) => {
                  const daysRemaining = Math.round(
                    (new Date(`${task.date}T12:00:00`).getTime() -
                      new Date(`${today}T12:00:00`).getTime()) /
                      (1000 * 60 * 60 * 24)
                  );

                  return (
                    <div className="study-plan-item" key={task.id}>
                      <div>
                        <span className="guide-category">
                          {task.subject}
                        </span>

                        <h4>{task.task}</h4>
                      </div>

                      <div className="study-plan-details">
                        <span>
                          {new Date(
                            `${task.date}T12:00:00`
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            timeZone: "Asia/Kolkata",
                          })}
                        </span>

                        <span>
                          {Number(task.hours)}{" "}
                          {Number(task.hours) === 1 ? "hour" : "hours"}
                        </span>

                        <span>
                          {daysRemaining === 0
                            ? "Due today"
                            : daysRemaining === 1
                              ? "Due tomorrow"
                              : `${daysRemaining} days remaining`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p>
                Tip: Break longer study sessions into smaller blocks and
                schedule short breaks between them. The total hours shown are
                estimates based on the durations you entered.
              </p>
            </div>
          )}

          <button
            type="button"
            className="reset-button"
            onClick={resetPlanner}
          >
            Reset planner
          </button>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">HOW TO USE IT</p>

          <h2>Break large academic goals into smaller tasks.</h2>

          <p>
            Instead of writing something vague like &quot;study for exams,&quot;
            create specific tasks such as revising a chapter, solving practice
            questions or preparing a particular topic.
          </p>

          <p>
            Add a realistic deadline and estimate how much focused study time
            each task requires. The planner organizes your tasks by deadline
            and calculates your total estimated study hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">STUDY PLANNING GUIDE</p>

          <h2>How to make a study plan that works</h2>

          <h3>1. List your subjects and deadlines</h3>
          <p>
            Start by writing down upcoming exams, assignments, presentations
            and revision goals. Include small tasks that you can complete in
            one sitting rather than relying on broad goals.
          </p>

          <h3>2. Estimate the time each task needs</h3>
          <p>
            Consider the difficulty of the topic and how much you already
            understand. Reserve more time for challenging subjects and practice
            questions, and avoid assuming that every task will take the same
            amount of time.
          </p>

          <h3>3. Prioritize the closest deadlines</h3>
          <p>
            Complete urgent work before less time-sensitive tasks, while
            leaving enough time to revise for exams. The planner sorts tasks
            by deadline, helping you see what is due first.
          </p>

          <h3>4. Leave room for breaks and revision</h3>
          <p>
            Do not fill every available hour with studying. Include breaks,
            meals, classes and time to review difficult concepts. A realistic
            schedule is easier to maintain than an overloaded one.
          </p>

          <h3>5. Review your plan regularly</h3>
          <p>
            Update your task list when deadlines change or assignments take
            longer than expected. Use your estimated study hours to help
            distribute your workload, not as a guarantee of how long every
            task will take.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">EXAMPLE</p>

          <h2>Example of a college study plan</h2>

          <p>
            Imagine you have a Machine Learning quiz, a database assignment
            and a statistics exam approaching. You could enter these tasks
            with their deadlines and estimated study hours.
          </p>

          <ul>
            <li>
              <strong>Machine Learning:</strong> Revise regression — 2 hours.
            </li>
            <li>
              <strong>Database Management:</strong> Complete SQL exercises —
              1.5 hours.
            </li>
            <li>
              <strong>Statistics:</strong> Practice probability questions —
              3 hours.
            </li>
          </ul>

          <p>
            If you enter these estimates, the planner calculates a total of
            6.5 study hours and sorts the tasks by their selected deadlines.
            These are example tasks, not a recommended schedule for every
            student.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>

          <h2>Study planner FAQs</h2>

          <h3>What is a study planner?</h3>
          <p>
            A study planner helps students organize academic tasks, deadlines
            and estimated study time so they can manage their workload more
            clearly.
          </p>

          <h3>How many study hours should I plan per day?</h3>
          <p>
            It depends on your classes, workload, subject difficulty and
            personal routine. Start with a realistic amount of focused study
            time and adjust it based on your progress.
          </p>

          <h3>Can I use this planner for exam preparation?</h3>
          <p>
            Yes. Add revision sessions, practice questions and mock tests as
            separate tasks, each with a deadline and estimated duration.
          </p>

          <h3>Does the planner automatically create a daily timetable?</h3>
          <p>
            No. It organizes tasks by deadline and totals the study hours you
            enter. You still need to decide when to complete each task during
            your day.
          </p>

          <h3>Does the planner save my tasks?</h3>
          <p>
            This version stores tasks in the current page state. It does not
            save them to an account or database, so resetting the planner or
            refreshing the page will clear the current plan.
          </p>
        </div>
      </section>
    </main>
  );
}