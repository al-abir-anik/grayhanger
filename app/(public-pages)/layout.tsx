import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";

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
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ClerkProvider>
    </>
  );
}
