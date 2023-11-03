import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Providers from '@/providers';

const josefinSans = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'Taskdrawer | Decorate Your Tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
