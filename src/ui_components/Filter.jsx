import { FaFilter } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Filter = () => {
    return (
        <Select>
            <SelectTrigger className="w-[200px] flex items-center space-x-2">
                <div className="flex items-center">
                    <FaFilter className="text-gray-800 mr-2" />
                    <SelectValue placeholder="Filter" />
                </div>

            </SelectTrigger>
            <SelectContent className="">
                <SelectGroup>
                    <SelectItem value="all-time">All Time</SelectItem>
                    <SelectItem value="january-2025">January, 2025</SelectItem>
                    <SelectItem value="december-2024">December, 2024</SelectItem>
                    <SelectItem value="november-2024">November, 2024</SelectItem>
                    <SelectItem value="october-2024">October, 2024</SelectItem>
                    <SelectItem value="september-2024">September, 2024</SelectItem>
                    <SelectItem value="august-2024">August, 2024</SelectItem>
                    <SelectItem value="july-2024">July, 2024</SelectItem>
                    <SelectItem value="june-2024">June, 2024</SelectItem>
                    <SelectItem value="may-2024">May, 2024</SelectItem>
                    <SelectItem value="april-2024">April, 2024</SelectItem>
                    <SelectItem value="march-2024">March, 2024</SelectItem>
                    <SelectItem value="february-2024">February, 2024</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    )

}

export default Filter