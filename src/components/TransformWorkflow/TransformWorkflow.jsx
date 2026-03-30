import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-30 py-30 flex flex-col justify-center items-center text-white space-y-10'>
            <div className='space-y-4'>
                <h2 className='text-3xl text-center md:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='text-gray-400 text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='space-y-4 text-center'>

                <div className=' flex justify-center items-center gap-2'>
                    <a className="btn rounded-full btn-sm md:btn-md text-[#9514FA] hover:bg-transparent hover:text-white">Explore Products</a>
                    <a className="btn btn-outline rounded-full mr-1 btn-sm md:btn-md">View Pricing</a>
                </div>
                <p className='text-gray-400 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default TransformWorkflow;