import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/organism/Header";
import "./globals.css";
import { IUser } from "@/interface/IUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface SharedLayoutProps {
  children: React.ReactNode;
  user?: IUser | null;
  showHeader?: boolean;
}

export default function SharedLayout({
  children,
  user,
  showHeader = true,
}: SharedLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {showHeader && <Header user={user || null} />}
        <div className="bg-gray02 flex flex-col min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}
