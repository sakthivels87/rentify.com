import NavBar from "../components/NavBar";
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cyan-400">
        <div className="max-w-screen overflow-x-hidden w-full 2xl:max-w-7xl mx-auto">
          <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-white border-b border-black/10 dark:border-white/10">
            <NavBar />
          </header>
          <main className="py-4 pt-18 flex flex-col flex-grow">{children}</main>
          <footer className="bg-gray-800 text-white border-t-blue-600 mt-10">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
