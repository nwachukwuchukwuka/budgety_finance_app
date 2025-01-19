import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="flex justify-between p-6 shadow-md">
            <h1 className='text-[25px] text-blue-600'>EKash</h1>
            <div>
                <Link to='/dashboard'>
                    <Button className="bg-white text-black mr-2">Dashboard</Button>
                </Link>
                <Button className="bg-blue-600">Get started</Button>
            </div>
        </div>
    )
}

export default NavBar