# Solace Kernel Public

Public-facing governance infrastructure surface for **Solace Kernel**.

Solace Kernel is the deterministic execution authority layer for governed intelligence systems. It does not generate answers. It determines what is allowed to survive, persist, and act.

> Models propose. Governance decides. Truth survives.

## What this public repository contains

This repository contains a sanitized public web surface and documentation for Solace Kernel:

- Public architecture framing
- Constitutional invariants
- Execution outcome model
- Proof-bearing governance overview
- Static marketing and documentation interface

## What this repository intentionally excludes

This repository does **not** include production runtime infrastructure:

- No live model orchestration routes
- No private keys or signing material
- No ledger implementation
- No telemetry pipelines
- No Supabase or external service credentials
- No private governance logic
- No operational execution APIs

The production Kernel remains private. This public repository exists to communicate the governed execution boundary and the architectural role of the Kernel within the broader Moral Clarity AI / Solace infrastructure family.

## Core principle

Models may produce candidates. The Kernel determines whether those candidates are admissible under constitutional, state, authority, and accountability constraints.

A candidate may be coherent and still fail admissibility.

## Constitutional invariants

Solace Kernel is framed around three non-negotiable constraints:

1. **Truth** — the system must not introduce, propagate, or persist false, unverifiable, or misleading representations of reality.
2. **Compassion** — the system must not enable or materially contribute to unjustified harm.
3. **Accountability** — every output, transformation, and decision must remain attributable, auditable, and reviewable.

## Execution outcome model

The public model describes four governed outcomes:

- **PERMIT** — survives constitutional evaluation
- **CONDITIONAL** — allowed only with explicit constraints
- **ESCALATE** — requires higher authority or external validation
- **DENY** — inadmissible and removed from the decision space

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Recommended GitHub topics

```text
ai-governance
runtime-governance
execution-governance
solace-kernel
autonomous-systems
admissibility
governance-infrastructure
moral-clarity-ai
proof-of-execution
constitutional-ai
```

## License

Apache License 2.0. See [LICENSE](./LICENSE).
