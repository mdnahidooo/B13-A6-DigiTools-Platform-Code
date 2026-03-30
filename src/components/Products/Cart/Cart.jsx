import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({ carts, setCarts }) => {
    // console.log(carts);

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([])
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(cart => cart.id !== item.id);
        // console.log(filteredArray);
        setCarts(filteredArray);
    }

    return (
        <div>
            <div className='w-10/12 mx-auto space-y-5'>
                <h2 className='text-l font-bold'>Your Cart</h2>

                <div>
                    <ul className="list bg-base-100 rounded-box shadow-md">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your wanted products</li>

                        {
                            carts.length === 0
                                ?
                                <div className='flex flex-col justify-center items-center py-30 space-y-5'>
                                <div className='text-gray-400 text-5xl'>
                                    <CiShoppingCart />
                                </div>
                                <h2 className='text-gray-400 font-bold text-2xl'>Your cart is empty</h2>
                                </div>
                                : <div>
                                {
                                    carts.map(item => (
                                        <li className="list-row" key={item.id}>
                                            <div><img className="size-10 rounded-box" src={item.icon} /></div>
                                            <div>
                                                <div>{item.name}</div>
                                                <div className="text-xs uppercase font-semibold opacity-60">${item.price}</div>
                                            </div>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-outline btn-error rounded-full">
                                                Delete
                                            </button>
                                        </li>

                                    ))
                                }

                            </div>
                        }
                    </ul>
                </div>

                <div className='flex justify-between items-center mx-5 text-l text-gray-400 font-bold'>
                    <h2>Total</h2>
                    <h2>${totalPrice.toFixed(2)}</h2>
                </div>

                <div className='px-3'>
                    <button onClick={handlePayment} className='btn btn-block text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;