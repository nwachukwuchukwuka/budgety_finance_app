import { useState } from "react";
import Sidebar from "@/ui_components/Sidebar";

import DashboardCard from "@/ui_components/DashboardCard";
import Chart from "@/ui_components/Chart";
import LatestExpenses from "@/ui_components/LatestExpenses";
import LatestBudget from "@/ui_components/LatestBudget";
import Header from "@/ui_components/Header";
import Filter from "@/ui_components/Filter";



export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-">
      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>



      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <Filter />


        {/* Responsive Cards */}
        <div>

          <DashboardCard />
          <div className="grid grid-row md:grid-cols-[2fr,1fr] gap-2 mt-8">
            <div>
              <Chart />
              <LatestExpenses />
            </div>
            <LatestBudget />
          </div>

        </div>

      </main>
    </div>
  );
}
