"use client";

import { Box, Typography } from "@mui/material";
import LegalDoc from "@/components/sections/LegalDoc";
import { sectionData } from "@/dummydata/supportData";
import { customColor } from "@/utils/theme/customColor";

const introParagraphs = [
  'The protection and security of your personal information is among our top priorities. This Privacy Policy ("Policy") discloses our practice with respect to the information collected from the users of this Website and for that personal information that you provide us while visiting our website or participating in our events, campaigns and surveys.',
  "You are hereby advised to read this Policy carefully and fully understand the nature and purpose of gathering and/or collecting sensitive, personal and other information and the usage, disclosure and sharing of such information. By viewing or accessing the Website or by requesting any services through the Website, you hereby also consent to MsC for sharing information with third party service providers engaged by MsC in relation to its operations and to the transfer and/or storage of personal information and data across borders. We store your information reliably and do transfer your personal information to third parties or service providers to fulfill your requests or activity needs. We always make all appropriate arrangements in order to ensure correct and secure data processing in compliance with applicable data protection law.",
];

const PrivacyPolicy = () => {
  return (
    <LegalDoc
      heroSubtitle="PRIVACY POLICY"
      heroTitle="Privacy Policy"
      introParagraphs={introParagraphs}
      calloutText="The Privacy Policy covers the following areas. This list is not all-inclusive and is subject to further updates in the future."
      sections={sectionData}
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
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: customColor.primary }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1">
            For any questions or concerns regarding this Privacy Policy, please
            contact us at{" "}
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
