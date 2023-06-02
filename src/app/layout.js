import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "../app/navbar/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <style>{`
          h1 {
            color: yellow;
          }
        `}</style>
      </body>
    </html>
  );
}
