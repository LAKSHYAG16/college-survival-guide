export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "College Survival Guide",
    url: "https://college-survival-guide-plum.vercel.app",
    description:
      "Practical guides, student tools and useful advice for academics, careers, money, productivity and everyday college life.",
    inLanguage: "en-IN",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "College Survival Guide",
    url: "https://college-survival-guide-plum.vercel.app",
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  const normalizeDate = (date: string) => {
    if (date.length === 10) {
      return `${date}T00:00:00+05:30`;
    }

    return date;
  };

  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,
    description,
    url,

    image: [image],

    datePublished: normalizeDate(datePublished),
    dateModified: normalizeDate(dateModified),

    author: {
      "@type": "Organization",
      name: "College Survival Guide",
      url: "https://college-survival-guide-plum.vercel.app",
    },

    publisher: {
      "@type": "Organization",
      name: "College Survival Guide",
      url: "https://college-survival-guide-plum.vercel.app",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function faqSchema(
  questions: {
    question: string;
    answer: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}