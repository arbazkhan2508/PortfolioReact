import React from 'react'

const Home = () => {
    return (
        <>
            <div className='bg-[#f3f4fa] relative w-full h-screen'>
                <div className='absolute bottom-0'>
                    <img src="https://brdnicolas.com/assets/shapes/wave3.svg" alt="" />
                </div>
                <div className='flex items-center justify-center px-8 h-full'>
                    <div className='flex flex-col items-start gap-4'>
                        <h6 className='text-[#47474e] text-[3vmax] font-Jost '>Hi ! I am</h6>
                        <h3 className='text-start font-Jost tracking-widest  font-semibold text-[#0f0f16] text-[6vmax] leading-none'>Arbaz <br /> Khan </h3>
                        <small className='text-[#14141b] font-Jost font-semibold tracking-wider text-[2.2vmax]'>FULLSTACK DEVELOPER</small>
                        <p className='text-[#929292] font-[Jost] text-[2.2vmax] leading-6'>My mission is to help you build your projects with my versatility and my ability to adapt to different situations. Together, let's turn your ideas into great projects!</p>
                        <div className='flex flex-col items-start justify-center gap-6 w-full py-6'>
                            <div className='flex  items-center justify-center w-full  py-3 rounded-full border border-[#0f0f16]'>
                                <h6 className='text-[#0f0f16] font-Jost tracking-wider '>Download CV</h6>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" style="font-size: 18px;"><path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14ZM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg> */}
                            </div>
                            <div className='flex bg-[#0f0f16] items-center track justify-center w-full  py-3 rounded-full'>
                                <h6 className='text-white tracking-wider font-Jost'>Check my projects</h6>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" style="font-size: 18px;"><path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14ZM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home