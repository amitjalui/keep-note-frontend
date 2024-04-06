'use client'

import { Navbar } from "@/components"

import dynamic from 'next/dynamic';

const DynamicLeftDrawer = dynamic(() => import('@/components/LeftDrawer/LeftDrawer'), {
  loading: () => <p>LOADING LeftDrawer</p>
})

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <DynamicLeftDrawer />
    </>
  )
}