"use client";
import React, { useState, useEffect } from 'react'
import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import { BsArrowRightCircle, BsArrowUpLeftCircle, BsArrowUpRightCircle, BsChevronDown, BsPencil, BsPlus, BsPlusCircle, BsSave, BsTrash, BsX } from 'react-icons/bs'
import Link from 'next/link';
export default function Config() {

    const [sites, setSites] = useState([])


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
            icon: <SiPatreon style={{color:"#ff424d"}} size={40}/>
        }
    ]

    const SiteCards = () => {
        return (
            <>
                { Icons.map((item,id)=> (
                    <div className='py-4'>
                        <div className="flex justify-between items-start py-3 px-5">
                            {item.icon}
                            <div className='flex gap-2 items-start'>
                                {/* <button type="submit" className='border border-blue-500 bg-blue-50 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#242424]'>
                                    <BsPencil style={{color:'#3b82f6'}} />
                                </button> */}
                                <button type="submit" className='border border-red-500 bg-red-50 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
                                    <BsTrash style={{color:"#ef4444"}} />
                                </button>
                            </div>
                        </div>
                        <div className='mx-5 mt-2'>
                            <p className='font-semibold'>Details</p>
                            <hr className='border-gray-400 my-3'/>
                            <div className='flex flex-col gap-3 my-4'>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <p className='font-medium'>Link</p>
                                    <div className='flex'>
                                        <p className='hidden lg:block border border-gray-400 bg-gray-300 p-2 rounded-md text-neutral-600 rounded-r-sm'>{item.site}</p>
                                        <input type='text' id="link" name="link" required className='border lg:border-l-0 border-gray-300 bg-inherit p-2 rounded-md lg:rounded-l-sm' value={item.profile} />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <p className='font-medium'>Description</p>
                                    <input type='text' id="description" name="description" required className='border border-gray-300 bg-inherit p-2 rounded-md text-truncate' value={item.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </>
        )
    }

    const SiteForm = () => {
        return (
            <>
                    <div className='py-4'>
                        <div className="flex justify-between items-start py-3 px-5">
                            <div>
                                {/* <label htmlFor="site" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Site</label> */}
                                <select id="site" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option selected>Select a Site</option>
                                    <option value="youtube">Youtube</option>
                                    <option value='tiktok'>Tik Tok</option>
                                    <option value='instagram'>Instagram</option>
                                    <option value='patreon'>Patreon</option>
                                    <option value='twitch'>Twitch</option>
                                    <option value='twitter'>Twitter</option>
                                </select>
                            </div>
                            <div className='flex gap-2 items-start'>
                                <button type="submit" className='border border-red-500 bg-red-50 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
                                    <BsTrash style={{color:"#ef4444"}} />
                                </button>
                            </div>
                        </div>
                        <div className='mx-5 mt-2'>
                            <p className='font-semibold'>Details</p>
                            <hr className='border-gray-400 my-3'/>
                            <div className='flex flex-col gap-3 my-4'>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <p className='font-medium'>Link</p>
                                    <div className='flex'>
                                        <input type='text' id="link" name="link" required className='border border-gray-300 bg-inherit p-2 rounded-md' placeholder='Paste link here' />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <p className='font-medium'>Description</p>
                                    <input type='text' id="description" name="description" required className='border border-gray-300 bg-inherit p-2 rounded-md' placeholder='Add a Description' />
                                </div>
                            </div>
                        </div>
                        <button className='border border-zinc-600 rounded-lg bg-[#f5b504] bg-opacity-80 px-5 py-1 mt-5 flex items-center mx-auto shadow-[3px_3px_#3d3d3d]'>
                            Add to Profile
                        </button>
                    </div>
            </>
        )
    }

    return (
        <main className="min-h-screen py-8">
            <div className="mb-7 w-3/4 mx-auto">
                <h2 className={`text-3xl font-semibold text-center`}>
                    Edit Profile
                </h2>
            </div>
            <div className="w-3/4 lg:w-1/2 mx-auto gap-5 border border-zinc-600 rounded-lg bg-gray-50 divide-y-2 divide-neutral-400 px-2">
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
            <div className='w-3/4 lg:w-1/2 mx-auto mt-5 gap-4 flex justify-between lg:justify-end'>
                <Link href="/" >
                    <button className='border border-zinc-600 rounded-lg bg-gray-200 px-4 py-2 text-neutral-700'>
                        Cancel
                    </button>
                </Link>
                <button className='border border-zinc-600 rounded-lg bg-green-700 px-4 py-2 text-neutral-200'>
                    Save Changes
                </button>
            </div>
        </main>
    )
}
