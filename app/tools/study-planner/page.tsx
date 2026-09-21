import type { Metadata } from "next";
import StudyPlanner from "./StudyPlanner";

export const metadata: Metadata = {
  title: "Study Planner for College Students",
  description:
    "Free study planner for college students. Organize subjects, study tasks, deadlines and available study time into a simple study plan.",
  alternates: {
    canonical: "/tools/study-planner",
  },
};

export default function StudyPlannerPage() {
  return <StudyPlanner />;
}