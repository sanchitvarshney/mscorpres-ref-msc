"use client";

import {
  Container,
  Typography,
  Box,
  Paper,
 
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Description,

} from "@mui/icons-material";
import MainLayout from "@/components/MainLayout";
import { customColor } from "@/utils/theme/customColor";
import { sectionTermData } from "@/dummydata/supportData";

const TermsOfService = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <MainLayout>
      <Box
        sx={{
        p:2
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 2,
              textAlign: "center",
              background: `linear-gradient(135deg, ${customColor.primary} 0%, ${customColor.secondary} 100%)`,
              color: "white",
            }}
          >
            <Description sx={{ fontSize: { xs: 48, md: 64 }, mb: 2 }} />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Terms Of Use
            </Typography>
          </Paper>

          {/* Introduction Section */}
          <Paper elevation={2} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8, textAlign: "justify" }}>
              If you disagree with any part of these Terms, please discontinue using our Website immediately. We reserve the right to modify, alter or update these Terms at any time and you agree to be bound by such modifications, alterations and updates.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}>
              The term 'you' refers to the user or viewer of our Website.
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
                Please read these Terms of Use carefully before using our Website. By accessing or using this Website, you agree to be bound by these Terms of Use.
              </Typography>
            </Box>
          </Paper>

          {/* Sections */}
          {sectionTermData.map((section, index) => (
            <Paper
              key={section.id}
              elevation={2}
              sx={{
                p: { xs: 3, md: 4 },
                mb: 2,
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

        
        </Container>
      </Box>
    </MainLayout>
  );
};

export default TermsOfService;

