export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full p-8 rounded-2xl bg-zinc-900 text-center shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Viaje de la masonada</h1>

        <p className="mb-2 text-zinc-300">Pago individual anti ratas</p>

        <p className="text-5xl font-bold mb-6">165 €</p>

<form action="/api/checkout" method="POST" className="space-y-4">
  <select
    name="nombre"
    required
    defaultValue=""
    className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white outline-none focus:border-white"
  >
    <option value="" disabled>
      Selecciona tu nombre
    </option>

    <option value="Brian">Brian</option>
    <option value="Adrian">Adrian</option>
    <option value="Dani">Dani</option>
    <option value="Edgar">Edgar</option>
    <option value="Ocas">Ocas</option>
    <option value="Sebas">Sebas</option>
    <option value="Lucas">Lucas</option>
    <option value="David">David</option>
    <option value="Nico">Nico</option>
    <option value="Jose">Jose</option>
    <option value="Andres">Andres</option>
    <option value="Vairon">Vairon</option>
  </select>

  <button className="w-full rounded-xl bg-white text-black py-3 font-bold hover:bg-zinc-200 transition">
    Pagar 165 €
  </button>
</form>
        <p className="mt-6 text-sm text-zinc-500">
          Pago seguro mediante Stripe. Compatible con tarjeta y Apple Pay si está disponible.
        </p>
      </div>
    </main>
  );
}