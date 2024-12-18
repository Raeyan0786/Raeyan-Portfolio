import localFont from "next/font/local";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransiton from "@/components/StairTransition";

const jetbrainMono=JetBrains_Mono({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainMono.variable} antialiased`}
      >
        <Header/>
        <StairTransiton/>
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
