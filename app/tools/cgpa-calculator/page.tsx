import type { Metadata } from "next";
import CGPACalculator from "./CGPACalculator";

export const metadata: Metadata = {
  title: "CGPA Calculator for College Students",
  description:
    "Free CGPA calculator for college students. Enter your subject credits and grades to calculate your semester CGPA quickly.",
  alternates: {
    canonical: "/tools/cgpa-calculator",
  },
};

export default function CGPACalculatorPage() {
  return <CGPACalculator />;
}