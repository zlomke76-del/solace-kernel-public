const proofs = [
  "Constitution verified",
  "Candidate evaluated",
  "Admissibility resolved",
  "Governed synthesis issued",
  "Authority record sealed",
];

const outcomes = [
  {
    name: "PERMIT",
    text: "The output survives constitutional evaluation and may proceed in governed form.",
  },
  {
    name: "CONDITIONAL",
    text: "The output may proceed only with explicit limits, uncertainty disclosure, or reduced operational authority.",
  },
  {
    name: "ESCALATE",
    text: "The decision requires higher authority, human review, or external validation before consequence formation.",
  },
  {
    name: "DENY",
    text: "The output is inadmissible and is removed from the decision space before synthesis.",
  },
];

const layers = [
  "Truth: no false, misleading, or unsupported operational representation survives.",
  "Compassion: speed, efficiency, or profit cannot override harm constraints.",
  "Accountability: outputs must remain attributable, auditable, and reviewable.",
  "State validity: authority alone is insufficient when the underlying state cannot support action.",
  "Proof continuity: every governed decision must preserve a reconstructable authority trail.",
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="heroOverlay" />
        <div className="nav">
          <div className="brand">
            <img src="/assets/image_solace_kernel_logo_01.png" alt="Solace Kernel" />
            <span>Solace Kernel</span>
          </div>
          <a href="https://www.moralclarity.ai" aria-label="Moral Clarity AI">
            Moral Clarity AI
          </a>
        </div>

        <div className="heroContent">
          <p className="eyebrow">Governed Execution Authority</p>
          <h1>Models propose. Governance decides. Truth survives.</h1>
          <p className="lede">
            Solace Kernel is the deterministic authority layer for governed intelligence systems. It does not generate intelligence. It determines what is allowed to survive, persist, and act.
          </p>
          <div className="actions">
            <a href="#architecture" className="primary">View architecture</a>
            <a href="#proof" className="secondary">Proof model</a>
          </div>
        </div>
      </section>

      <section className="section gridTwo" id="architecture">
        <div>
          <p className="eyebrow">Execution-time adjudication</p>
          <h2>Not a filter. A survival boundary.</h2>
          <p>
            The Kernel sits between probabilistic model output and operational consequence. Candidate outputs are evaluated before synthesis. Non-admissible material is denied, escalated, or constrained before it can influence the final governed result.
          </p>
        </div>
        <div className="panel terminal">
          <span>INPUT</span>
          <span>↓</span>
          <span>Parallel candidate proposals</span>
          <span>↓</span>
          <span>Constitutional evaluation</span>
          <span>↓</span>
          <span>Admissibility decision</span>
          <span>↓</span>
          <span>Governed synthesis from surviving outputs only</span>
          <span>↓</span>
          <strong>FINAL ADMISSIBLE OUTPUT</strong>
        </div>
      </section>

      <section className="section darkBand">
        <p className="eyebrow">Constitutional invariants</p>
        <h2>Three constraints govern every decision.</h2>
        <div className="cards three">
          <article>
            <h3>Truth</h3>
            <p>The system must not introduce, propagate, or persist false, unverifiable, or misleading representations of reality.</p>
          </article>
          <article>
            <h3>Compassion</h3>
            <p>The system must not enable or materially contribute to unjustified harm, even when continuation would be faster.</p>
          </article>
          <article>
            <h3>Accountability</h3>
            <p>Every output, transformation, memory write, and authority decision must remain attributable and reviewable.</p>
          </article>
        </div>
      </section>

      <section className="section" id="proof">
        <p className="eyebrow">Proof-bearing governance</p>
        <h2>Every output becomes a decision artifact.</h2>
        <div className="proofGrid">
          {proofs.map((item, index) => (
            <div className="proof" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section gridTwo">
        <div className="panel">
          <p className="eyebrow">Outcome space</p>
          <h2>Execution is not binary.</h2>
          <p>
            Governed systems need more than permit/refuse mechanics. The Kernel supports differentiated outcomes so consequence-bearing decisions can be constrained, escalated, or blocked without collapsing every case into a simple yes/no path.
          </p>
        </div>
        <div className="outcomes">
          {outcomes.map((outcome) => (
            <article key={outcome.name}>
              <h3>{outcome.name}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section darkBand">
        <p className="eyebrow">Admissibility conditions</p>
        <h2>Coherence is not enough.</h2>
        <div className="listPanel">
          {layers.map((layer) => (
            <p key={layer}>{layer}</p>
          ))}
        </div>
      </section>

      <footer>
        <strong>Solace Kernel</strong>
        <span>Public-facing infrastructure surface. Operational runtime, private keys, ledgers, telemetry, and execution services are intentionally excluded from this repository.</span>
      </footer>
    </main>
  );
}
