"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LegalDoc from "@/components/sections/LegalDoc";
import LegalSectionBody from "@/components/sections/LegalSectionBody";
import { sectionTermData } from "@/dummydata/supportData";
import { customColor } from "@/utils/theme/customColor";

interface LegalSectionText {
  title: string;
  paragraphs?: string[];
  listItems?: string[];
}

const TermsOfService = () => {
  const t = useTranslations("Terms");

  const sections = sectionTermData.map((section) => {
    const text = t.raw(`sections.${section.key}`) as LegalSectionText;
    return {
      id: section.id,
      title: text.title,
      content: <LegalSectionBody paragraphs={text.paragraphs} listItems={text.listItems} />,
    };
  });

  return (
    <LegalDoc
      heroSubtitle={t("heroSubtitle")}
      heroTitle={t("heroTitle")}
      introParagraphs={t.raw("intro") as string[]}
      calloutText={t("callout")}
      sections={sections}
      footerNote={
        <Box
          sx={{
            bgcolor: customColor.light,
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            border: `1px solid ${customColor.primary}40`,
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary", fontStyle: "italic" }}>
            {t("governingNotice")}
          </Typography>
        </Box>
      }
    />
  );
};

export default TermsOfService;
