import { LiaShoppingBagSolid } from "react-icons/lia";


const LatestBudgetCard = () => {
    return (
        <div className='p-4 border shadow-sm'>
            <div className='flex justify-between items-center'>

                <div className='flex justify-between items-center'>
                    <div className='p-4  rounded-full bg-blue-100 mr-4'>
                        <LiaShoppingBagSolid size={24} />
                    </div>
                    <div className=''>
                        <h2 className='font-bold'>Shopping</h2>
                        <p className='text-sm'>1 item</p>
                    </div>
                </div>
                <p>$2300</p>
            </div>
        </div>
    )
}

export default LatestBudgetCard