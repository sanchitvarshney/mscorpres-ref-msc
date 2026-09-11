"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LegalDoc from "@/components/sections/LegalDoc";
import LegalSectionBody from "@/components/sections/LegalSectionBody";
import { sectionData } from "@/dummydata/supportData";
import { customColor } from "@/utils/theme/customColor";

interface LegalSectionText {
  title: string;
  paragraphs?: string[];
  listItems?: string[];
}

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");
  const table = t.raw("table") as { headers: string[]; rows: string[][] };

  const sections = sectionData.map((section) => {
    const text = t.raw(`sections.${section.key}`) as LegalSectionText;
    return {
      id: section.id,
      title: text.title,
      content: (
        <LegalSectionBody
          paragraphs={text.paragraphs}
          listItems={text.listItems}
          table={section.key === "collection" ? table : undefined}
        />
      ),
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
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontStyle: "italic", mb: 2.5 }}
          >
            {t("governingNotice")}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: customColor.primary }}
          >
            {t("contactHeading")}
          </Typography>
          <Typography variant="body1">
            {t("contactText")}{" "}
            <Box component="span" sx={{ fontWeight: 600, color: customColor.primary }}>
              marketing@mscorpres.in
            </Box>
          </Typography>
        </Box>
      }
    />
  );
};

export default PrivacyPolicy;
