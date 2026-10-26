import Link from "next/link";
import type { Metadata } from "next";

const guides = [
  {
    title: "How to Make a Resume for an Internship With No Experience",
    description:
      "Learn what to include in your first internship resume, even if you have no previous work experience.",
    href: "/career/resume-for-internship-no-experience",
  },
];

export const metadata: Metadata = {
  title: "College Career & Internship Guides",
  description:
    "Explore internship applications, resume writing, student projects, GitHub portfolios and career preparation tips for college students.",
  alternates: {
    canonical: "/career",
  },
};

export default function CareerPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">CAREER</p>

        <h1>
          Start building
          <br />
          <span>your career early.</span>
        </h1>

        <p>
          Discover practical guidance on internship applications,
          resumes, college projects, GitHub portfolios and preparing
          for your first professional opportunity.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAREER GUIDES</p>
            <h2>Turn college experience into career opportunities.</h2>
          </div>

          <p>
            You can begin preparing for internships before you have
            formal work experience. Identify the skills you are
            learning, the projects you have completed and the
            opportunities you want to pursue. A clear plan can help
            you turn your college experience into evidence of your
            abilities.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <Link
              href={guide.href}
              className="guide-card"
              key={guide.title}
            >
              <span className="guide-category">CAREER</span>

              <h3>{guide.title}</h3>

              <p>{guide.description}</p>

              <span className="guide-link">
                Read guide <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">START HERE</p>

          <h2>
            You don't need years of experience to start building a career.
          </h2>

          <p>
            College projects, coursework, technical skills,
            volunteering and personal projects can help demonstrate
            your abilities. Describe what you built, which tools you
            used, what your responsibilities were and what you learned.
            Keep your claims accurate and focus on evidence of your skills.
          </p>

          <p>
            Start by identifying the roles that interest you. Read
            internship descriptions to understand the skills employers
            are seeking, then compare those requirements with your
            current knowledge. This can help you decide what to learn
            and which projects to build next.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAREER PREPARATION</p>
            <h2>Three practical steps to get started.</h2>
          </div>

          <p>
            You don't need to prepare everything at once. Build your
            skills, document your work and improve your application
            materials as you gain experience.
          </p>
        </div>

        <div className="guide-grid">
          <div className="guide-card">
            <h3>Build relevant projects</h3>
            <p>
              Choose projects that demonstrate skills related to the
              internships you want. Document your work, explain the
              problem your project solves and describe your individual
              contribution.
            </p>
          </div>

          <div className="guide-card">
            <h3>Create a clear resume</h3>
            <p>
              Include your education, relevant skills, projects and
              achievements. Use simple formatting, describe your work
              clearly and tailor your resume to each suitable
              opportunity.
            </p>
          </div>

          <div className="guide-card">
            <h3>Prepare your portfolio</h3>
            <p>
              Keep your GitHub repositories organised, add useful
              README files and provide clear instructions for running
              your projects. Make it easy for recruiters to understand
              your work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">INTERNSHIP APPLICATIONS</p>

          <h2>How to prepare for internship opportunities.</h2>

          <p>
            Before applying, check the eligibility requirements,
            responsibilities and skills listed in the internship
            description. Make sure your resume highlights the most
            relevant coursework, projects and experience you have.
            Follow the application instructions carefully and submit
            any requested documents.
          </p>

          <p>
            Keep track of the positions you apply for, application
            dates and follow-up actions. Preparing a short explanation
            of your projects can also help you discuss your work during
            interviews. Focus on understanding your own contributions
            rather than memorising answers.
          </p>

          <p>
            If you are preparing your first application, start with our
            guide on{" "}
            <Link href="/career/resume-for-internship-no-experience">
              creating an internship resume with no experience
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="info-box">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>

          <h2>Career and internship FAQs</h2>

          <h3>Can I get an internship without previous work experience?</h3>
          <p>
            Yes, some internships are designed for students who are
            still learning. Relevant projects, coursework, skills and
            a willingness to learn can help demonstrate your potential.
            Always check the eligibility requirements for each role.
          </p>

          <h3>What should a college student include in a resume?</h3>
          <p>
            Include your education, relevant skills, academic or
            personal projects, achievements and any applicable
            experience. Prioritise information that relates to the
            opportunity you are applying for.
          </p>

          <h3>How can I make my GitHub portfolio more useful?</h3>
          <p>
            Choose repositories that represent your skills, provide
            clear README files and explain each project's purpose,
            technologies and setup instructions. Make sure the
            documentation accurately describes your contribution.
          </p>

          <h3>When should I start preparing for internships?</h3>
          <p>
            You can start exploring roles and building relevant skills
            while studying. Application timelines and eligibility
            requirements vary, so check opportunities early and plan
            around your academic commitments.
          </p>
        </div>
      </section>
    </main>
  );
}