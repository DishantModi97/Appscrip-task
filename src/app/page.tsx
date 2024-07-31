import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import NavBar from "@/components/NavBar";
import ContentSection from "@/components/ContentSection";
import ProductFilterBar from "@/components/ProductFilterBar";
import ProductListWithFilter from "@/components/SideBarFilter/ProductListWithFilter";
import SideBarFilterProvider from "@/context/SideBarFilterProvider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SideBarFilterProvider>
      <NextUIProvider>
        <Header />
        <NavBar />
        <ContentSection />
        <ProductFilterBar />
        <ProductListWithFilter />
        <Footer />
      </NextUIProvider>
    </SideBarFilterProvider>
  );
}
