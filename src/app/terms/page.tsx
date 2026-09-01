"use client";

import LegalDoc from "@/components/sections/LegalDoc";
import { sectionTermData } from "@/dummydata/supportData";

const introParagraphs = [
  "If you disagree with any part of these Terms, please discontinue using our Website immediately. We reserve the right to modify, alter or update these Terms at any time and you agree to be bound by such modifications, alterations and updates.",
  "The term 'you' refers to the user or viewer of our Website.",
];

const TermsOfService = () => {
  return (
    <LegalDoc
      heroSubtitle="TERMS OF USE"
      heroTitle="Terms Of Use"
      introParagraphs={introParagraphs}
      calloutText="Please read these Terms of Use carefully before using our Website. By accessing or using this Website, you agree to be bound by these Terms of Use."
      sections={sectionTermData}
    />
  );
};

export default TermsOfService;
