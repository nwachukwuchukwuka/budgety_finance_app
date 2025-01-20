import { LATEST_BUDGET } from "@/constants";
import { LiaShoppingBagSolid } from "react-icons/lia";


const LatestBudgetCard = () => {
    return (
        <div>
            {LATEST_BUDGET.map((budget, index) => (
                <div key={index} className='p-4 border shadow-sm mb-3'>
                    <div className='flex  justify-between items-center'>

                        <div className='flex justify-between items-center'>
                            <div className='p-4  rounded-full bg-blue-100 mr-4'>
                                <LiaShoppingBagSolid size={24} />
                            </div>
                            <div className=''>
                                <h2 className='font-bold'>{budget.title}</h2>
                                <p className='text-sm'>{budget.itemAmount} item </p>
                            </div>
                        </div>
                        <p>${budget.budgetAmount}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default LatestBudgetCard