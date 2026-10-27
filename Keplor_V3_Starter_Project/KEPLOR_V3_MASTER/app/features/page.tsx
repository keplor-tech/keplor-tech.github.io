"use client";

import { useEffect, useState } from "react";
import { PageHero, ClosingCTA } from "@/components/Sections";
import { motion } from "framer-motion";

const capabilityAreas = [
  {
    id: "applied-intelligence",
    title: "Applied Intelligence",
    subtitle: "Where models meet workflows",
    description: "Machine learning doesn't create value in isolation—it creates value when embedded in a decision loop. We design systems where models, automation, and predictive methods improve specific workflows: ranking, classification, forecasting, generation, and anomaly detection. The focus is on the handoff between model output and human or system action.",
    keyConcepts: [
      { term: "Model lifecycle", detail: "Data prep → training → evaluation → deployment → monitoring → retraining" },
      { term: "Inference patterns", detail: "Batch, real-time, streaming, edge, and hybrid serving architectures" },
      { term: "Human-in-the-loop", detail: "Confidence thresholds, review queues, active learning feedback" },
      { term: "Evaluation rigor", detail: "Offline metrics, online A/B, shadow mode, drift detection" }
    ],
    diagram: (
      <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" style={{ maxWidth: "100%" }}>
        <defs>
          <linearGradient id="aiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="aiGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Data layer */}
        <rect x="20" y="200" width="360" height="60" rx="8" fill="url(#aiGrad1)" stroke="var(--color-line)" strokeWidth="1" />
        <text x="40" y="230" fill="var(--color-text)" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="500">Raw Data & Events</text>
        <text x="40" y="250" fill="var(--color-muted)" fontSize="10" fontFamily="ui-monospace, monospace">Logs, transactions, documents, sensors, user interactions</text>
        
        {/* Pipeline */}
        <path d="M200 200 L200 160" stroke="var(--color-line)" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="200" cy="160" r="30" fill="var(--color-surface-elevated)" stroke="var(--color-violet)" strokeWidth="1.5" />
        <text x="200" y="155" textAnchor="middle" fill="var(--color-violet)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">FEATURE</text>
        <text x="200" y="168" textAnchor="middle" fill="var(--color-violet)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">STORE</text>
        
        {/* Model training */}
        <path d="M170 160 L80 100" stroke="var(--color-line)" strokeWidth="1.5" />
        <ellipse cx="80" cy="70" rx="60" ry="35" fill="var(--color-surface-elevated)" stroke="var(--color-blue)" strokeWidth="1.5" />
        <text x="80" y="62" textAnchor="middle" fill="var(--color-blue)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">TRAINING</text>
        <text x="80" y="75" textAnchor="middle" fill="var(--color-blue)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">PIPELINE</text>
        
        {/* Model serving */}
        <path d="M230 160 L320 100" stroke="var(--color-line)" strokeWidth="1.5" />
        <ellipse cx="320" cy="70" rx="60" ry="35" fill="var(--color-surface-elevated)" stroke="var(--color-cyan)" strokeWidth="1.5" />
        <text x="320" y="62" textAnchor="middle" fill="var(--color-cyan)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">MODEL</text>
        <text x="320" y="75" textAnchor="middle" fill="var(--color-cyan)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">SERVING</text>
        
        {/* Application layer */}
        <path d="M80 105 L80 140" stroke="var(--color-line)" strokeWidth="1.5" />
        <path d="M320 105 L320 140" stroke="var(--color-line)" strokeWidth="1.5" />
        
        <rect x="20" y="10" width="140" height="50" rx="6" fill="var(--color-surface-elevated)" stroke="var(--color-blue)" strokeWidth="1" opacity="0.8" />
        <text x="90" y="35" textAnchor="middle" fill="var(--color-text)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="500">Ranking API</text>
        <text x="90" y="48" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Top-k selection</text>
        
        <rect x="180" y="10" width="140" height="50" rx="6" fill="var(--color-surface-elevated)" stroke="var(--color-violet)" strokeWidth="1" opacity="0.8" />
        <text x="250" y="35" textAnchor="middle" fill="var(--color-text)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="500">Classification</text>
        <text x="250" y="48" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Confidence + review</text>
        
        <rect x="340" y="10" width="140" height="50" rx="6" fill="var(--color-surface-elevated)" stroke="var(--color-cyan)" strokeWidth="1" opacity="0.8" />
        <text x="410" y="35" textAnchor="middle" fill="var(--color-text)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="500">Forecasting</text>
        <text x="410" y="48" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Horizon + intervals</text>
        
        {/* Feedback loop */}
        <path d="M90 60 Q90 100 200 130" stroke="var(--color-emerald)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
        <path d="M250 60 Q250 100 200 130" stroke="var(--color-emerald)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
        <path d="M410 60 Q410 100 200 130" stroke="var(--color-emerald)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
        <text x="200" y="135" textAnchor="middle" fill="var(--color-emerald)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Feedback & Retraining Loop</text>
      </svg>
    )
  },
  {
    id: "software-shaped",
    title: "Software Shaped to Context",
    subtitle: "Architecture that reflects the domain",
    description: "Good software isn't generic—it models the domain it serves. We build around user needs, operational constraints, and maintainable architecture. This means domain-driven design, clean boundaries, thoughtful APIs, and interfaces that reduce cognitive load. The result is software your team can actually operate and evolve.",
    keyConcepts: [
      { term: "Domain modeling", detail: "Bounded contexts, aggregates, value objects, domain events" },
      { term: "API design", detail: "REST, GraphQL, tRPC, gRPC—chosen for the integration pattern, not dogma" },
      { term: "Interface systems", detail: "Design tokens, component libraries, accessibility, responsive patterns" },
      { term: "Evolutionary architecture", detail: "Fitness functions, architectural decision records, strangler fig patterns" }
    ],
    diagram: (
      <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" style={{ maxWidth: "100%" }}>
        <defs>
          <linearGradient id="swGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Domain layer */}
        <rect x="20" y="20" width="160" height="100" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-blue)" strokeWidth="1.5" />
        <text x="100" y="45" textAnchor="middle" fill="var(--color-blue)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">DOMAIN LAYER</text>
        <text x="100" y="65" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Entities, Aggregates</text>
        <text x="100" y="80" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Value Objects, Events</text>
        <text x="100" y="95" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Domain Services</text>
        <text x="100" y="110" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Pure business logic</text>
        
        {/* Application layer */}
        <rect x="220" y="20" width="160" height="100" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-violet)" strokeWidth="1.5" />
        <text x="300" y="45" textAnchor="middle" fill="var(--color-violet)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">APPLICATION LAYER</text>
        <text x="300" y="65" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Use Cases / Commands</text>
        <text x="300" y="80" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Queries / Projections</text>
        <text x="300" y="95" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">DTOs, Ports</text>
        <text x="300" y="110" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Orchestration only</text>
        
        {/* Infrastructure */}
        <rect x="20" y="150" width="160" height="100" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-cyan)" strokeWidth="1.5" />
        <text x="100" y="175" textAnchor="middle" fill="var(--color-cyan)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">INFRASTRUCTURE</text>
        <text x="100" y="195" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Repositories (DB)</text>
        <text x="100" y="210" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Message Bus</text>
        <text x="100" y="225" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">External APIs</text>
        <text x="100" y="240" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Adapters implement ports</text>
        
        {/* Interfaces */}
        <rect x="220" y="150" width="160" height="100" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-emerald)" strokeWidth="1.5" />
        <text x="300" y="175" textAnchor="middle" fill="var(--color-emerald)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">INTERFACES</text>
        <text x="300" y="195" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">REST / GraphQL</text>
        <text x="300" y="210" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">WebSocket / gRPC</text>
        <text x="300" y="225" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">CLI / Workers</text>
        <text x="300" y="240" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Adapters consume ports</text>
        
        {/* Dependency arrows */}
        <path d="M180 70 L220 70" stroke="var(--color-line)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M100 120 L100 150" stroke="var(--color-line)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M300 120 L300 150" stroke="var(--color-line)" strokeWidth="2" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="var(--color-line)" />
          </marker>
        </defs>
        
        {/* Dependency rule note */}
        <text x="200" y="270" textAnchor="middle" fill="var(--color-muted)" fontSize="9" fontFamily="ui-monospace, monospace" fontStyle="italic">Dependency Rule: Inner layers never depend on outer layers</text>
      </svg>
    )
  },
  {
    id: "data-decisions",
    title: "Data into Decisions",
    subtitle: "From raw signal to confident action",
    description: "Data alone isn't insight. We create clearer paths from raw information to analysis, visualization, and action—pipelines, warehouses, streaming, governance, dashboards, self-serve exploration, and embedded analytics. The goal: shorten the distance between a question and a trustworthy answer.",
    keyConcepts: [
      { term: "Modern data stack", detail: "Ingestion → warehouse → transformation → semantic layer → consumption" },
      { term: "Governance & quality", detail: "Contracts, lineage, freshness SLAs, PII handling, access control" },
      { term: "Analytics interfaces", detail: "Dashboards, notebooks, embedded charts, natural language query" },
      { term: "Decision support", detail: "Alerting, anomaly detection, scenario modeling, automated reporting" }
    ],
    diagram: (
      <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" style={{ maxWidth: "100%" }}>
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-emerald)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-cyan)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Sources */}
        <g fill="var(--color-surface-elevated)" stroke="var(--color-line)" strokeWidth="1">
          <rect x="20" y="20" width="100" height="40" rx="6" />
          <text x="70" y="43" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">App DBs</text>
          <rect x="150" y="20" width="100" height="40" rx="6" />
          <text x="200" y="43" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Event Streams</text>
          <rect x="280" y="20" width="100" height="40" rx="6" />
          <text x="330" y="43" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">3rd Party APIs</text>
        </g>
        
        {/* Ingestion arrows */}
        <g stroke="var(--color-emerald)" strokeWidth="2" strokeDasharray="4,4">
          <path d="M70 60 L70 85" markerEnd="url(#arrow2)" />
          <path d="M200 60 L200 85" markerEnd="url(#arrow2)" />
          <path d="M330 60 L330 85" markerEnd="url(#arrow2)" />
        </g>
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,5 L7,2.5 z" fill="var(--color-emerald)" />
          </marker>
        </defs>
        
        {/* Pipeline */}
        <rect x="50" y="85" width="300" height="50" rx="8" fill="url(#dataGrad)" stroke="var(--color-emerald)" strokeWidth="1.5" />
        <text x="200" y="110" textAnchor="middle" fill="var(--color-emerald)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">INGESTION & TRANSFORMATION (dbt / SQL / Python)</text>
        <text x="200" y="125" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Extract → Load → Transform → Test → Document → Catalog</text>
        
        {/* Warehouse */}
        <rect x="50" y="155" width="300" height="50" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-blue)" strokeWidth="1.5" />
        <text x="200" y="180" textAnchor="middle" fill="var(--color-blue)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">WAREHOUSE (Snowflake / BigQuery / Redshift / Postgres)</text>
        <text x="200" y="195" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="ui-monospace, monospace">Staging → Core → Marts → Semantic Layer (Metrics, Dimensions)</text>
        
        {/* Consumption layer */}
        <g stroke="var(--color-blue)" strokeWidth="2" strokeDasharray="4,4">
          <path d="M80 205 L80 230" markerEnd="url(#arrow3)" />
          <path d="M200 205 L200 230" markerEnd="url(#arrow3)" />
          <path d="M320 205 L320 230" markerEnd="url(#arrow3)" />
        </g>
        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,5 L7,2.5 z" fill="var(--color-blue)" />
          </marker>
        </defs>
        
        <g fill="var(--color-surface-elevated)" stroke="var(--color-line)" strokeWidth="1">
          <rect x="30" y="230" width="100" height="40" rx="6" />
          <text x="80" y="253" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">BI / Dashboards</text>
          <rect x="150" y="230" width="100" height="40" rx="6" />
          <text x="200" y="253" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Notebooks / ML</text>
          <rect x="270" y="230" width="100" height="40" rx="6" />
          <text x="320" y="253" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Embedded / API</text>
        </g>
      </svg>
    )
  },
  {
    id: "cloud-aware",
    title: "Cloud-Aware Engineering",
    subtitle: "Runtime as a design constraint",
    description: "Deployment, scaling, security, and ongoing ownership are part of system design—not afterthoughts. We treat infrastructure as code, design for observability from day one, and build cost-aware systems that scale with demand. The cloud is an engineering discipline, not a hosting checkbox.",
    keyConcepts: [
      { term: "Infrastructure as Code", detail: "Terraform, Pulumi, CDK—versioned, reviewed, tested, promoted" },
      { term: "Container platforms", detail: "EKS, GKE, ECS, serverless containers—right-sized for the workload" },
      { term: "Observability", detail: "Structured logs, metrics, traces, SLOs, alerting, runbooks" },
      { term: "Security by default", detail: "Least-privilege IAM, network segmentation, encryption, secret management" }
    ],
    diagram: (
      <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" style={{ maxWidth: "100%" }}>
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* VPC boundary */}
        <rect x="15" y="15" width="370" height="250" rx="12" fill="url(#cloudGrad)" stroke="var(--color-cyan)" strokeWidth="1.5" strokeDasharray="8,4" />
        <text x="30" y="35" fill="var(--color-cyan)" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600">VPC / NETWORK BOUNDARY</text>
        
        {/* Public subnet */}
        <rect x="30" y="50" width="160" height="90" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-line)" strokeWidth="1" />
        <text x="110" y="70" textAnchor="middle" fill="var(--color-muted)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">PUBLIC SUBNET</text>
        <rect x="50" y="80" width="120" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="1" />
        <text x="110" y="103" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Load Balancer</text>
        <text x="110" y="118" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">WAF / TLS Termination</text>
        
        {/* Private subnet - App */}
        <rect x="210" y="50" width="160" height="90" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-violet)" strokeWidth="1" />
        <text x="290" y="70" textAnchor="middle" fill="var(--color-violet)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">PRIVATE SUBNET - APP</text>
        <rect x="230" y="80" width="120" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-violet)" strokeWidth="1" />
        <text x="290" y="103" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Container Service</text>
        <text x="290" y="118" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Auto-scaling / Health checks</text>
        
        {/* Private subnet - Data */}
        <rect x="30" y="160" width="160" height="90" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-emerald)" strokeWidth="1" />
        <text x="110" y="180" textAnchor="middle" fill="var(--color-emerald)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">PRIVATE SUBNET - DATA</text>
        <rect x="50" y="200" width="120" height="35" rx="4" fill="var(--color-surface)" stroke="var(--color-emerald)" strokeWidth="1" />
        <text x="110" y="220" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">Managed DB</text>
        <text x="110" y="233" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="ui-monospace, monospace">Encrypted / Backups</text>
        
        {/* Private subnet - Cache/Queue */}
        <rect x="210" y="160" width="160" height="90" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-amber)" strokeWidth="1" />
        <text x="290" y="180" textAnchor="middle" fill="var(--color-amber)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">PRIVATE SUBNET - CACHE/QUEUE</text>
        <rect x="230" y="200" width="55" height="35" rx="4" fill="var(--color-surface)" stroke="var(--color-amber)" strokeWidth="1" />
        <text x="257" y="220" textAnchor="middle" fill="var(--color-text)" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="500">Redis</text>
        <rect x="295" y="200" width="55" height="35" rx="4" fill="var(--color-surface)" stroke="var(--color-amber)" strokeWidth="1" />
        <text x="322" y="220" textAnchor="middle" fill="var(--color-text)" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="500">Queue</text>
        
        {/* Observability overlay */}
        <g stroke="var(--color-violet)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.7">
          <path d="M110 50 L110 30" />
          <path d="M290 50 L290 30" />
          <path d="M110 160 L110 140" />
          <path d="M290 160 L290 140" />
        </g>
        <text x="200" y="25" textAnchor="middle" fill="var(--color-violet)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="500">OBSERVABILITY (Logs, Metrics, Traces, SLOs)</text>
        
        {/* IaC note */}
        <text x="200" y="275" textAnchor="middle" fill="var(--color-muted)" fontSize="9" fontFamily="ui-monospace, monospace" fontStyle="italic">All infrastructure defined as code • Versioned • Reviewed • Tested</text>
      </svg>
    )
  }
];

