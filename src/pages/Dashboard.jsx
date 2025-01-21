import DashboardCard from "@/ui_components/DashboardCard";
import Chart from "@/ui_components/Chart";
import LatestExpenses from "@/ui_components/LatestExpenses";
import LatestBudget from "@/ui_components/LatestBudget";
import Header from "@/ui_components/Header";
import Filter from "@/ui_components/Filter";
import SavingGoals from "@/ui_components/Savings";




export default function Dashboard() {

  return (
    <div className="">

      {/* Main Content */}
      <main className=" p-2 bg-white">
        <Header />

        <Filter />


        <div>
          <DashboardCard />
          <div className="grid grid-row md:grid-cols-[2fr,1fr] gap-2 mt-8">
            <div>
              <Chart />
              <SavingGoals />
              <LatestExpenses />
            </div>
            <LatestBudget />
          </div>
        </div>

      </main>

    </div>
  );
}
