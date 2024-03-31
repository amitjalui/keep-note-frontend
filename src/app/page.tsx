'use client'

import { Navbar, Grid } from "@/components";
import Test from "@/components/Test/Test";

import dynamic from 'next/dynamic';

const DynamicLeftDrawer = dynamic(() => import('@/components/LeftDrawer/LeftDrawer'), {
  loading: () => <p>LOADING LeftDrawer</p>
})

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

      <DynamicLeftDrawer />
    </>
  )
}
