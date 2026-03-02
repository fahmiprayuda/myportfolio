import "./globals.css";
import { Montserrat_Alternates, KoHo } from "next/font/google";
import SmoothProvider from "@/components/providers/SmoothProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const heading = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600","700"],
  variable: "--font-heading",
});

const body = KoHo({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: "Fahmi Prayuda | Portfolio",
    template: "%s | Fahmi Prayuda",
  },
  description: "Personal Portfolio Website of Fahmi Prayuda, a passionate software developer specializing in web development and design. Explore my projects, skills, and experience in creating innovative and user-friendly web applications. Discover how I can help bring your ideas to life with my expertise in front-end and back-end development. Let's connect and collaborate on your next project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body bg-white text-gray-900">
        
        <Navbar />
        <SmoothProvider>{children}</SmoothProvider>
        <Footer />
      </body>
    </html>
  );
}