const intersectionAreas = [
  {
    title: "ML + Software: Model-as-a-Feature",
    description: "Models exposed as versioned, feature-flagged APIs with observable inference paths—so ML ships like any other feature, with the same CI/CD, rollback, and monitoring guarantees.",
    concepts: ["Model registry & versioning", "Feature flags for gradual rollout", "Inference latency budgets", "A/B testing infrastructure", "Automated rollback on drift"]
  },
  {
    title: "Software + Cloud: Runtime-Native Design",
    description: "Applications designed for their runtime from day one—container-native, stateless, observable, and cost-aware through infrastructure as code and right-sized compute.",
    concepts: ["12-factor principles", "Health checks & graceful degradation", "Horizontal scaling patterns", "Cost allocation tags", "Chaos engineering readiness"]
  },
  {
    title: "Cloud + Data: Governed Data Platform",
    description: "Data platforms on cloud-native warehouses and streaming—governed, scalable, and ready for both BI and ML workloads with unified access control and lineage.",
    concepts: ["Private networking only", "Column-level access control", "Automated lineage tracking", "Cross-region replication", "Serverless scaling"]
  },
  {
    title: "Data + ML: Closing the Loop",
    description: "Research pipelines that feed production models—experimentation, feature stores, and evaluation loops that close the gap between insight and deployment.",
    concepts: ["Feature store (offline/online)", "Experiment tracking & reproducibility", "Automated model validation", "Shadow deployment patterns", "Continuous evaluation"]
  },
  {
    title: "ML + Cloud: Scalable Inference",
    description: "Model serving that scales to zero and up—serverless endpoints, batch transform jobs, and edge deployment patterns optimized for latency and cost.",
    concepts: ["Serverless inference endpoints", "GPU autoscaling policies", "Model quantization & distillation", "Edge / CDN caching", "Multi-region deployment"]
  },
  {
    title: "Software + Data: Event-Driven Architecture",
    description: "Applications that emit domain events as first-class citizens—enabling real-time analytics, audit trails, and downstream ML without coupling.",
    concepts: ["Event sourcing patterns", "Schema registry & evolution", "Exactly-once semantics", "Replay for backfilling", "Consumer-driven contracts"]
  }
];

