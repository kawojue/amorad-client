import '/styles/globals.css'
import '/styles/style.css'
import { Providers } from "@/redux/StoreProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Amorad",
  description: "Web-based, medical imaging platform for medical practitioners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>

        <link rel="icon" href="/images/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.svg" sizes="any" />

      </head>

      <body className={`debug-screens`} >

        <Providers>

          {children}

          <Toaster position="top-center" reverseOrder={false} />

        </Providers>

      </body>

    </html>
  );
}
