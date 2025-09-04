import type { Metadata } from "next";
import { Titillium_Web, Inter } from "next/font/google";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike Store",
  description:
    "Este sitio web no está afiliado ni respaldado por Nike, Inc. Es un proyecto de desarrollo web con fines educativos y demostrativos, creado para mostrar habilidades de programación y diseño. Aquí podrás explorar una simulación de tienda en línea inspirada en la experiencia de compra de Nike, incluyendo productos, carrito de compras y un diseño moderno. Los productos, imágenes y marcas mostrados son propiedad de sus respectivos dueños.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${titilliumWeb.variable} ${inter.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="flex flex-col flex-grow basis-0 min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
