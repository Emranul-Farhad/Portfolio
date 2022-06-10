import React from 'react';
import one from '../../Images/one.png'
import './Projects.css'


// my projects list show case

const Homeprojects = () => {

    return (
        <div className='container'>
            <div className=' flex justify-end'>
                <div className='mt-4 mx-4 bg-black h-[1px] w-[300px] '> </div>
                <h1 className='mb-5  text-3xl font-bold'> Some Things That
                    <span className='text-[#07D3D3]' > I’ve Built</span> </h1>
            </div>

            <div className='projects'>
                <div className='shadow-2xl bg-red-300  mr-[-5px] projectdetials'>
                   <div className='detilasperagraph'>
                   <h6 className='p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum distinctio inventore doloremque sit similique? Expedita autem neque natus impedit <br /> <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab error iusto vero. Nesciunt, tenetur? Exercitationem architecto culpa quis facere consequuntur!.</h6>
                   </div>
                </div>
                <div className='show shadow-xl rounded-md lg:w-[110%]'>
                    <img className='showimg 
                    lg:w-[800px]' src={one} alt="" />
                </div>

            </div>

            <h1 className='mt-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil eius labore esse doloribus saepe, ea non! Eos nemo beatae ipsam neque dolorem nulla nam corrupti doloremque nesciunt numquam dignissimos suscipit, possimus aut quis sint quas veritatis accusantium. Impedit suscipit vero, quos dolore a mollitia fuga, molestias similique eum necessitatibus tempora commodi esse modi eveniet, rerum excepturi repellendus? Molestias quaerat et repellendus rerum, nostrum distinctio aliquid ex obcaecati possimus perspiciatis, consequuntur architecto omnis? Provident, ab cumque nihil, ad impedit exercitationem sequi facilis, consectetur earum dicta tempora expedita maxime possimus iusto? Tempora consequuntur, maiores natus odio consequatur consectetur nulla et quas?</h1>
        </div>
    );
};

export default Homeprojects;