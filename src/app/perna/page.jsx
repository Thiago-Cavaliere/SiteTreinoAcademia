import pernaData from '@/../public/perna.json'; 

export default function Perna() {
  const perna = Object.values(pernaData); 

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Treinos de Perna</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {perna.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 w-60 flex flex-col items-center"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-48 h-auto mb-2 rounded"
            />
            <p className="text-lg font-semibold text-center">{item.nome}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
