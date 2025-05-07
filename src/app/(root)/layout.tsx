import Header from "../../components/landing/header";
import { Metadata } from "next";
import Footer from "../../components/layout/footer";

export const metadata: Metadata = {
  title: {
    template: "UiZen – Open Source Components",
    default: "UIZen UI"
  }
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <div className="flex justify-center w-full">
    <Header />
  </div>
      <main className="relative w-full pt-0 md:pt-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
