import React, { use, useState } from 'react';
import Product from './Product/Product';
import Cart from './Cart/Cart';


const Products = ({ dataPromise, carts, setCarts }) => {
    const dataArray = use(dataPromise)
    // console.log(dataArray);

    const [activeTab, setActiveTab] = useState("products");
    // console.log(activeTab);


    return (
        <div className='w-10/12 mx-auto'>
            <div className='mt-30 mb-5 space-y-4'>
                <h2 className='text-3xl text-center md:text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-400 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>


            <div className="tabs tabs-box flex justify-center bg-white mb-10 p-1 rounded-full">

                <button
                    onClick={() => setActiveTab('products')}
                    className={`px-6 py-2 rounded-full font-bold transition ${activeTab === 'products'
                        ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                        : 'text-gray-500'
                        }`}
                >
                    Products
                </button>

                <button
                    onClick={() => setActiveTab('cart')}
                    className={`px-6 py-2 rounded-full font-bold transition ${activeTab === 'cart'
                        ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                        : 'text-gray-500'
                        }`}
                >
                    Cart ({carts.length})
                </button>

            </div>

            {
                activeTab === "products" && <div className='grid md:grid-cols-3 gap-6'>
                    {
                        dataArray.map(data => (
                            <div key={data.id}>
                                <Product data={data} carts={carts} setCarts={setCarts}></Product>
                            </div>
                        ))
                    }
                </div>
            }

            {
                activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>
            }

        </div>
    );
};

export default Products;