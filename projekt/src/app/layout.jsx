import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "En hjemmeside hvor du kan bytte dine brugte ting med andre",
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
