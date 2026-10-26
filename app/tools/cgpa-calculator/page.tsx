import type { Metadata } from "next";
import CGPACalculator from "./CGPACalculator";

export const metadata: Metadata = {
  title: "CGPA Calculator for College Students",
  description:
    "Free CGPA calculator for college students. Calculate your credit-weighted CGPA using subject credits and grade points, with a worked example and calculation guide.",
  alternates: {
    canonical: "/tools/cgpa-calculator",
  },
};

export default function CGPACalculatorPage() {
  return <CGPACalculator />;
}