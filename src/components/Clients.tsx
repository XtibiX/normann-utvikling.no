const clients = ["TET Digital", "Ruter", "SpareBank 1", "Statnett"];

export const Clients = () => {
  return (
    <section id="clients" aria-label="Kunder" className="mt-20 border-y border-ink/15">
      <div className="container grid gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8">
        <p className="eyebrow lg:col-span-3">Kunder · finans, transport og energi</p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:col-span-9">
          {clients.map((name) => (
            <li key={name} className="font-serif text-3xl text-ink/80 sm:text-4xl">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
