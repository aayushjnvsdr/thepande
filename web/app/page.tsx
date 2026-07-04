export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-24">
      <h1 className="text-6xl font-serif mb-6">
        Aayush Pandey
      </h1>

      <p className="text-xl text-neutral-600 mb-12">
        Thinking out loud.
      </p>

      <nav className="flex gap-8 mb-20 text-neutral-700">
        <a href="#">Writing</a>
        <a href="#">Archive</a>
        <a href="#">About</a>
      </nav>

      <section>
        <h2 className="uppercase tracking-[0.25em] text-sm text-neutral-500 mb-8">
          Recent Writing
        </h2>

        <h3 className="text-3xl font-serif mb-2">
          No essays yet.
        </h3>

        <p className="text-neutral-600">
          This page will fill itself over time.
        </p>
      </section>
    </main>
  );
}