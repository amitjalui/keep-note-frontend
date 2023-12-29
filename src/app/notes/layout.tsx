export default function NoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>Note Nav</nav>
      {children}
    </section>
  )
}