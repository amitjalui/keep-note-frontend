'use client'

import { Navbar, LeftDrawer, Grid } from "@/components";
import Test from "@/components/Test/Test";

export default function Home() {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Test />
      <main>
        <Grid />
      </main>
      <footer className="mobile-footer">
        {/* FOR MOBILE ONLY IF NEEDED */}
      </footer>

      <LeftDrawer />
    </>
  )
}
