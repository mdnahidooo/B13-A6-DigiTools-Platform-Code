import React from 'react';
import UserImg from '../../assets/user.png'
import PackageImg from '../../assets/package.png'
import RocketImg from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className="bg-base-200 shadow-sm py-20 flex flex-col">
            <div className='mx-auto space-y-2 my-10'>
                <h2 className='text-3xl text-center md:text-5xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-gray-400 text-center'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-sm">
                    <div className='flex justify-between items-end p-4'>
                        <div></div>
                        <div className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full flex items-center justify-center">01</div>
                    </div>

                    <div className="flex justify-center pt-6">
                        <figure className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <img
                                src={UserImg}
                                alt="User Icon"
                                className="rounded-xl w-10" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-l font-bold">Choose Products</h2>
                        <p className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                </div>


                <div className="card bg-base-100 shadow-sm">
                    <div className='flex justify-between items-end p-4'>
                        <div></div>
                        <div className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full flex items-center justify-center">02</div>
                    </div>

                    <div className="flex justify-center pt-6">
                        <figure className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <img
                                src={PackageImg}
                                alt="User Icon"
                                className="rounded-xl w-10" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-l font-bold">Start Creating</h2>
                        <p className='text-gray-400'>Download and start using your premium tools immediately.</p>

                    </div>
                </div>


                <div className="card bg-base-100 shadow-sm">
                    <div className='flex justify-between items-end p-4'>
                        <div></div>
                        <div className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full flex items-center justify-center">03</div>
                    </div>

                    <div className="flex justify-center pt-6">
                        <figure className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <img
                                src={RocketImg}
                                alt="User Icon"
                                className="rounded-xl w-10" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-l font-bold">Create Account</h2>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default GetStarted;