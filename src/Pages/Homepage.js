import React from 'react';
import Homelanguafes from '../Components/Homecompo/Homelanguafes';
import Homemyself from '../Components/Homecompo/Homemyself';



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
                    <h1 className='text-left mt-3 font-serif'>i'm an independent creative<span className='font-bold '> MERN Stak Web Developer</span> from <span className='font-bold'>Bangladesh, Asia</span> </h1>
                    <div className='text-center mt-3 font-serif p-2 rounded-md font-bold bg-secondary w-[120px] '> <button> My Resume</button> </div>
                </div>
            </div>
            {/* home myself introduce my self  */}
            <div className='mt-[150px]'>
                <Homemyself></Homemyself>
            </div>
            {/* languages */}
            <div className='mt-[100px]'>
                <Homelanguafes></Homelanguafes>
            </div>
            
        </div>
    );
};

export default Homepage;


