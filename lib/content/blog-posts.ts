/**
 * Sample blog posts for Keplor V3.
 *
 * These are preview/demo articles created for editorial completeness.
 * No published dates, author identities, or citations are fabricated.
 * All content is marked as preview content where appropriate.
 */

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  tags: string[];
  readTime: string;
  label: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "bp-01",
    title: "Practical AI: starting with the problem, not the model",
    category: "Applied AI",
    excerpt:
      "The most valuable machine learning systems begin with a well-defined business problem, not with a model architecture looking for a use case.",
    body:
      "When teams approach AI, the conversation often starts with technology: which model, which framework, which cloud provider. In our experience, the most successful projects start somewhere else entirely—with the problem.\n\nA well-defined problem statement answers three questions: what decision are we trying to support, what data do we already have, and what does success look like? Without those answers, even the most sophisticated model produces output that no one acts on.\n\nThis post walks through a framework for problem-first AI: framing the decision, auditing available data, defining success criteria, and only then considering modeling approaches.\n\nThe goal is not to build the most impressive model. It is to build the most useful one.\n\n*This is preview content created for design demonstration.*",
    tags: ["AI", "Strategy", "Problem framing"],
    readTime: "5 min read",
    label: "Preview content",
  },
  {
    id: "bp-02",
    title: "Workflow automation without replacing your stack",
    category: "Automation",
    excerpt:
      "Automation works best when it connects the tools teams already use, rather than forcing everyone onto a new platform.",
    body:
      "Many automation projects fail because they require teams to abandon familiar tools and learn entirely new systems. The result is shadow processes, workarounds, and low adoption.\n\nA better approach is to build automation layers that sit alongside existing tools—connecting CRM, email, spreadsheets, and databases without replacing them.\n\nThis post explores patterns for incremental automation: identifying handoffs, adding validation steps, and keeping humans in the loop where judgment matters.\n\n*This is preview content created for design demonstration.*",
    tags: ["Automation", "Integration", "Process"],
    readTime: "6 min read",
    label: "Preview content",
  },
  {
    id: "bp-03",
    title: "Observability as an engineering discipline",
    category: "Cloud infrastructure",
    excerpt:
      "Logging, metrics, and tracing should be designed from day one, not added as an afterthought when something breaks.",
    body:
      "Observability is often treated as a checklist item—add a logging library, ship logs to a provider, and move on. But when an incident happens at 2 a.m., a checklist is not enough.\n\nWe treat observability as an engineering discipline: structured events, meaningful metrics, distributed traces, and alerting that reflects actual user impact rather than infrastructure noise.\n\nThis post covers the principles we apply when designing observability for cloud-native applications.\n\n*This is preview content created for design demonstration.*",
    tags: ["Cloud", "Observability", "Engineering"],
    readTime: "7 min read",
    label: "Preview content",
  },
];

export default blogPosts;
