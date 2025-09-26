import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "En hjemmeside hvor du kan bytte dine brugte ting med andre",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body >
        {children}
      </body>
    </html>
  );
}
