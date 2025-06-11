import style from "./preguica.module.css";

export default function Preguica() {
  return (
    <div className={style.preguica}>
      <h1 className={style.titulo}>VAI TREINAR, FRANGO! 🐔💪</h1>
      <img
        className={style.imagem}
        src="https://i.makeagif.com/media/6-28-2020/MiUfOT.gif"
        alt="Galinha correndo"
      />
    </div>
  );
}
