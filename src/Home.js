import React from 'react';

function Home() {
  return (
    <div className='h-screen w-full flex bg-gray-200 text-center text-2xl text-white font-bold'>
      <div className='w-[10%]'></div>
      <div className='w-[40%] h-[30%] bg-slate-400'>
        <p>New Student</p>
        <button></button>
        <br></br>
        <p>Old Student</p>
        <br></br>
        <br></br>

      </div>


      <div className='w-[40%] h-[30%] bg-green-500 text-center text-2xl text-white font-bold'>
        <br></br>
        <p>Madrasha Panel</p>
        <br></br>

        <button className='text-center text-2xl text-white font-bold h-[10%] w-[50%] p-4 border border-blue-300 rounded-md  hover:text-blue-300'>Click Here</button>
        <br></br>
        <br></br>

      </div>
      <div className='w-[10%]'></div>

    </div>
  )
}

export default Home;