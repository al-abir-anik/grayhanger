import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="mt-5 flex-1">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#000",
                color: "#fff",
              },
            }}
          />
        </div>
      </ClerkProvider>
    </>
  );
}
