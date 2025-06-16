import costasData from '@/../public/costas.json';

export default function Treino() {
  const costas = Object.values(costasData);

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Treinos de Costas</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {costas.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 w-72 flex flex-col items-center"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <p className="text-lg font-bold text-center">{item.nome}</p>
            <p className="text-sm text-gray-600 text-center mt-1">{item.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
