'use client'
import { Navbar, LeftDrawer, Grid } from "@/components";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleLeftDrawer, selectLeftDrawerIsOpen } from "@/lib/features/leftDrawer/leftDrawerSlice";
import DarkModeToggleSwitch from "@/components/DarkModeToggleSwitch";
import { MainBody, Main } from "./pageStyles";

export default function Home() {
  const dispatch = useAppDispatch();
  const currentLeftDrawer = useAppSelector(selectLeftDrawerIsOpen);

  console.log(currentLeftDrawer)
  
  return (
    <MainBody>
      <header>
        {/* Use the Navbar component here */}
        <Navbar />
      </header>
      <header
        style={{
          display: 'flex', 
          justifyContent:'space-between', 
          
        }}
      >
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
        <DarkModeToggleSwitch />
      </header>
      <Main>
        {/* MULTIPLE NOTE CARD */}
        <Grid />
      </Main>
      <footer className="mobile-footer">
        {/* FOR MOBILE ONLY IF NEEDED */}
      </footer>

      <LeftDrawer />
    </MainBody>
  )
}
