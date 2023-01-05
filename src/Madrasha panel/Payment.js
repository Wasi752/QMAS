import React from 'react'

function Payment() {
    return (
        <div className='flex w-screen h-screen'>
            <div className='w-2/12 h-full bg-gray-800'>
                <button
                    type='button'
                    className='m-3 px-[22%] py-3 border-2 font-bold text-lg rounded-lg border-teal-500 hover:text-white hover:bg-teal-500 mt-44 text-teal-500'
                >Admision Fee
                </button>
            </div>
            <div className='w-8/12 h-full bg-gray-900'>
                <div className='w-4/12 h-2/6 ml-[45%] mt-[20%] bg-gray-700 rounded-2xl'>
                    <div className='flex flex-col w-full h-full'>
                        <p className='text-sky-400 mt-[7%] text-2xl'>Admision Fee : <span className='text-violet-400'>1000 ৳</span></p>
                        <p className='text-sky-400 mt-[2%] text-2xl'>Miscellaneous Fee : <span className='text-violet-400'>1000 ৳</span></p>
                        <p className='text-sky-400 mt-[2%] text-2xl'>Hostel Fee : <span className='text-violet-400'>3000 ৳</span></p>
                        <p className='text-orange-300 mt-[2%] text-2xl'>Total : <span className='text-rose-300'>5000 ৳</span></p>
                        <button
                            type='button'
                            className='text-fuchsia-400 font-bold border-2 border-blue-500 rounded-3xl m-2 px-2 py-2 w-[35%] h-[12%] mt-11 ml-[33%] hover:bg-blue-500 hover:text-white'
                        >Click here to pay
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-2/12 h-full bg-gray-900'></div>
        </div>
    );
}
export default Payment;








