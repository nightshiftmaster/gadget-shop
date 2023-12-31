import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
// import FormInput from "../components/Search";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Loader from "@/components/Spinner";
import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/ThemeContext";
import SuspenseProvider from "@/providers/SuspenseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GatgetHub Shop",
  description: "Best Tech Devices & Accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>
            <ThemeProvider>
              <Link href="/cart">
                <ToastContainer
                  position="top-center"
                  theme="dark"
                  autoClose={3000}
                />
              </Link>
              <NavBar />
              {/* <FormInput /> */}
              <div className="min-h-screen h-full">{children}</div>
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
