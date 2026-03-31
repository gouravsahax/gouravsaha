import Image from "next/image";

export default function Home() {
  return (
    <main className="portfolio-content">
      <section className="section">
        <h1 className="hero-title">Full Stack Developer | Learning AI Systems & RAG Applications</h1>
        
        <div className="profile-img-container">
          <Image 
            src="/profile.png" 
            alt="Gourav Saha" 
            width={240} 
            height={240} 
            className="profile-img"
            unoptimized
            priority
          />
        </div>

        <p className="hero-pitch">
          I build scalable backend systems and AI-powered applications using FastAPI, PostgreSQL, and modern LLM stacks (LangChain, LangGraph). Focused on real-world products, not tutorials.
        </p>

        <p className="content-text">
          I am an Information Technology student at Jadavpur University with strong fundamentals in:
        </p>
        <ul className="content-list">
          <li>Data Structures & Algorithms</li>
          <li>Backend Architecture</li>
          <li>AI Systems (RAG, LLM apps)</li>
        </ul>
      </section>
    </main>
  );
}
