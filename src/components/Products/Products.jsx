import React, { use } from 'react';
import Product from './Product/Product';

const Products = ({ dataPromise }) => {
    const dataArray = use(dataPromise)
    // console.log(dataArray);
    return (
        <div className='w-10/12 mx-auto'>
            <div className='mt-30 mb-5 space-y-4'>
                <h2 className='text-3xl text-center md:text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-400 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box flex justify-center bg-white mb-10">
                <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Products" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Cart (2)" />

            </div>

            <div className='grid md:grid-cols-3 gap-6'>
                {
                    dataArray.map(data => (
                        <div>
                            <Product key={data.id} data={data}></Product>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Products;