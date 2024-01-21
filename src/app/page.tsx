'use client'
import { Navbar, LeftDrawer } from "@/components";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleLeftDrawer, selectLeftDrawerIsOpen } from "@/lib/features/leftDrawer/leftDrawerSlice";
import DarkModeToggleSwitch from "@/components/DarkModeToggleSwitch";

export default function Home() {
  const dispatch = useAppDispatch();
  const currentLeftDrawer = useAppSelector(selectLeftDrawerIsOpen);

  console.log(currentLeftDrawer)
  
  return (
    <>
      <header>
        {/* Use the Navbar component here */}
        <Navbar />
      </header>
      <header style={{display: 'flex', justifyContent:'space-between'}}>
        <button 
          style={{textAlign: 'right'}}
              onClick={() => dispatch(toggleLeftDrawer())}
            >
              btn
            </button>
        <button 
          style={{textAlign: 'right'}}
              onClick={() => dispatch(toggleLeftDrawer())}
            >
              btn
            </button>
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
