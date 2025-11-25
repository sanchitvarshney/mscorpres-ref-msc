"use client";

import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Security, PrivacyTip, DataUsage, Share, Schedule, Gavel, Cookie, Warning, Update } from "@mui/icons-material";
import MainLayout from "@/components/MainLayout";
import { sectionData } from "@/dummydata/supportData";
import { customColor } from "@/utils/theme/customColor";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <MainLayout>
      <Box
        sx={{
          
          p: 2,

        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 4 },
              mb: 2,
              textAlign: "center",
              background: `linear-gradient(135deg, ${customColor.primary} 0%, ${customColor.secondary} 100%)`,
              color: "white",
            }}
          >
            <PrivacyTip sx={{ fontSize: { xs: 48, md: 64 }, mb: 2 }} />
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Privacy Policy For MsCorpres Automation
            </Typography>
          </Paper>

          {/* Introduction Section */}
          <Paper elevation={2} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }} textAlign={"justify"}>
              The protection and security of your personal information is among our top priorities. This Privacy Policy ("Policy") discloses our practice with respect to the information collected from the users of this Website and for that personal information that you provide us while visiting our website or participating in our events, campaigns and surveys.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }} textAlign={"justify"}>
              You are hereby advised to read this Policy carefully and fully understand the nature and purpose of gathering and/or collecting sensitive, personal and other information and the usage, disclosure and sharing of such information. By viewing or accessing the Website or by requesting any services through the Website, you hereby also consent to MsC for sharing information with third party service providers engaged by MsC in relation to its operations and to the transfer and/or storage of personal information and data across borders. We store your information reliably and do transfer your personal information to third parties or service providers to fulfill your requests or activity needs. We always make all appropriate arrangements in order to ensure correct and secure data processing in compliance with applicable data protection law.
            </Typography>
            <Box
              sx={{
                mt: 3,
                p: 2,
                backgroundColor: customColor.light,
                borderRadius: 2,
                borderLeft: `4px solid ${customColor.primary}`,
              }}
            >
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                The Privacy Policy covers the following areas. This list is not all-inclusive and is subject to further updates in the future.
              </Typography>
            </Box>
          </Paper>

          {/* Sections */}
          {sectionData.map((section, index) => (
            <Paper
              key={section.id}
              elevation={2}
              sx={{
                p: { xs: 3, md: 4 },
                mb: 4,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: "50%",
                    backgroundColor: customColor.light,
                    color: "white",
                    mr: 2,
                  }}
                >
                  {section.icon}
                </Box>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    color: customColor.primary,
                  }}
                >
                  {index + 1}. {section.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              {section.content}
            </Paper>
          ))}

          {/* Contact Information */}
          <Paper
            elevation={2}
            sx={{
              p: { xs: 3, md: 4 },
              mt: 4,
              background: customColor.light,
              border: `2px solid ${customColor.primary}40`,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: customColor.primary }}>
              Contact Us
            </Typography>
            <Typography variant="body1">
              For any questions or concerns regarding this Privacy Policy, please contact us at{" "}
              <Box component="span" sx={{ fontWeight: 600, color:customColor.primary }}>
                marketing@mscorpres.in
              </Box>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default PrivacyPolicy;