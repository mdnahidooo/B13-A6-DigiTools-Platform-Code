import React from 'react';

const SubscriptionPricing = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className='mx-auto space-y-2 my-10'>
                    <h2 className='text-3xl text-center md:text-5xl font-bold'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-400 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>


                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body flex flex-col justify-between">

                            <div>
                                <h2 className="text-xl font-bold">Starter</h2>
                                <p className='text-gray-400'>Perfect for getting started</p>
                            </div>

                            <div className="flex justify-between">
                                <h2><span className="text-4xl font-bold">$0</span><span className='text-gray-400'>/Month</span></h2>

                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    <div className="card text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm relative">
                        <div className="card-body flex flex-col justify-between">
                            <span className="badge rounded-full badge-warning absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg shadow-yellow-500/50 animate-bounce">Most Popular</span>
                            <div>
                                <h2 className="text-xl font-bold">Pro</h2>
                                <p className='text-gray-400'>Best for professionals</p>
                            </div>

                            <div className="flex justify-between">
                                <h2><span className="text-4xl font-bold">$29</span><span>/Month</span></h2>

                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn  btn-block rounded-full">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body flex flex-col justify-between">

                            <div>
                                <h2 className="text-xl font-bold">Enterprise</h2>
                                <p className='text-gray-400'>For teams and businesses</p>
                            </div>

                            <div className="flex justify-between">
                                <h2><span className="text-4xl font-bold">$99</span><span className='text-gray-400'>/Month</span></h2>

                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-block rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPricing;