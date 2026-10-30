/**
 * Illustrative product concepts for Keplor V3.
 *
 * These are fictional concept products created for visual and content
 * completeness. They are not confirmed commercially released products.
 * All content is replaceable without rewriting layout components.
 */

export type ProductStatus = "concept-preview" | "illustrative";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  positioning: string;
  description: string;
  audience: string;
  features: ProductFeature[];
  useCase: string;
  status: ProductStatus;
  statusLabel: string;
}

export const products: Product[] = [
  {
    id: "keplor-flow",
    name: "Keplor Flow",
    positioning: "Workflow automation that adapts to your team.",
    description:
      "A lightweight orchestration layer that connects existing tools, data sources, and approval steps into repeatable workflows. Designed for teams that need automation without replacing their current stack.",
    audience: "Operations and engineering teams managing multi-step processes.",
    features: [
      {
        title: "Visual workflow builder",
        description: "Drag-and-drop canvas for defining process steps and decision logic.",
      },
      {
        title: "Tool connectors",
        description: "Pre-built integrations for common SaaS platforms and databases.",
      },
      {
        title: "Approval gates",
        description: "Human review steps embedded in automated flows where judgment is required.",
      },
      {
        title: "Run history",
        description: "Full audit trail of every workflow execution, inputs, and outputs.",
      },
    ],
    useCase:
      "A finance team automates monthly reporting by pulling data from three systems, running validation checks, and routing the output for review before distribution.",
    status: "concept-preview",
    statusLabel: "Concept preview",
  },
  {
    id: "keplor-signal",
    name: "Keplor Signal",
    positioning: "Practical AI for decision support.",
    description:
      "A decision-support layer that surfaces relevant signals from documents, messages, and metrics—helping teams act on information without being overwhelmed by it.",
    audience: "Analysts and team leads working with high volumes of unstructured information.",
    features: [
      {
        title: "Signal detection",
        description: "Automatically flags anomalies, trends, and actionable items across connected sources.",
      },
      {
        title: "Context summaries",
        description: "Concise summaries of long documents and threads with source references.",
      },
      {
        title: "Priority ranking",
        description: "Ranks incoming items by relevance and urgency to the user's current context.",
      },
      {
        title: "Export and share",
        description: "Export findings to existing reporting and collaboration tools.",
      },
    ],
    useCase:
      "A research team monitors competitor activity, regulatory changes, and customer feedback, receiving a daily summary of the most relevant developments.",
    status: "illustrative",
    statusLabel: "Illustrative product concept",
  },
  {
    id: "keplor-core",
    name: "Keplor Core",
    positioning: "Cloud infrastructure, engineered for reliability.",
    description:
      "Infrastructure-as-code templates and operational patterns for teams that want predictable, maintainable cloud environments without the operational overhead.",
    audience: "Engineering teams building and operating cloud-native applications.",
    features: [
      {
        title: "Reference architectures",
        description: "Battle-tested patterns for container platforms, serverless, and hybrid deployments.",
      },
      {
        title: "Cost-aware scaling",
        description: "Scaling policies that balance performance with responsible spend.",
      },
      {
        title: "Observability foundation",
        description: "Logging, metrics, and tracing configured from day one.",
      },
      {
        title: "Security baseline",
        description: "IAM, network segmentation, and encryption defaults aligned to industry practice.",
      },
    ],
    useCase:
      "A growing startup deploys its application across environments using predefined infrastructure patterns, reducing configuration drift and deployment incidents.",
    status: "concept-preview",
    statusLabel: "Concept preview",
  },
];

export default products;
