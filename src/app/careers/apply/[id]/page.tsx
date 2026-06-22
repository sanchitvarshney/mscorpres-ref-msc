"use client";

import MainLayout from "@/components/MainLayout";
import JobApplySection from "@/components/sections/JobApplySection";
import { use } from "react";

export default function JobApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <MainLayout>
      <JobApplySection jobId={id} />
    </MainLayout>
  );
}
