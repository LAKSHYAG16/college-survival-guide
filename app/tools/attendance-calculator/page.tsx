import type { Metadata } from "next";
import AttendanceCalculator from "./AttendanceCalculator";

export const metadata: Metadata = {
  title: "Attendance Calculator for College Students",
  description:
    "Free attendance calculator for college students. Find your current attendance percentage, classes needed to reach your target, and classes you can safely miss.",
  alternates: {
    canonical: "/tools/attendance-calculator",
  },
};

export default function AttendanceCalculatorPage() {
  return <AttendanceCalculator />;
}