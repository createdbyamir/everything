import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
