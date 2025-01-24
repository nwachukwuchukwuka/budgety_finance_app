import { FaFilter } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const BudgetFilter = () => {
    return (
        <Select>
            {/* Trigger Button */}
            <SelectTrigger className=" w-[260px] md:w-[300px] flex items-center space-x-2 bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 hover:border-gray-400 transition-all duration-200">
                <div className="flex items-center">
                    <FaFilter className="text-gray-800 mr-2" />
                    <SelectValue placeholder="Active" />
                </div>
            </SelectTrigger>

            {/* Dropdown Content */}
            <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg">
                <SelectGroup>
                    <SelectItem
                        value="all"
                        className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                        All
                    </SelectItem>
                    <SelectItem
                        value="active"
                        className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                        Active
                    </SelectItem>
                    <SelectItem
                        value="inactive"
                        className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                        Inactive
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default BudgetFilter;
