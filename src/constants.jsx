import { BsPiggyBank } from "react-icons/bs";
import AddAccount from "./ui_components/AddAccount";
import ModalPractice from "./ui_components/ModalPractice";

// export const ITEMS = [
//     {
//         title: 'Total Budget',
//         amount: '$15,100',
//         icon: <BsPiggyBank size={25} />
//     },
//     {
//         title: 'Total spent',
//         amount: '$4,600',
//         icon: <BsPiggyBank size={25} />
//     },
//     {
//         title: 'Number of Budget',
//         amount: '5',
//         icon: <BsPiggyBank size={25} />
//     },

// ];

export const ITEMS = [
    {
        title: 'Step 1',
        content: <ModalPractice />,
        text: "Create a single or multi category budget"
    },
    {
        title: 'Step 2',
        content: <AddAccount />,
        text: "Create a single or multi category budget"
    },
    // {
    //     title: 'Step 4',
    //     content: <AddAccount />,
    //     text: "Create a single or multi category budget"
    // },



];

export const LATEST_BUDGET = [
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
    {
        icon: <BsPiggyBank size={25} />,
        title: "Shopping",
        itemAmount: 1,
        budgetAmount: 2300
    },
]