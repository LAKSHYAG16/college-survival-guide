"use client";

import { useState } from "react";

type Task = {
  id: number;
  subject: string;
  task: string;
  date: string;
  hours: string;
};

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

  function addTask() {
    setTasks((current) => [
      ...current,
      {
        id: Date.now(),
        subject: "",
        task: "",
        date: "",
        hours: "",
      },
    ]);
  }

  function removeTask(id: number) {
    setTasks((current) =>
      current.filter((task) => task.id !== id)
    );
  }

  function updateTask(
    id: number,
    field: keyof Omit<Task, "id">,
    value: string
  ) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              [field]: value,
            }
          : task
      )
    );

    setShowPlan(false);
  }

  function generatePlan() {
    const validTasks = tasks.filter(
      (task) =>
        task.subject.trim() &&
        task.task.trim() &&
        task.date &&
        Number(task.hours) > 0
    );

    if (validTasks.length === 0) {
      setShowPlan(false);
      return;
    }

    const sortedTasks = [...validTasks].sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    setTasks(sortedTasks);
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
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">STUDENT TOOL</p>

        <h1>
          Study Planner.
          <br />
          <span>Turn deadlines into a plan.</span>
        </h1>

        <p>
          Organize your subjects, tasks, deadlines and study time into
          one simple plan you can actually follow.
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
              Add each task, its deadline and the amount of study time
              you want to spend on it.
            </p>
          </div>

          <div className="planner-list">
            {tasks.map((task, index) => (
              <div className="planner-row" key={task.id}>
                <div className="planner-number">
                  {index + 1}
                </div>

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
                        updateTask(
                          task.id,
                          "subject",
                          event.target.value
                        )
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
                        updateTask(
                          task.id,
                          "task",
                          event.target.value
                        )
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
                      value={task.date}
                      onChange={(event) =>
                        updateTask(
                          task.id,
                          "date",
                          event.target.value
                        )
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
                        updateTask(
                          task.id,
                          "hours",
                          event.target.value
                        )
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

          {showPlan && (
            <div className="study-plan-result">
              <p className="eyebrow">YOUR STUDY PLAN</p>

              <h3>Upcoming tasks</h3>

              <div className="study-plan-list">
                {tasks.map((task) => (
                  <div
                    className="study-plan-item"
                    key={task.id}
                  >
                    <div>
                      <span className="guide-category">
                        {task.subject}
                      </span>

                      <h4>{task.task}</h4>
                    </div>

                    <div className="study-plan-details">
                      <span>{task.date}</span>
                      <span>{task.hours} hours</span>
                    </div>
                  </div>
                ))}
              </div>
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

          <h2>
            Break large academic goals into smaller tasks.
          </h2>

          <p>
            Instead of writing down something vague like
            &quot;study for exams,&quot; create specific tasks such as
            revising a chapter, solving practice questions or preparing
            a particular topic.
          </p>

          <p>
            Give each task a realistic deadline and estimate how much
            focused study time it requires.
          </p>
        </div>
      </section>
    </main>
  );
}