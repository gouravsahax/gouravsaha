export default function Skills() {
  return (
    <main className="portfolio-content">
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-title">Languages</h3>
            <div className="skill-items">
              <span className="skill-tag">C, C++</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript / TypeScript</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-title">Backend</h3>
            <div className="skill-items">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Node.js / Express</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Authentication (NextAuth, OAuth)</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">AI / ML Stack</h3>
            <div className="skill-items">
              <span className="skill-tag">LangChain</span>
              <span className="skill-tag">LangGraph</span>
              <span className="skill-tag">Vector Databases (Chroma)</span>
              <span className="skill-tag">Embeddings (HuggingFace)</span>
              <span className="skill-tag">RAG pipelines</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">Databases</h3>
            <div className="skill-items">
              <span className="skill-tag">MongoDB (GeoJSON, 2dsphere)</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">Frontend</h3>
            <div className="skill-items">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">ShadCN / DaisyUI</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">DevOps / Tools</h3>
            <div className="skill-items">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS (basic)</span>
              <span className="skill-tag">Git / GitHub</span>
              <span className="skill-tag">Playwright (scraping)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
