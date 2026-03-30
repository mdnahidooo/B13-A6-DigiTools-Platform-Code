import React, { useState } from 'react';
import DemoImg from '../../../assets/Play.png'
import Features from './Features/Features';

const Product = ({ data }) => {
    // console.log(data);
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribed = () => {
        setIsSubscribed(true);
    }

    const badgeColor =
        data.tagType === "popular"
            ? "bg-red-100 text-red-600"
            : data.tagType === "best seller"
                ? "bg-yellow-100 text-yellow-600"
                : data.tagType === "new"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600";

    return (
        <div>
            <div className='w-10/12 mx-auto'>


                <div className="card bg-base-200 shadow-sm">
                    <div className='flex justify-between items-end p-4'>
                        <div></div>
                        <div className={`badge  rounded-full ${badgeColor}`}>{data.tagType}</div>
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

                        </ul>
                        <div className="mt-6">
                            <button onClick={handleSubscribed} className={`btn  btn-block rounded-full text-white ${isSubscribed ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>{isSubscribed ? "Add to Cart" : "Buy Now"}</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Product;