import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "En App hvor du kan tilmelde dig forskellige arktivitetter",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
