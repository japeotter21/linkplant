"use client";
import React, { useState, useEffect } from 'react'
import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import { BsArrowRightCircle, BsArrowUpLeftCircle, BsArrowUpRightCircle, BsChevronDown, BsPencil, BsPlus, BsPlusCircle, BsTrash } from 'react-icons/bs'
import Link from 'next/link';
export default function Config() {

    const [sites, setSites] = useState([])

    type ProfileObject = {
        site: string,
        profile: string,
        description: string,
        // icon: Element
    }



    const Icons: {site: string,profile: string,description: string, icon: any}[] = [
        {
            site: 'youtube.com/channel/',
            profile: 'UCKzFivbVW4htLbnCP234VsQ',
            description: '@tatsuyoshiguitar',
            icon: <SiYoutube style={{color:"#FF0000"}} size={50}/>
        },
        {
            site: 'tiktok.com/',
            profile: '@tatsuyoshiguitar',
            description: '@tatsuyoshiguitar',
            icon: <SiTiktok style={{color:"#FF0050"}} size={42}/>
        },
        {
            site: 'patreon.com/',
            profile: 'tatsuyoshi',
            description: '@tatsuyoshi',
            icon: <SiPatreon style={{color:"#052d49"}} size={40}/>
        }
    ]

    const SiteCards = () => {
        return (
            <>
                <div className="lg:w-1/2 gap-5 border border-zinc-600 rounded-lg bg-zinc-300 divide-y divide-gray-500 px-2">
                    { Icons.map((item,id)=> (
                        <div>
                            <div className="flex justify-between p-5 items-center">
                                {item.icon}
                            <div className='flex gap-2'>
                                    <button type="submit" className='border border-zinc-600 rounded-xl bg-blue-300 bg-opacity-60 px-3 py-2 mt-3 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
                                        <BsPencil style={{color:'#242424'}} />
                                    </button>
                                    <button type="submit" className='border border-zinc-600 rounded-xl bg-[#ff2400] bg-opacity-60 px-3 py-2 mt-3 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
                                        <BsTrash />
                                    </button>
                            </div>
                            </div>
                            <div className='mx-5'>
                                <p className='font-semibold'>Details</p>
                                <hr className='border-gray-400 my-2'/>
                                <div className='flex flex-col gap-3 my-4'>
                                    <div className='flex justify-between'>
                                        <p className='font-medium'>Link</p>
                                        <div className='flex'>
                                            <p className='hidden lg:block border border-zinc-500 bg-gray-400 p-2 rounded-md text-neutral-600 border-r-0 rounded-r-sm'>{item.site}</p>
                                            <input type='text' id="link" name="link" required className='border border-zinc-600 bg-inherit p-2 rounded-md rounded-l-sm' value={item.profile} />
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='font-medium'>Description</p>
                                        <input type='text' id="description" name="description" required className='border border-zinc-600 bg-inherit p-2 rounded-md' value={item.description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </>
        )
    }

    const SiteForm = () => {
        return (
            <>
                <div className="lg:w-1/2 2 flex flex-col text-center items-center gap-5 border border-zinc-600 rounded-lg bg-zinc-300">
                    <div
                    className="w-full px-5 py-5 transition-colors"
                    >
                        <form className='flex flex-col w-max place-items-start mx-auto gap-2'>
                            <label htmlFor="site">Select Site:</label>
                            <select id="site" name="site" required className='border border-zinc-600 bg-inherit w-full rounded-md px-2'>
                                <option value="youtube">Youtube</option>
                                <option value='tiktok'>Tik Tok</option>
                                <option value='instagram'>Instagram</option>
                                <option value='patreon'>Patreon</option>
                                <option value='twitch'>Twitch</option>
                                <option value='twitter'>Twitter</option>
                            </select>
                            <label htmlFor="site">Paste Link:</label>
                            <input type='text' id="link" name="link" required className='border border-zinc-600 bg-inherit px-2 rounded-md' />
                            <label htmlFor="site">Add a Description:</label>
                            <input type='text' id="description" name="description" required className='border border-zinc-600 bg-inherit px-2 rounded-md' />
                            <button type="submit" className='border border-zinc-600 rounded-lg bg-[#f5b504] bg-opacity-80 px-5 py-1 mt-3 flex items-center mx-auto shadow-[3px_3px_#3d3d3d]'>
                                Add to Profile
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    return (
        <main className="min-h-screen py-12">
        <div className="items-center text-sm mb-5 w-3/4 flex flex-col gap-3 mx-auto">
            <h2 className={`text-3xl font-semibold text-center`}>
                Edit Profile
            </h2>
            <Link href="/" >
                <button className='border border-zinc-600 rounded-full bg-gray-300 bg-opacity-80 px-4 py-2 flex items-center'>
                    <BsArrowUpLeftCircle />&nbsp; View Profile
                </button>
            </Link>
        </div>
        <div className='md:w-3/4 flex flex-col gap-4 items-center mx-auto'>
            <SiteCards />
            { sites.length > 0 ? 
                sites.map((item,id)=>
                    <>
                        <SiteForm />
                    </>
                )
            :
                <SiteForm />
            }
        </div>
        
        </main>
    )
}
