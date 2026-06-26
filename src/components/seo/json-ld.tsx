export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RosaAI",
    url: "https://rosaai.ca",
    logo: "https://rosaai.ca/logo-horizontal.png",
    description:
      "AI consulting and workflow automation for Alberta businesses. We help businesses automate workflows, build modern websites, and implement practical AI solutions.",
    sameAs: [
      "https://www.linkedin.com/company/rosaai",
      "https://www.instagram.com/rosaai.ca",
      "https://www.facebook.com/rosaai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-587-804-2073",
      contactType: "customer service",
      email: "crystel@rosaai.ca",
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rosaai.ca/#localbusiness",
    name: "RosaAI",
    url: "https://rosaai.ca",
    logo: "https://rosaai.ca/logo-horizontal.png",
    image: "https://rosaai.ca/logo-horizontal.png",
    description:
      "AI consulting, workflow automation, and website design for small businesses in Alberta, Canada. Based in Edmonton, serving Strathcona County, Calgary, and across the province.",
    telephone: "+1-587-804-2073",
    email: "crystel@rosaai.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
    areaServed: [
      {
        "@type": "Province",
        name: "Alberta",
      },
      {
        "@type": "City",
        name: "Edmonton",
      },
      {
        "@type": "City",
        name: "Calgary",
      },
      {
        "@type": "AdministrativeArea",
        name: "Strathcona County",
      },
    ],
    priceRange: "$$",
    knowsAbout: [
      "Workflow Automation",
      "AI Implementation",
      "Website Design",
      "n8n Automation",
      "Business Process Automation",
      "AI Consulting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  authorName: string;
}

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  slug,
  authorName,
}: BlogPostingJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: datePublished,
    url: `https://rosaai.ca/blog/${slug}`,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "RosaAI",
      url: "https://rosaai.ca",
      logo: {
        "@type": "ImageObject",
        url: "https://rosaai.ca/logo-horizontal.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rosaai.ca/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