function CapabilityCard({ capability, index }: { capability: typeof capabilityAreas[0]; index: number }) {
  const [showDiagram, setShowDiagram] = useState(false);
  
  return (
    <motion.article
      className="capability-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="capability-header">
        <h2>{capability.title}</h2>
        <p className="capability-subtitle">{capability.subtitle}</p>
      </div>
      
      <p className="capability-description">{capability.description}</p>
      
      <div className="capability-concepts">
        {capability.keyConcepts.map((concept, i) => (
          <div key={i} className="concept-item">
            <span className="concept-term">{concept.term}</span>
            <span className="concept-detail">{concept.detail}</span>
          </div>
        ))}
      </div>
      
      <button
        className="diagram-toggle"
        onClick={() => setShowDiagram(!showDiagram)}
        aria-expanded={showDiagram}
        aria-controls={`diagram-${capability.id}`}
      >
        {showDiagram ? "Hide diagram" : "Show architecture diagram"}
        <span className="toggle-icon" aria-hidden="true">
          {showDiagram ? "▲" : "▼"}
        </span>
      </button>
      
      <motion.div
        id={`diagram-${capability.id}`}
        className="capability-diagram"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showDiagram ? 1 : 0, height: showDiagram ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="diagram-container">
          {capability.diagram}
        </div>
      </motion.div>
    </motion.article>
  );
}

