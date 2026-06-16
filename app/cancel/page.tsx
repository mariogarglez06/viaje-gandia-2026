export default function Cancel() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full p-8 rounded-2xl bg-zinc-900 text-center">
        <h1 className="text-3xl font-bold mb-4">Pago cancelado ❌</h1>
        <p className="text-zinc-300">
          No se ha realizado ningún cargo. Puedes volver a intentarlo.
        </p>
      </div>
    </main>
  );
}