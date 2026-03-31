import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourav Saha | Portfolio",
  description: "Backend-Focused Full Stack Developer & AI Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="portfolio-container">
          <header className="portfolio-header">
            <div className="header-name">Gourav Saha</div>
            <nav className="header-nav">
              <Link href="/">Home</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/achievements">Achievements</Link>
              <Link href="/education">Education</Link>
            </nav>
          </header>

          <div className="portfolio-body">
            <aside className="portfolio-sidebar">
              <a href="mailto:contact@example.com" className="sidebar-link">Email</a>
              <a href="https://github.com" className="sidebar-link">Github</a>
              <a href="https://linkedin.com" className="sidebar-link">LinkedIn</a>
            </aside>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
