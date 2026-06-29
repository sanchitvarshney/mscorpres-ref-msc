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
import {
  containerVariants,
  itemVariants,
} from "@/utils/animationVarients/animation";
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
    <Box
      component="section"
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <Box className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: customColor.primary,
                fontWeight: 600,
                letterSpacing: 3,
                mb: 1,
                display: "block",
              }}
            >
              JOIN OUR TEAM
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "28px", md: "36px" },
              }}
            >
              Explore Career Opportunities
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 640, mx: "auto", mb: 5 }}
            >
              Search by job title or department to find roles that match your
              skills. Browse our latest openings below.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                mb: 5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
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
                          <WorkOutline
                            sx={{ ml: 1, mr: 0.5, color: "action.active" }}
                          />
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
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: { xs: "row", md: "column" },
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    startIcon={<Search />}
                    sx={{
                      bgcolor: customColor.primary,
                      py: 1.5,
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
                        py: 1.5,
                        borderColor: customColor.primary,
                        color: customColor.primary,
                      }}
                    >
                      Reset
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </motion.div>

          <motion.div variants={itemVariants}>
            {isLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
                <CircularProgress sx={{ color: customColor.primary }} />
              </Box>
            ) : isError ? (
              <Paper
                sx={{
                  p: 6,
                  textAlign: "center",
                  borderRadius: 2,
                  bgcolor: customColor.light,
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
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 3, color: "text.secondary" }}
                >
                  {resultLabel}
                </Typography>

                {displayedJobs.length === 0 ? (
                  <Paper
                    sx={{
                      p: 6,
                      textAlign: "center",
                      borderRadius: 2,
                      bgcolor: customColor.light,
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
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <Paper
                            sx={{
                              p: 3,
                              height: "100%",
                              borderRadius: 2,
                              border: "1px solid",
                              borderColor: "divider",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                                borderColor: customColor.primary,
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
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>
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
                            <Box
                              sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                            >
                              <Chip
                                label={job.department}
                                size="small"
                                sx={{
                                  bgcolor: customColor.primary,
                                  color: "#fff",
                                  fontWeight: 500,
                                }}
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
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default CareersSection;
