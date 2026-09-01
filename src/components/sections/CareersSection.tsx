"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  BusinessCenterOutlined,
  LocationOnOutlined,
  Search,
  WorkOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import SectionShell from "@/components/reuseable/SectionShell";
import SectionHeading from "@/components/reuseable/SectionHeading";
import { CircuitTraces, GlowRing } from "@/components/reuseable/decor";
import { customColor } from "@/utils/theme/customColor";
import {
  ApiDepartment,
  useFetchDepartmentsQuery,
  useFetchJobsQuery,
  useLazyFetchDepartmentJobsQuery,
} from "@/store/careersApi";

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const CareersSection: React.FC = () => {
  const { data: allJobs = [], isLoading: jobsLoading, isError: jobsError } =
    useFetchJobsQuery();
  const { data: rawDepts = [], isLoading: deptsLoading } =
    useFetchDepartmentsQuery();
  const [triggerSearch, { data: searchResults, isLoading: searchLoading, isError: searchError }] =
    useLazyFetchDepartmentJobsQuery();

  const [titleInput, setTitleInput] = useState("");
  const [selectedDept, setSelectedDept] = useState<ApiDepartment | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const isLoading = jobsLoading || deptsLoading || searchLoading;
  const isError = jobsError || searchError;

  const displayedJobs = hasSearched ? (searchResults ?? []) : allJobs;

  const resultLabel = useMemo(() => {
    if (!hasSearched) return `Showing ${displayedJobs.length} open positions`;
    return `${displayedJobs.length} job${displayedJobs.length === 1 ? "" : "s"} found`;
  }, [displayedJobs.length, hasSearched]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch({
      dept: selectedDept?.key ?? "",
      title: titleInput.trim(),
    });
    setHasSearched(true);
  };

  const handleReset = () => {
    setTitleInput("");
    setSelectedDept(null);
    setHasSearched(false);
  };

  return (
    <SectionShell
      tone="tint"
      maxWidth={1200}
      decor={
        <>
          <GlowRing size={440} sx={{ top: -160, right: -180 }} />
          <CircuitTraces
            opacity={0.08}
            sx={{
              bottom: 0,
              left: 0,
              width: { xs: 320, md: 480 },
              height: { xs: 240, md: 340 },
            }}
          />
        </>
      }
    >
      <SectionHeading
        eyebrow="JOIN OUR TEAM"
        title="Explore Career Opportunities"
        intro="Search by job title or department to find roles that match your skills. Browse our latest openings below."
        sx={{ mb: { xs: 4, md: 6 }, maxWidth: 660 }}
      />

      <Box
        className="reveal"
        sx={{
          bgcolor: "#fff",
          borderRadius: 4,
          p: { xs: 2.5, md: 3 },
          mb: 5,
          border: "1px solid rgba(4,176,168,0.16)",
          boxShadow: "0 20px 48px -30px rgba(4,20,19,0.35)",
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField
                fullWidth
                label="Job Title"
                placeholder="Type job title..."
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <WorkOutline sx={{ ml: 1, mr: 0.5, color: "action.active" }} />
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Autocomplete
                options={rawDepts}
                value={selectedDept}
                getOptionLabel={(opt) => opt.department}
                isOptionEqualToValue={(opt, val) => opt.key === val.key}
                onChange={(_, value) => setSelectedDept(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Department"
                    placeholder="Select department..."
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            <BusinessCenterOutlined
                              sx={{ ml: 1, mr: 0.5, color: "action.active" }}
                            />
                            {params.InputProps.startAdornment}
                          </>
                        ),
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 2 }}
              sx={{ display: "flex", gap: 1, flexDirection: { xs: "row", md: "column" } }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disableElevation
                startIcon={<Search />}
                sx={{
                  bgcolor: customColor.primary,
                  py: 1.4,
                  borderRadius: 999,
                  fontWeight: 700,
                  "&:hover": { bgcolor: customColor.secondary },
                }}
              >
                Search
              </Button>
              {hasSearched && (
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={handleReset}
                  sx={{
                    py: 1.4,
                    borderRadius: 999,
                    borderColor: customColor.primary,
                    color: customColor.primary,
                  }}
                >
                  Reset
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress sx={{ color: customColor.primary }} />
        </Box>
      ) : isError ? (
        <Paper
          elevation={0}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 3,
            bgcolor: customColor.light,
            border: "1px solid rgba(4,176,168,0.18)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Something went wrong
          </Typography>
          <Typography color="text.secondary">
            Failed to load job listings. Please try again later.
          </Typography>
        </Paper>
      ) : (
        <>
          <Typography
            className="reveal"
            variant="subtitle1"
            sx={{ fontWeight: 700, mb: 3, color: "text.secondary" }}
          >
            {resultLabel}
          </Typography>

          {displayedJobs.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: 3,
                bgcolor: customColor.light,
                border: "1px solid rgba(4,176,168,0.18)",
              }}
            >
              <Typography variant="h6" gutterBottom>
                No jobs found
              </Typography>
              <Typography color="text.secondary">
                Try different filters or reset to see all openings.
              </Typography>
            </Paper>
          ) : (
            <Grid container spacing={3}>
              {displayedJobs.map((job, index) => (
                <Grid key={job.key} size={{ xs: 12, md: 6 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.5 }}
                    sx={{
                      position: "relative",
                      height: "100%",
                      p: 3,
                      pt: 3.25,
                      borderRadius: 3,
                      bgcolor: "#fff",
                      border: "1px solid rgba(4,176,168,0.14)",
                      boxShadow: "0 14px 36px -24px rgba(4,20,19,0.32)",
                      overflow: "hidden",
                      transition:
                        "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${customColor.primary}, ${customColor.secondary})`,
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 30px 54px -28px rgba(4,176,168,0.45)",
                        borderColor: "rgba(4,176,168,0.4)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.01em" }}
                      >
                        {job.title}
                      </Typography>
                      <Chip
                        label={job.type}
                        size="small"
                        sx={{
                          bgcolor: customColor.light,
                          color: customColor.secondary,
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                      <Chip
                        label={job.department}
                        size="small"
                        sx={{ bgcolor: customColor.primary, color: "#fff", fontWeight: 500 }}
                      />
                      {job.subDepartment && (
                        <Chip
                          label={job.subDepartment}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: customColor.primary,
                            color: customColor.primary,
                            fontWeight: 500,
                          }}
                        />
                      )}
                      {job.experience && (
                        <Chip
                          label={job.experience}
                          size="small"
                          variant="outlined"
                          sx={{ fontWeight: 500 }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {stripHtml(job.description).slice(0, 180)}
                      {stripHtml(job.description).length > 180 ? "…" : ""}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "text.secondary",
                      }}
                    >
                      <LocationOnOutlined
                        fontSize="small"
                        sx={{ color: customColor.primary }}
                      />
                      <Typography variant="body2">{job.location}</Typography>
                    </Box>
                    <Button
                      component={Link}
                      href={`https://www.nextgenz.net/jobdetail/${job?.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      sx={{
                        mt: 2,
                        borderRadius: 999,
                        borderColor: customColor.primary,
                        color: customColor.primary,
                        "&:hover": {
                          borderColor: customColor.secondary,
                          bgcolor: customColor.light,
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </SectionShell>
  );
};

export default CareersSection;
