import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <div className='flex items-center justify-between px-12 py-6 fixed top-0 w-full z-50'>
                <Link className='text-[#757579] font-semibold text-[.9vmax] ' href="/other-page">
                    ABOUT ME
                </Link>
                <Link className='text-[#757579] font-semibold text-[.9vmax]' href="/other-page">
                    PROJECTS
                </Link>
                <Link className='text-[#757579] font-semibold text-[.9vmax]' href="/other-page">
                    ACHIEVEMENT
                </Link>
                <Link className='text-[#757579] font-semibold text-[.9vmax]' href="/other-page">
                    CONTACT ME
                </Link>
                <Link className='text-[#757579] font-semibold text-[.9vmax]' href="/other-page">
                    DOWNLOAD CV
                </Link>

            </div>
        </>
    )
}

export default Nav