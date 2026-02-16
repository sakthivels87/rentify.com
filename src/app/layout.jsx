import NavBar from "../components/NavBar";
import "./globals.css";
import Footer from "../components/Footer";
import Providers from "../components/Providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cyan-400 min-h-screen">
        <Providers>
          <div className="flex flex-col min-h-screen max-w-screen overflow-x-hidden w-full 2xl:max-w-7xl mx-auto">
            <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-white border-b border-black/10 dark:border-white/10">
              <NavBar />
            </header>

            {/* Add padding-top equal to header height */}
            <main className="flex-grow pt-20 py-4 flex flex-col">
              {children}
            </main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
