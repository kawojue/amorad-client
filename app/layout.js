import { Inter } from "next/font/google";
import '/styles/globals.css'
import '/styles/style.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amorad",
  description: "Web-based, medical imaging platform for medical practitioners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} debug-screens`} >
        {children}
      </body>
    </html>
  );
}
