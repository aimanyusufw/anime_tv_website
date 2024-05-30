import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Home - Anime Tv",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}