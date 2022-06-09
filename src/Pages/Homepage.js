import React from 'react';



const Homepage = () => {

    return (
        <div className='lg:mx-20' >
            <div className='flex flex-col lg:flex-row items-center'>
                
            <div className='basis-2/4'>  
                <img  alt="Coder GIF" src="https://miro.medium.com/max/1360/0*7Q3yvSIv_t0ioJ-Z.gif" />
                </div>
                <div className='basis-2/4'>
                    <h1 className='text-6xl font-[600]  text-left'> Hi, My
                     <br /> Name is <span className='font-bold text-primary'>Emranul 👋  </span> 
                     </h1>
                    
                </div>


            </div>
        </div>
    );
};

export default Homepage;


