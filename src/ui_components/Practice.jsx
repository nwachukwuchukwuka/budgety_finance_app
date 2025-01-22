import { useForm } from "react-hook-form"

const practice = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data);

  }

  return (
    <div>
      <form className='gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Email'
          {...register("email", {
            required: "email is required"
          })}
        />
        {errors.email && <div className="text-sm text-red-700">{errors.email.message}</div>}
        <input type='password' placeholder='password'
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 chararcters"
            }
          })}
        />
        {errors.password && (<div className="text-sm text-red-700">{errors.password.message}</div>)}

        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? "loading..." : 'submit'}
        </button>
      </form>
    </div>
  )
}

export default practice



// initialize hook form
//  connect your input to react hook form using register



















// slide bar functonality

// import React, { useState } from 'react'
// import { FaHome } from 'react-icons/fa'
// // import { FaHome } from "react-icons/fa";

// const practice = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className='flex'>


//       {/* sidebar */}
//       <div className={`fixed top-0 left-0 h-full  ${isOpen ? 'w-64' : 'w-20'}  md:w-64 bg-gray-800 transition-wdth duration-300 text-white`}>
//         <div className='flex justify-between items-center p-4'>
//           <h2 className={` md:block ${isOpen ? 'block' : 'hidden'}`}>MyApp </h2>
//           <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? 'x' : <FaHome size={24} />}

//           </button>
//         </div>

//         <nav className='mt-4'>
//           <ul>
//             <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
//               <FaHome size={24} />

//               <span className='ml-4 hidden md:block'>
//                 Home
//               </span>
//             </li>
//             <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
//               <FaHome size={24} />
//               <span className='ml-4 hidden md:block'>
//                 Home
//               </span>
//             </li>
//             <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
//               <FaHome size={24} />
//               <span className='ml-4 hidden md:block'>
//                 Home
//               </span>
//             </li>
//             <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
//               <FaHome size={24} />
//               <span className='ml-4 hidden md:block'>
//                 Home
//               </span>
//             </li>
//           </ul>
//         </nav>

//       </div>





//       {/* main */}



//       <div className='pb-[700px] ml-20 md:ml-64 p-8 bg-gray-100 min-h-screen flex-1 '>
//         <h2 className='text-2xl font-bold'>Dashboard</h2>
//         <p className=''>Dashboard to the right side</p>
//       </div>
//     </div>
//   )
// }

// export default practice