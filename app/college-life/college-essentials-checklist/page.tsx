import {
  articleSchema,
  faqSchema,
} from "@/lib/structured-data";

import Link from "next/link";

export const metadata = {
  title: "College Essentials Checklist for First-Year Students",
  description:
    "A practical college essentials checklist for first-year students covering documents, clothing, electronics, study supplies, personal items and hostel essentials.",
};

const sections = [
  {
    title: "Documents & Important Items",
    items: [
      "College admission documents",
      "Government ID and photocopies",
      "Passport-size photographs",
      "Academic certificates and mark sheets",
      "Bank or payment documents if required",
      "Emergency contact information",
    ],
  },
  {
    title: "Clothing",
    items: [
      "Everyday college clothes",
      "Comfortable jeans or trousers",
      "T-shirts and casual tops",
      "Formal outfit for presentations or events",
      "Comfortable footwear",
      "Sleepwear",
      "Underwear and socks",
      "Weather-appropriate clothing",
    ],
  },
  {
    title: "Electronics",
    items: [
      "Laptop and charger",
      "Phone and charger",
      "Power bank",
      "Earphones or headphones",
      "Extension board",
      "USB drive or external storage",
      "Laptop bag or backpack",
    ],
  },
  {
    title: "Study Supplies",
    items: [
      "Notebooks",
      "Pens and pencils",
      "Highlighters",
      "Sticky notes",
      "Calculator if required for your course",
      "Folders for important documents",
      "A small desk organizer",
    ],
  },
  {
    title: "Personal & Everyday Essentials",
    items: [
      "Toiletries",
      "Towels",
      "Water bottle",
      "Basic medicines and personal health supplies",
      "Umbrella",
      "Laundry bag",
      "Small lock",
      "Reusable shopping bag",
    ],
  },
  {
    title: "Hostel & Room Essentials",
    items: [
      "Bedsheets",
      "Pillow and pillow covers",
      "Blanket if required",
      "Hangers",
      "Storage organizers",
      "Desk lamp if your room needs one",
      "Small cleaning supplies",
      "Clothes drying clips",
    ],
  },
];

export default function CollegeEssentialsChecklistPage() {
  const article = articleSchema({
    title: "College Essentials Checklist for First-Year Students",
    description:
      "A practical college essentials checklist covering documents, clothes, electronics, study supplies, hostel items and everyday necessities for first-year students.",
    url: "https://college-survival-guide.vercel.app/college-life/college-essentials-checklist",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
  });

  const faq = faqSchema([
    {
      question: "What should I bring to college as a first-year student?",
      answer:
        "Bring essential documents, clothes, basic electronics, study supplies, toiletries and everyday items. If you live in a hostel, also check which items your accommodation already provides.",
    },
    {
      question: "What should I not overpack for college?",
      answer:
        "Avoid bringing excessive clothes, duplicate electronics, unnecessary kitchen items and things that your hostel or accommodation already provides.",
    },
    {
      question: "What electronics are useful for college students?",
      answer:
        "A laptop, phone, chargers, power bank and headphones are commonly useful. Other electronics depend on your course and personal needs.",
    },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq),
        }}
      />
      {/* Hero */}
      <section className="article-hero">
        <div className="article-hero-inner">
          <p className="eyebrow">COLLEGE LIFE</p>

          <h1>
            College Essentials Checklist
            <br />
            <span>for First-Year Students</span>
          </h1>

          <p className="article-intro">
            A practical checklist of the things you may want to prepare before
            starting college, from important documents and electronics to
            everyday essentials and hostel supplies.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="article-page">
        <div className="article-content">
          <div className="article-meta">
            <span>COLLEGE LIFE</span>
            <span>•</span>
            <span>FIRST-YEAR GUIDE</span>
          </div>

          <p className="article-lead">
            Starting college usually means preparing for a lot of new
            responsibilities at the same time. Whether you're moving into a
            hostel, living away from home or simply starting a new academic
            routine, having the basics ready can make the transition easier.
          </p>

          <p>
            You don't need to buy everything on this list. Use it as a starting
            point and adjust it based on your college, accommodation and
            personal needs.
          </p>

          {/* Quick checklist */}
          <div className="article-callout">
            <p className="eyebrow">QUICK CHECK</p>

            <h2>Before you leave for college</h2>

            <ul>
              <li>Important documents are packed</li>
              <li>Laptop and phone chargers are packed</li>
              <li>Basic clothing and toiletries are ready</li>
              <li>College-specific requirements have been checked</li>
              <li>Emergency contacts are saved</li>
            </ul>
          </div>

          {/* Main checklist */}
          {sections.map((section) => (
            <section className="article-section" key={section.title}>
              <h2>{section.title}</h2>

              <ul className="checklist">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Don't overpack */}
          <section className="article-section">
            <h2>Things You Don't Need to Overpack</h2>

            <p>
              One common mistake during the first move to college is trying to
              bring everything from home. Start with the essentials and add
              things later if you actually need them.
            </p>

            <ul>
              <li>Too many clothes</li>
              <li>Large quantities of stationery</li>
              <li>Kitchen equipment if your hostel already provides it</li>
              <li>Decorations before seeing your actual room</li>
              <li>Books you may never use</li>
            </ul>
          </section>

          {/* First day */}
          <section className="article-section">
            <h2>First-Day College Checklist</h2>

            <p>
              Keep your first day simple. Make sure you have the essentials
              rather than carrying your entire room with you.
            </p>

            <ul className="checklist">
              <li>
                <span className="check-icon">✓</span>
                <span>College ID or required identification</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Phone</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Notebook and pen</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>Water bottle</span>
              </li>

              <li>
                <span className="check-icon">✓</span>
                <span>College timetable or schedule</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section">
            <p className="eyebrow">FAQ</p>

            <h2>College Essentials Checklist: FAQs</h2>

            <div className="faq-item">
              <h3>What should I bring to college for the first time?</h3>

              <p>
                Start with important documents, basic clothing, electronics,
                study supplies, toiletries and any items specifically required
                by your college or accommodation.
              </p>
            </div>

            <div className="faq-item">
              <h3>How many clothes should I take to college?</h3>

              <p>
                There is no universal number. A practical approach is to bring
                enough everyday clothes for your normal laundry schedule and
                add formal and weather-specific clothing as needed.
              </p>
            </div>

            <div className="faq-item">
              <h3>What electronics should a college student bring?</h3>

              <p>
                A phone and charger are usually essential. Depending on your
                course, a laptop, headphones, power bank and extension board
                may also be useful.
              </p>
            </div>
          </section>

          {/* Related guides */}
          <section className="article-related">
            <p className="eyebrow">KEEP READING</p>

            <h2>More College Survival Guides</h2>

            <div className="related-grid">
              <Link
                href="/academics/how-to-study-for-college-exams"
                className="related-card"
              >
                <span>ACADEMICS</span>
                <h3>How to Study Effectively for College Exams</h3>
                <p>Practical strategies for preparing for college exams.</p>
              </Link>

              <Link
                href="/productivity/how-to-stop-procrastinating"
                className="related-card"
              >
                <span>PRODUCTIVITY</span>
                <h3>How to Stop Procrastinating as a College Student</h3>
                <p>
                  Simple techniques for getting assignments and studying done.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}