import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";



const InfoPopOver = () => {
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <IoIosInformationCircleOutline
                        className=" rounded-full bg-blue-500 text-white cursor-pointer shadow-md hover:bg-blue-600 transition duration-300"
                        size={28}
                    />
                </PopoverTrigger>
                <PopoverContent className="ml-8">Lorem ipsum dolor sit ame
                    t consectetur adipisicing elit
                    . Qui quisquam eaque quaerat, in quia et labore ad ipsum quos eum earum, similique delectus velit atque eos deserunt odio accusamus! Ea.</PopoverContent>
            </Popover>

        </div>
    )
}

export default InfoPopOver