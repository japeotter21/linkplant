"use client";
import React, { useState, useEffect } from 'react'
import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import { BsChevronDown } from 'react-icons/bs'
export default function Config() {

    const [sites, setSites] = useState([])

    const SiteForm = () => {

        return (
            <>
                <div className="sm:w-max lg:w-1/2 flex flex-col text-center items-center gap-5 border border-zinc-800 rounded-xl bg-gray-300 bg-opacity-40">
                    <div
                    className="w-full px-5 py-5 transition-colors"
                    >
                        <form className='flex flex-col w-max place-items-start mx-auto gap-2'>
                            <label htmlFor="site">Select Site:</label>
                            <select id="site" name="site" required className='border border-zinc-800 bg-inherit w-full'>
                                <option value="youtube">Youtube</option>
                                <option value='tiktok'>Tik Tok</option>
                                <option value='instagram'>Instagram</option>
                                <option value='patreon'>Patreon</option>
                                <option value='twitter'>Twitter</option>
                            </select>
                            <label htmlFor="site">Paste Link:</label>
                            <input type='text' id="link" name="link" required className='border border-zinc-800 bg-inherit' />
                            <label htmlFor="site">Add a Description:</label>
                            <input type='text' id="description" name="description" required className='border border-zinc-800 bg-inherit' />
                        </form>
                    </div>
                </div>
                <button className='border border-zinc-800 rounded-xl bg-gray-300 bg-opacity-80 px-5'>Add Link</button>
            </>
        )
    }

    return (
        <main className="flex min-h-screen flex-col items-center pt-12 gap-4">
        <div className="items-center text-sm mb-5">
            <h2 className={`text-xl font-semibold text-center px-10`}>
                Add Links to Profile
            </h2>
        </div>
        { sites.length > 0 ? 
            sites.map((item,id)=>
                <>
                    <SiteForm />
                </>
            )
        :
            <SiteForm />
        }
        </main>
    )
}
