export default function Habilidades() {
  return (
    <section
      id="Habilidades"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">
          Habilidades
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            "SAP ERP",
            "MRP",
            "Excel Avançado",
            "Supply Chain",
            "Logística",
            "Gestão de KPI",
            "JIT",
            "Inglês Avançado",
            "Francês Básico"
          ].map((habilidade) => (
            <span
              key={habilidade}
              className="bg-green-200 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-green-400 transition-colors font-semibold"
            >
              {habilidade}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}