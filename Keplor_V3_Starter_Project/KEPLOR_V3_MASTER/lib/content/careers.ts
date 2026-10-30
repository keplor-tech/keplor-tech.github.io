/**
 * Sample career listings for Keplor V3.
 *
 * These are illustrative role concepts created for design completeness.
 * They are not confirmed vacancies. All content is clearly identified
 * as sample listings.
 */

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  level: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  label: string;
}

export const careers: CareerRole[] = [
  {
    id: "cr-01",
    title: "Senior AI Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Remote / London",
    responsibilities: [
      "Design and deploy machine learning systems integrated into real workflows.",
      "Lead model selection, training, evaluation, and monitoring.",
      "Mentor junior engineers and establish engineering standards.",
    ],
    skills: [
      "Python",
      "Machine learning",
      "MLOps",
      "Cloud infrastructure",
      "System design",
    ],
    label: "Sample listing",
  },
  {
    id: "cr-02",
    title: "Software Engineer, Platform",
    department: "Platform",
    level: "Mid to Senior",
    location: "Remote / UK",
    responsibilities: [
      "Build and maintain infrastructure-as-code patterns for cloud deployments.",
      "Improve CI/CD pipelines and observability foundations.",
      "Support engineering teams with reliable, maintainable platforms.",
    ],
    skills: [
      "TypeScript",
      "Terraform",
      "Kubernetes",
      "CI/CD",
      "AWS or GCP",
    ],
    label: "Sample listing",
  },
  {
    id: "cr-03",
    title: "Technical Writer",
    department: "Content",
    level: "Mid",
    location: "Remote / Europe",
    responsibilities: [
      "Create documentation for developer tools and APIs.",
      "Translate complex technical concepts into clear user guidance.",
      "Maintain documentation standards across the engineering organization.",
    ],
    skills: [
      "Technical writing",
      "Developer documentation",
      "Markdown",
      "Git",
      "API concepts",
    ],
    label: "Sample listing",
  },
];

export default careers;
