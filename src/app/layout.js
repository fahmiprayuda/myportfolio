import "./globals.css";


export const metadata = {
  title: "Nama Website Anda",
  description: "Isi dengan deskripsi website Anda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
