
import ModalPractice from "./ModalPractice";
import AddAccount from "./AddAccount";
import AddTransaction from "./AddTransaction";
import DashboardStatistics from "./DashboardStatistics";
import Trial from "./Trial";


const DashboardCard = () => {





  return (
    <div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hidden w-[320px] md:w-full ">
        <div className="w-full">
          <ModalPractice />
        </div>
        <div className="w-full">
          <AddAccount />
        </div>
        <div className="w-full">
          <AddTransaction />
        </div>
        <div className="w-full">
          <DashboardStatistics />
        </div>
        <div className="w-full">
          <Trial />
        </div>




      </div>
    </div>
  );
};

export default DashboardCard;

