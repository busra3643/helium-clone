"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import ProductsTable from "./components/ProductsTable";
import ProductResearch from "./components/ProductResearch";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <main className="min-h-screen bg-[#0B1120] text-white flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <section className="flex-1 p-10">

  {activePage === "dashboard" && (
    <>
      <Header />
      <StatsCards />
      <ProductsTable />
    </>
  )}

  {activePage === "research" && (
    <ProductResearch />
  )}

</section>
          
   </main>
  );
}