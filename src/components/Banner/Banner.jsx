import React from 'react';
import BannerImg from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>

            <div className="hero md:bg-base-200 min-h-screen md:mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={BannerImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='py-10 text-center md:text-start md:space-y-2'>

                        <div className="badge badge-soft badge-primary"><FaRegDotCircle /> New: AI-Powered Tools Available</div>

                        <h1 className="text-2xl md:text-5xl font-bold ">Supercharge Your <br />
                            Digital Workflow</h1>
                        <p className="py-6 text-gray-400">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                            .
                        </p>
                        <div>
                            <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-sm md:btn-md">Explore Products</a>
                            <a className="btn btn-outline border-[#9514FA] rounded-full mr-1 btn-sm md:btn-md"><CiPlay1 /> Watch Demo</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;