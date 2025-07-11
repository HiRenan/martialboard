import "../styles/main.scss";

export const metadata = {
  title: "Login | MartialBoard",
  description: "Acesse a plataforma MartialBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
