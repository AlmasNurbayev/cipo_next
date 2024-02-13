import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import Footer from './_components/Footer';
import Header from './_components/Header';

const robotoFlex = Roboto_Flex({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-robotoFlex',
});

export const metadata: Metadata = {
  title: 'Cipo.kz - правильная детская обувь',
  description: 'Правильная детская обувь',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
