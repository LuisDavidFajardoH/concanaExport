import './globals.css';

export const metadata = {
  title: 'Concana Export | Panela en Polvo para Vending',
  description: 'Proveedor B2B de panela en polvo para el sector vending. 100% natural, solubilidad total y formatos de exportación desde 25 kg.',
  keywords: 'panela en polvo, panela saborizada, vending, azúcar natural, exportación, B2B',
  openGraph: {
    title: 'Concana Export | Panela en Polvo para Vending',
    description: 'Panela 100% natural en polvo para operadores de vending. Exportación B2B desde Colombia.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
