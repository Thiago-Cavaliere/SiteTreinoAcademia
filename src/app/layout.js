import Navbar from "./components/Navbar/page";
import "./globals.css";

export const metadata = {
  title: "Exercícios para academia!",
  description: "Seu site facil para aprender os exercícios!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
