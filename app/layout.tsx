"use client";

import "../assets/css/globals.css";
import { ReactNode } from "react";
import { Roboto_Flex as Roboto } from "next/font/google";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import SearchMusic from '../components/searchMusic';
import Banners from '../components/banners';

import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale(ptBR);

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>     
        <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
          <body className={`${roboto.variable} bg-primary font-sans`}>
            <Header />
            <Banners />
            <SearchMusic />
            <Footer />
          </body>
        </html>    
    </html>
  );

}
