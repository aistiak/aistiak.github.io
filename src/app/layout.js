import { Inter } from "next/font/google";
import "./globals.css";
import Top from "./top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <div className="p-4 mx-4 sm:p-8 sm:mx-8 md:p-12 md:mx-12 lg:p-16 lg:mx-16 xl:p-20 xl:mx-32 border-2 border-dotted border-black">
          <Top />
          {children}
        </div>
      </body>
    </html>
  );
}
