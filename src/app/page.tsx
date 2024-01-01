'use client'
import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <header>
        {/* Use the Navbar component here */}
        <Navbar />
      </header>
      <main>
        {/* NOTE FOLDERS */}
        <aside>
          <nav>
            {/* Navigation elements for note folders */}
          </nav>
        </aside>

        {/* MULTIPLE NOTE CARD */}
        <section>
          {/* Section content for multiple note cards */}
        </section>
      </main>
      <footer className="mobile-footer">
        {/* FOR MOBILE ONLY IF NEEDED */}
      </footer>
    </>
  )
}
