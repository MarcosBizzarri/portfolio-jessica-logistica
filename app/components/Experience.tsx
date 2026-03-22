export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      
      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-green-400 text-center">
        Experiência
      </h2>

      {/* CARDS DE EXPERIÊNCIA */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {/* CARD 1 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1 border border-gray-700">
          <h3 className="font-bold text-lg sm:text-xl text-green-400 mb-1">
            Analista de Planejamento de Materiais
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3">
            Marelli | 2022 - Atual
          </p>
          <ul className="list-disc ml-5 space-y-1 text-gray-200 text-sm sm:text-base">
            <li>Gestão de MRP e planejamento de materiais</li>
            <li>Controle de fornecedores globais</li>
            <li>Reuniões internacionais em inglês</li>
            <li>Mitigação de riscos na cadeia de suprimentos</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1 border border-gray-700">
          <h3 className="font-bold text-lg sm:text-xl text-blue-400 mb-1">
            Líder de Produção
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3">Marelli | 2017 - 2022</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-200 text-sm sm:text-base">
            <li>Gestão de equipe e processos produtivos</li>
            <li>Melhoria contínua</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1 border border-gray-700">
          <h3 className="font-bold text-lg sm:text-xl text-purple-400 mb-1">
            Operadora de Produção
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3">Marelli | 2011 - 2017</p>
        </div>

      </div>
    </section>
  );
}