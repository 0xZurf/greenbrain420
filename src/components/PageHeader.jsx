export default function PageHeader({ title, lede, children }) {
  return (
    <section className="wrap pt-16 md:pt-24 pb-10 md:pb-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <h1 className="display-xl">{title}</h1>
        <div>
          {lede && <p className="lede">{lede}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
