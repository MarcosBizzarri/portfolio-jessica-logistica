export default function Education() {
  return (
    <section
      id="education"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-green-400">
          Formação Acadêmica & Cursos
        </h2>

        <div className="flex flex-col gap-8">
          {/* Pós-graduação 2025 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Pós-graduação Lato Sensu - MBA, Gestão Operacional e Logística Empresarial
            </h3>
            <p className="text-green-400 font-medium">
              ANHANGUERA EDUCACIONAL · 2025
            </p>
          </div>

          {/* Pós-graduação 2024-2025 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Pós-graduação Lato Sensu - MBA, Gestão da Cadeia de Suprimentos e Logística
            </h3>
            <p className="text-green-400 font-medium">
              ANHANGUERA EDUCACIONAL · 2024 - 2025
            </p>
          </div>

          {/* Graduação 2012-2014 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Gestão de Recursos Humanos
            </h3>
            <p className="text-green-400 font-medium">
              UNIVERSIDADE PAULISTA - UNIP · 2012 - 2014
            </p>
          </div>

          {/* Idiomas */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Idiomas
            </h3>
            <ul className="text-gray-200 mt-2 space-y-1">
              <li>Inglês - Avançado</li>
              <li>Francês - Básico</li>
            </ul>
          </div>

          {/* Cursos */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Cursos
            </h3>
            <ul className="text-gray-200 mt-2 space-y-1">
              <li>Excel - Avançado</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}