import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto space-y-5'>
                <h2 className='text-l font-bold'>Your Cart</h2>

                <div>
                    <ul className="list bg-base-100 rounded-box shadow-md">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                            <div>
                                <div>Dio Lupa</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <button className="btn btn-ghost btn-outline btn-error rounded-full">
                                Delete
                            </button>
                        </li>

                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                            <div>
                                <div>Ellie Beilish</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                            </div>
                            <button className="btn btn-ghost btn-outline btn-error rounded-full">
                                Delete
                            </button>
                        </li>

                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                            <div>
                                <div>Sabrino Gardener</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                            </div>

                            <button className="btn btn-ghost btn-outline btn-error rounded-full">
                                Delete
                            </button>
                        </li>

                    </ul>
                </div>

                <div className='flex justify-between items-center mx-5 text-l text-gray-400 font-bold'>
                    <h2>Total</h2>
                    <h2>$0</h2>
                </div>

                <div className='px-3'>
                    <button className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;