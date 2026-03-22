import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
      
      {/* FOTO */}
      <Image
        src="/jessica.jpg"
        alt="Jessica Rodrigues"
        width={160}
        height={160}
        className="rounded-full object-cover shadow-2xl mb-6 border-4 border-gray-300 hover:scale-105 transition duration-300
                   sm:w-36 sm:h-36
                   md:w-40 md:h-40
                   lg:w-48 lg:h-48"
        priority
      />

      {/* NOME */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        Jessica Rodrigues
      </h1>

      {/* TÍTULO */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-3 max-w-2xl">
        Analista de Planejamento de Materiais • Especialista em Cadeia de Suprimentos
      </h2>

      {/* BADGES */}
      <div className="flex gap-3 mb-4 flex-wrap justify-center">
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs sm:text-sm">
          Inglês - Avançado
        </span>
        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm">
          SAP ERP
        </span>
        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs sm:text-sm">
          MRP
        </span>
      </div>

      {/* DESCRIÇÃO */}
      <p className="text-sm sm:text-base md:text-lg max-w-xl mb-6 text-gray-300 px-2 sm:px-0">
        Experiência em gestão global de fornecedores, planejamento de demanda e otimização da cadeia de suprimentos,
        garantindo alto desempenho e disponibilidade de materiais.
      </p>

     <div className="flex gap-4 flex-wrap justify-center mb-16">
  <a
    href="/analista-jessica.pdf"
    download
    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-md"
  >
    Download CV
  </a>

  <a
    href="https://wa.me/5519983505343"
    target="_blank"
    className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
  >
    WhatsApp
  </a>
</div>

    </section>
  );
}