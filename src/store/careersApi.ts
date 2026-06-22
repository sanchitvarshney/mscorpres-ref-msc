import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ApiJob {
  title: string;
  department: string;
  subDepartment: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  experience: string;
  total_vacancy: number;
  min_salary: string;
  max_salary: string;
  type: string;
  status: string;
  skills: string[];
  key: string;
}

export interface ApiJobDetail {
  title: string;
  department: string;
  subDepartment: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  experience: string;
  total_vacancy: number;
  min_salary: string;
  max_salary: string;
  type: string;
  status: string;
  skills: string[];
}

export interface ApiDepartment {
  department: string;
  key: string;
}

interface ApiResponse<T> {
  code: number;
  status: string;
  data: T;
}

interface ApplyResponse {
  code: number;
  status: string;
  message: string;
}

export const careersApi = createApi({
  reducerPath: "careersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hrms.mscorpres.com/career-api/recruit/",
  }),
  endpoints: (builder) => ({
    fetchJobs: builder.query<ApiJob[], void>({
      query: () => "jobs/fetchJobs",
      transformResponse: (res: ApiResponse<ApiJob[]>) => res.data,
    }),
    fetchDepartments: builder.query<ApiDepartment[], void>({
      query: () => "jobs/fetchAllDepartmentJobs",
      transformResponse: (res: ApiResponse<ApiDepartment[]>) => res.data,
    }),
    fetchDepartmentJobs: builder.query<
      ApiJob[],
      { dept: string; title: string }
    >({
      query: ({ dept, title }) =>
        `jobs/fetchDepartmentJobs?dept=${encodeURIComponent(dept)}&title=${encodeURIComponent(title)}`,
      transformResponse: (res: ApiResponse<ApiJob[]>) => res.data,
    }),
    fetchJobDetails: builder.query<ApiJobDetail, string>({
      query: (id) => `jobs/fetchJobDetails?id=${encodeURIComponent(id)}`,
      transformResponse: (res: ApiResponse<ApiJobDetail[]>) => res.data[0],
    }),
    applyForJob: builder.mutation<ApplyResponse, FormData>({
      query: (formData) => ({
        url: "jobApplied/createJobAppliedFromUser",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useFetchJobsQuery,
  useFetchDepartmentsQuery,
  useLazyFetchDepartmentJobsQuery,
  useFetchJobDetailsQuery,
  useApplyForJobMutation,
} = careersApi;
