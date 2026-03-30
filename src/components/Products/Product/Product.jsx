import React from 'react';
import DemoImg from '../../../assets/Play.png'
import Features from './Features/Features';

const Product = ({ data }) => {
    // console.log(data);
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                

                <div className="card bg-base-200 shadow-sm">
                    <div className='flex justify-between items-end p-4'>
                        <div></div>
                        <div className="badge badge-success rounded-full">{data.tagType}</div>
                    </div>

                    <div className='pl-4'>
                        <img src={data.icon} alt="" className='w-6 h-6' />
                    </div>

                    <div className="card-body flex flex-col justify-between">

                        <div>
                            <h2 className="text-xl font-bold">{data.name}</h2>
                            <p className='text-gray-400'>{data.description}</p>
                        </div>

                        <div className="flex justify-between">
                            <h2><span className="text-2xl font-bold">${data.price}</span><span className='text-gray-400'>/{data.period}</span></h2>

                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                            {
                                data.features.map((feature, index) => (
                                    <Features key={index} feature={feature}></Features>
                                ))
                            }
                            {/* <li>
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
                            </li> */}

                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Product;