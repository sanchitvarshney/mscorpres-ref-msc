"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  BusinessCenterOutlined,
  LocationOnOutlined,
  WorkOutline,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { customColor } from "@/utils/theme/customColor";
import {
  useApplyForJobMutation,
  useFetchJobDetailsQuery,
} from "@/store/careersApi";

interface FormState {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  current_ctc: string;
  expected_ctc: string;
  notice_period: string;
  total_experience: string;
  current_location: string;
  cover_letter: string;
  resume: File | null;
}

const INITIAL_FORM: FormState = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  current_ctc: "",
  expected_ctc: "",
  notice_period: "",
  total_experience: "",
  current_location: "",
  cover_letter: "",
  resume: null,
};

const EXPERIENCE_OPTIONS = [
  "0-1 Year",
  "1-3 Years",
  "3-5 Years",
  "5-8 Years",
  "8-12 Years",
  "12+ Years",
];

export default function JobApplySection({ jobId }: { jobId: string }) {
  const { data: job, isLoading: jobLoading, isError: jobError } =
    useFetchJobDetailsQuery(jobId);
  const [applyForJob, { isLoading: submitting }] = useApplyForJobMutation();

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("firstName", form.firstName);
    fd.append("lastName", form.lastName);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("gender", form.gender);
    fd.append("current_ctc", form.current_ctc);
    fd.append("expected_ctc", form.expected_ctc);
    fd.append("notice_period", form.notice_period);
    fd.append("total_experience", form.total_experience);
    fd.append("current_location", form.current_location);
    fd.append("cover_letter", form.cover_letter);
    fd.append("job_id", jobId);
    fd.append("application_source", "MscorpRes");
    if (form.resume) {
      fd.append("resume", form.resume, form.resume.name);
    }

    try {
      const res = await applyForJob(fd).unwrap();
      if (res.code === 200 && res.status === "success") {
        toast.success("Application submitted successfully!");
        setSubmitted(true);
      } else {
        toast.error(res.message ?? "Submission failed. Please try again.");
      }
    } catch (err) {
      const rtkErr = err as {
        status?: number | string;
        data?: { error?: string; message?: string };
        error?: string;
      };
      const msg =
        rtkErr?.data?.error ||
        rtkErr?.data?.message ||
        rtkErr?.error ||
        "Something went wrong. Please try again later.";
      toast.error(msg);
    }
  };

  if (jobLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
        <CircularProgress sx={{ color: customColor.primary }} />
      </Box>
    );
  }

  if (jobError || !job) {
    return (
      <Box sx={{ textAlign: "center", py: 12 }}>
        <Typography variant="h6">Failed to load job details.</Typography>
      </Box>
    );
  }

  if (submitted) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: 2,
          p: 4,
        }}
      >
        <WorkspacePremiumOutlined sx={{ fontSize: 72, color: customColor.primary }} />
        <Typography variant="h5" fontWeight={700}>
          Application Submitted!
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 440, textAlign: "center" }}
        >
          Thank you for applying for <strong>{job.title}</strong>. We will
          review your application and get back to you soon.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        p: { xs: 2, md: 4 },
      }}
    >
      <Box className="max-w-7xl mx-auto">
        <Grid container spacing={4} alignItems="flex-start">
          {/* ── LEFT: Application Form ── */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={3}>
                Apply for this position
              </Typography>

              <Grid container spacing={2.5}>
                {/* Title */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Title</InputLabel>
                    <Select
                      label="Title"
                      value={form.title}
                      onChange={(e) => handleSelect("title", e.target.value)}
                    >
                      {["Mr.", "Mrs.", "Ms.", "Dr."].map((t) => (
                        <MenuItem key={t} value={t}>{t}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* First Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    name="firstName"
                    label="Candidate First name"
                    placeholder="Enter Candidate first name"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Last Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    name="lastName"
                    label="Candidate Last name"
                    placeholder="Enter Candidate Last name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Phone */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    name="phone"
                    label="Phone"
                    placeholder="Enter phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Gender */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      label="Gender"
                      value={form.gender}
                      onChange={(e) => handleSelect("gender", e.target.value)}
                    >
                      {["Male", "Female", "Other", "Prefer not to say"].map((g) => (
                        <MenuItem key={g} value={g}>{g}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Current CTC */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="current_ctc"
                    label="Current CTC (Rupees/Year)"
                    placeholder="Enter Current CTC"
                    value={form.current_ctc}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Expected CTC */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="expected_ctc"
                    label="Expected CTC (Rupees/Year)"
                    placeholder="Enter Expected CTC"
                    value={form.expected_ctc}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Notice Period */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="notice_period"
                    label="Notice Period"
                    placeholder="Enter Notice Period"
                    value={form.notice_period}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Total Experience */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Total Experience</InputLabel>
                    <Select
                      label="Total Experience"
                      value={form.total_experience}
                      onChange={(e) =>
                        handleSelect("total_experience", e.target.value)
                      }
                    >
                      {EXPERIENCE_OPTIONS.map((exp) => (
                        <MenuItem key={exp} value={exp}>{exp}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Current Location */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    name="current_location"
                    label="Current Location"
                    placeholder="Enter Current Location"
                    value={form.current_location}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Cover Letter */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="cover_letter"
                    label="Cover Letter"
                    placeholder="Enter Cover Letter"
                    value={form.cover_letter}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Resume */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="body2" fontWeight={600} mb={1}>
                    Resume
                  </Typography>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: "block" }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Allowed Type(s): .pdf
                  </Typography>
                </Grid>

                {/* Submit */}
                <Grid
                  size={{ xs: 12 }}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submitting}
                    startIcon={
                      submitting ? (
                        <CircularProgress size={18} sx={{ color: "#fff" }} />
                      ) : undefined
                    }
                    sx={{
                      px: 5,
                      bgcolor: customColor.primary,
                      "&:hover": { bgcolor: customColor.secondary },
                    }}
                  >
                    {submitting ? "Submitting…" : "Submit"}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* ── RIGHT: Job Details ── */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                position: { lg: "sticky" },
                top: { lg: 24 },
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={1}>
                {job.title}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2.5}>
                <Chip
                  label={job.department}
                  size="small"
                  sx={{ bgcolor: customColor.primary, color: "#fff", fontWeight: 600 }}
                />
                {job.subDepartment && (
                  <Chip
                    label={job.subDepartment}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: customColor.primary, color: customColor.primary }}
                  />
                )}
                <Chip
                  label={job.type}
                  size="small"
                  sx={{
                    bgcolor: customColor.light,
                    color: customColor.secondary,
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label={job.status}
                  size="small"
                  sx={{
                    bgcolor: job.status === "Open" ? "#e6f7f0" : "#fdecea",
                    color: job.status === "Open" ? "#1b7a4e" : "#c62828",
                    fontWeight: 600,
                  }}
                />
              </Stack>

              <Stack spacing={1.5} mb={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnOutlined fontSize="small" sx={{ color: customColor.primary }} />
                  <Typography variant="body2">{job.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <WorkOutline fontSize="small" sx={{ color: customColor.primary }} />
                  <Typography variant="body2">Experience: {job.experience}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <BusinessCenterOutlined fontSize="small" sx={{ color: customColor.primary }} />
                  <Typography variant="body2">
                    Vacancies: {job.total_vacancy}&nbsp;|&nbsp;Salary:{" "}
                    {job.min_salary === "Not Disclosed"
                      ? "Not Disclosed"
                      : `${job.min_salary} – ${job.max_salary}`}
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" fontWeight={700} mb={1.5}>
                Job Description
              </Typography>
              <Box
                sx={{
                  "& p": {
                    mb: 1,
                    lineHeight: 1.8,
                    color: "text.secondary",
                    fontSize: "0.875rem",
                  },
                  "& ul, & ol": { pl: 2.5, mb: 1 },
                  "& li": { mb: 0.5, color: "text.secondary", fontSize: "0.875rem" },
                }}
                dangerouslySetInnerHTML={{ __html: job.description }}
              />

              {job.skills?.length > 0 && (
                <>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="subtitle1" fontWeight={700} mb={1.5}>
                    Required Skills
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {job.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill.trim()}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: customColor.primary,
                          color: customColor.primary,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
