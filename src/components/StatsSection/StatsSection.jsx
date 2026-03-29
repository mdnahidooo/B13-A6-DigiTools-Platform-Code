import React from "react";

const StatsSection = () => {
    return (
        <section className="w-full min-h-50 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">

            <div className="w-full max-w-5xl px-6 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between text-center">

                    
                    <div className="flex-1 space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">50K+</h1>
                        <p className="text-sm opacity-80">Active Users</p>
                    </div>

                    
                    <div className="w-full h-px bg-white/30 my-4 md:my-0 md:w-px md:h-16"></div>

                    
                    <div className="flex-1 space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">200+</h1>
                        <p className="text-sm opacity-80">Premium Tools</p>
                    </div>

                    
                    <div className="w-full h-px bg-white/30 my-4 md:my-0 md:w-px md:h-16"></div>

                    
                    <div className="flex-1 space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">4.9</h1>
                        <p className="text-sm opacity-80">Rating</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StatsSection;