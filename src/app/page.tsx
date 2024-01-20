'use client'
import { Navbar, LeftDrawer } from "@/components";
import DarkModeToggleSwitch from "@/components/DarkModeToggleSwitch";

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
            <DarkModeToggleSwitch />
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

      <LeftDrawer />
    </>
  )
}
