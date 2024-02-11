'use client'

import { LeftDrawer, Navbar } from "@/components"

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <LeftDrawer />
    </>
  )
}