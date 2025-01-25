
import ModalPractice from "./ModalPractice";
import AddAccount from "./AddAccount";
import AddTransaction from "./AddTransaction";


const DashboardCard = () => {





  return (
    <div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hidden w-[320px] md:w-full ">
        <div className="w-[300px]">
          <ModalPractice />
        </div>



        <AddAccount />
        <AddTransaction />

      </div>
    </div>
  );
};

export default DashboardCard;

