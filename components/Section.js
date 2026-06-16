export default function Section({ eyebrow, title, children }) {
  const id = title.toLowerCase().includes('selected') ? 'work' : title.toLowerCase().includes('guarantees') ? 'method' : undefined

  return (
    <section className="section" id={id}>
      <div className="container">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
