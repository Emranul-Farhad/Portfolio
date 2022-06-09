import React from 'react';
import intro from '../../Images/intro.jpg'


const Homemyself = () => {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row items-center '>

                <div className='basis-2/4'>
                    <img src={intro} alt="" />
                </div>
              
                <div className='basis-2/4'>
                    <h1 className='text-left text-3xl font-bold mb-5'>Who <span className='font-extrabold text-primary'> Am I</span></h1>
                    <h1 className=' text-accent font-[400] text-[17px] tracking-widest uppercase font-serif text-left'>I am a MERN Stack Web Developer a quick leraner person. I enjoy working closely with design/devlop teams to faithfully translate their designs right down to the last pixel.Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB. Being a diligent, hardworking and result oriented Guy, I always work towards achieving best result on each project I lay my hands on. </h1>
                </div>
            </div>
        </div>
    );
};

export default Homemyself;