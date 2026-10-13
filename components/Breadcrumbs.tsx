
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pageLabels: Record<string, string> = {
  academics: "Academics",
  career: "Career",
  money: "Money",
  "college-life": "College Life",
  productivity: "Productivity",
  tools: "Tools",

  "how-to-study-for-college-exams":
    "How to Study for College Exams",
  "resume-for-internship-no-experience":
    "Internship Resume Guide",
  "college-essentials-checklist":
    "College Essentials Checklist",
  "student-budget-guide":
    "Student Budget Guide",
  "how-to-stop-procrastinating":
    "How to Stop Procrastinating",

  "cgpa-calculator": "CGPA Calculator",
  "attendance-calculator": "Attendance Calculator",
  "study-planner": "Study Planner",
};

function formatLabel(segment: string) {
  return (
    pageLabels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  // Keep the homepage clean.
  if (segments.length === 0) return null;

  const items = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      href: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.href}>
              {index > 0 && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  /
                </span>
              )}

              {isCurrent ? (
                <span aria-current="page" className="breadcrumb-current">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
