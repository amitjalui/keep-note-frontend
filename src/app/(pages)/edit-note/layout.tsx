import dynamic from 'next/dynamic';

const DynamicLeftDrawer = dynamic(() => import('@/components/LeftDrawer/LeftDrawer'), {
  ssr: false, 
})

const DynamicNavbar = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false, 
})

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DynamicNavbar />
      {children}
      <DynamicLeftDrawer />
    </>
  )
}