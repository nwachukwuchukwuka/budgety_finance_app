import React from 'react'
import LatestBudgetCard from './LatestBudgetCard'

const LatestBudget = () => {
    return (
        <div className='ml-3'>
            <h1 className='text-[20px] font-bold'>Latest Budgets</h1>
            <LatestBudgetCard />
        </div>
    )
}

export default LatestBudget