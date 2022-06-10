import React from 'react';

// my skillests languages

const Homelanguafes = () => {
    return (
        <div className='lg:mx-[50px] container' >
            <div className='mt-20'>
                <div className='text-left mx-[95px] flex'>
                    <h1 className='mb-20 text-3xl font-bold '> My <span className='text-[#07D3D3] font-extrabold'>Skillsets </span></h1>
                    <div className='mt-4 mx-4 bg-black h-[1px] w-[300px] '> </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[30px] mx-[100px] gap-x-10 lg:gap-x-0 '>
                    <div className=''>
                        <img className='w-[90px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/html.454a400c.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[90px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/css.92931bf3.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[120px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/bootstrap.7b4c3807.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/reactstrap.42ac80a3.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[120px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/tailwind.e0c2e25d.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[90px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/js.9f0a24d5.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/react.b7bf6c65.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px]  shadow-2xl rounded-xl' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/nodejs.abecfc00.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/expressjs.b62fd807.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/mongodb.28ec40a4.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/firebase.c24b6b9c.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div>
                        <img className='w-[100px] shadow-2xl rounded-xl' src="https://img.freepik.com/free-vector/modern-badge-discord-icon_578229-169.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <img className='w-[120px] shadow-2xl rounded-xl' src="https://prionto-71.web.app/static/media/slack.505f3eed.png" alt="" />
                    </div>


                    <div>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default Homelanguafes;