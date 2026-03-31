export default function About() {
  return (
    <main className="portfolio-content">
      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p className="content-text">
          I am an Information Technology student at Jadavpur University with strong fundamentals in:
        </p>
        <ul className="content-list">
          <li>Data Structures & Algorithms</li>
          <li>Backend Architecture</li>
          <li>AI Systems (RAG, LLM apps)</li>
        </ul>
        <p className="content-text">I specialize in:</p>
        <ul className="content-list">
          <li>Designing APIs (FastAPI / Node)</li>
          <li>Building scalable systems</li>
          <li>Integrating AI into real products</li>
        </ul>
        <p className="punch-line">I focus on building production-ready systems, not just demos.</p>
      </section>
    </main>
  );
}
