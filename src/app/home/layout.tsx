export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>Home Nav</nav>
      {children}
    </section>
  )
}