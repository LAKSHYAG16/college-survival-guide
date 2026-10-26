import type { Metadata } from "next";
import StudyPlanner from "./StudyPlanner";

export const metadata: Metadata = {
  title: "College Study Planner & Task Organizer",
  description:
    "Plan your college study sessions with this free study planner. Organize subjects, assignments, deadlines and study hours into a clear, deadline-based plan.",
  alternates: {
    canonical: "/tools/study-planner",
  },
  openGraph: {
    title: "College Study Planner & Task Organizer",
    description:
      "Organize college assignments, revision tasks and deadlines with a free study planner.",
    url: "/tools/study-planner",
    type: "website",
  },
};

export default function StudyPlannerPage() {
  return <StudyPlanner />;
}