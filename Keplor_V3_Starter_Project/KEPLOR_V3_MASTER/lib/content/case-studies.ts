/**
 * Illustrative case studies for Keplor V3.
 *
 * These are fictional project scenarios created for visual and content
 * demonstration. They are not genuine Keplor client engagements.
 * No client identities, verified metrics, or operational results are implied.
 */

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  themes: string[];
  label: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-automation",
    title: "Patient intake workflow",
    context: "Healthcare & Life Sciences",
    problem:
      "A growing clinic needed to reduce manual data entry between referral forms, scheduling, and electronic records without replacing its existing systems.",
    approach:
      "We mapped the current intake process, identified the highest-friction handoffs, and built a lightweight automation layer that connects form submissions to scheduling and record creation.",
    solution:
      "A validation step checks form completeness before data is written, reducing rejected submissions and freeing administrative staff for patient-facing work.",
    outcome:
      "Intake processing became more consistent, with fewer incomplete records reaching the clinical team.",
    themes: ["Workflow automation", "System integration", "Data validation"],
    label: "Illustrative case study",
  },
  {
    id: "finance-reporting",
    title: "Monthly financial reporting",
    context: "Financial Services",
    problem:
      "A finance team spent several days each month consolidating data from multiple systems into a single reporting pack, with frequent manual errors.",
    approach:
      "We designed a repeatable data pipeline that extracts, validates, and consolidates figures from source systems, with human review steps at key decision points.",
    solution:
      "The pipeline produces a consistent reporting pack each month, with an audit trail showing what changed and why.",
    outcome:
      "Reporting cycle time decreased, and the team gained confidence in the accuracy of published figures.",
    themes: ["Data processing", "Automation", "Audit trail"],
    label: "Illustrative case study",
  },
  {
    id: "retail-recommendations",
    title: "Customer insight platform",
    context: "Retail & E-Commerce",
    problem:
      "A retailer had rich customer data but no practical way to surface relevant product recommendations at the point of purchase.",
    approach:
      "We built a recommendation layer that combines purchase history, browsing behavior, and inventory signals to suggest relevant products without creating a black box.",
    solution:
      "Recommendations are shown with clear reasoning, and merchants can adjust weights based on commercial priorities.",
    outcome:
      "The team gained a transparent, controllable way to surface relevant products to customers.",
    themes: ["AI/ML integration", "Personalization", "Transparency"],
    label: "Illustrative case study",
  },
];

export default caseStudies;