function IntersectionSection() {
  return (
    <section className="intersection-section" aria-labelledby="intersection-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>02</span>
            <span>INTERSECTIONS</span>
          </div>
          <div>
            <h2 id="intersection-heading" className="section-title">
              Where capabilities <em>compound</em>.
            </h2>
            <p className="section-intro">
              The highest leverage work happens at the boundaries between disciplines. These intersections are where we operate daily.
            </p>
          </div>
        </div>
        
        <div className="intersection-grid">
          {intersectionAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="intersection-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="intersection-concepts">
                {area.concepts.map((concept, i) => (
                  <li key={i}>
                    <span className="concept-dot" aria-hidden="true" />
                    {concept}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkingPrinciples() {
  const principles = [
    {
      title: "Composability over monoliths",
      description: "Capabilities are designed as independent, composable services—not a single platform you must adopt entirely. Use what you need, connect what you have."
    },
    {
      title: "Observability as a requirement",
      description: "Every capability includes structured logging, metrics, traces, and SLOs from day one. You cannot operate what you cannot see."
    },
    {
      title: "Governance by default",
      description: "Access control, data lineage, encryption, audit trails, and compliance readiness are built in—not bolted on after an audit fails."
    },
    {
      title: "Portability over lock-in",
      description: "Architectures favor open standards, multi-cloud patterns, and vendor-neutral interfaces. Your system should be movable."
    },
    {
      title: "Human-centered automation",
      description: "Automation amplifies human judgment—it doesn't replace it. Confidence thresholds, review queues, and override paths are designed in."
    },
    {
      title: "Continuous validation",
      description: "Assumptions are tested in production. A/B experiments, shadow evaluations, and drift detection keep the system honest over time."
    }
  ];

  return (
    <section className="working-principles" aria-labelledby="principles-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>03</span>
            <span>PRINCIPLES</span>
          </div>
          <div>
            <h2 id="principles-heading" className="section-title">
              How these capabilities <em>work together</em>.
            </h2>
            <p className="section-intro">
              These principles govern how we compose capabilities into systems. They're not features—they're architectural commitments.
            </p>
          </div>
        </div>
        
        <div className="principles-list">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="principle-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="principle-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .stagger-children');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero 
        label="CAPABILITIES" 
        title="A thoughtful system, not a feature checklist." 
        description="Our capabilities are assembled around the problem, team, and operating context. The right combination is determined during discovery."
      />
      
      <section className="capabilities-overview" aria-labelledby="capabilities-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-index">
              <span>01</span>
              <span>CORE CAPABILITIES</span>
            </div>
            <div>
              <h2 id="capabilities-heading" className="section-title">
                Four domains. <em>Deep expertise in each.</em>
              </h2>
              <p className="section-intro">
                These are the technical domains we work in daily. Not buzzwords—battle-tested expertise applied to your specific constraints. Click any card to reveal the architecture.
              </p>
            </div>
          </div>
          
          <div className="capabilities-grid">
            {capabilityAreas.map((capability, index) => (
              <CapabilityCard key={capability.id} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <IntersectionSection />
      <WorkingPrinciples />
      <ClosingCTA />
    </>
  );
}
