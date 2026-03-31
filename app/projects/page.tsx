export default function Projects() {
  return (
    <main className="portfolio-content">
      <section className="section">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-card">
          <h3 className="project-title">YouTube RAG Chatbot</h3>
          <span className="project-tech">Tech: LangChain, LangGraph, Chroma, HuggingFace, Groq</span>
          <ul className="content-list">
            <li>Extracts YouTube transcripts and converts them to embeddings</li>
            <li>Performs semantic search to answer questions contextually</li>
            <li>Supports multi-turn conversation using LangGraph</li>
            <li>Maintains persistent conversational memory for context-aware responses</li>
          </ul>
          <p className="gold-point">Advanced System: Integrated conversational memory and graph-based execution for stateful LLM operations.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">StayRadar (Rental Platform)</h3>
          <span className="project-tech">Tech: MongoDB (GeoJSON), Google Maps API, Node.js</span>
          <ul className="content-list">
            <li>Location-based search using 2dsphere indexing</li>
            <li>Nearby property discovery</li>
            <li>Interactive map-based UI</li>
          </ul>
          <p className="gold-point">Implemented geospatial queries using MongoDB GeoJSON for efficient proximity-based filtering.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">College Event Management System</h3>
          <span className="project-tech">Tech: Next.js, Node.js, Prisma, PostgreSQL</span>
          <ul className="content-list">
            <li>Event creation & management with participant registration</li>
            <li>Team coordination and structured role-based workflows</li>
          </ul>
          <p className="gold-point">Built robust role-based access controls demonstrating system design thinking, focusing on workflow handling rather than just simple CRUD operations.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">JavaScript Projects Collection</h3>
          <span className="project-tech">Tech: Vanilla JavaScript</span>
          <ul className="content-list">
            <li>LocalStorage apps, Debouncing, Currying, and API utilities.</li>
          </ul>
          <p className="gold-point">A collection of low-level implementations of core JavaScript concepts.</p>
        </div>
      </section>
    </main>
  );
}
