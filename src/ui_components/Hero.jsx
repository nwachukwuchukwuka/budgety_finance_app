import React from 'react'
import dashboard from '../assets/dashboard.png'

const Hero = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:py-[120px] lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Manage Your Expense
                            <strong className="font-extrabold text-blue-600 sm:block"> Control Your Money </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            Start creating your budget and save tons of money
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                      
                        </div>
                    </div>
                </div>

                <div>
                    <img className='max-w-[70%] mx-auto -mt-[60px]' src={dashboard} alt="" />
                </div>
            </section>
          
        </div>
    )
}

export default Hero