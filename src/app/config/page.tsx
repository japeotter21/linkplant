"use client";
import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import { BsPencil, BsTrash } from 'react-icons/bs'
import Link from 'next/link';
import Image from 'next/image'
import profile from '../assets/unnamed.jpg'
import axios from 'axios'
export default function Config() {

    type Site = {
        id: number,
        site: string,
        profile: string,
        description: string
    }
    
    type User = {
      id: number,
      user: string,
      bio: string
    }
    
    const [sites, setSites] = useState<Array<Site>>([])
    const [user, setUser] = useState({} as User)
    const [loading, setLoading] = useState(true)
    const [upload, setUpload] = useState(false)

    useEffect(()=>{
        const endpoints = ['/api/user', '/api/sites']
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(
            axios.spread(({data: user}, {data: sites}) => {
                setUser(user.documents[0])
                setSites(sites.documents)
                setLoading(false)
          })
        );
    },[])

    function EditPicture() {

    }

    const SiteCards = () => {
        return (
            <>
                { sites.map((item,id)=> (
                    <div className='py-4' key={id}>
                        <div className="flex justify-between items-start py-3 px-5">
                            {item.site.includes('youtube') ?
                                <SiYoutube style={{color:"#FF0000"}} size={50}/>
                            : item.site.includes('tiktok') ?
                                <SiTiktok style={{color:"#FF0050"}} size={42}/>
                            :
                                <SiPatreon style={{color:"#ff424d"}} size={40}/>
                            }
                            <div className='flex gap-2 items-start'>
                                {/* <button type="submit" className='border border-blue-500 bg-blue-50 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#242424]'>
                                    <BsPencil style={{color:'#3b82f6'}} />
                                </button> */}
                                <button type="submit" className='border border-red-500 bg-red-50 hover:bg-red-200 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
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
                                    <option value="youtube.com/channel/">Youtube</option>
                                    <option value='tiktok.com/'>Tik Tok</option>
                                    <option value='instagram.com'>Instagram</option>
                                    <option value='patreon.com/'>Patreon</option>
                                    <option value='twitch.tv/'>Twitch</option>
                                    <option value='twitter.com/'>Twitter</option>
                                </select>
                            </div>
                            <div className='flex gap-2 items-start'>
                                <button type="submit" className='border border-red-500 bg-red-50 hover:bg-red-200 rounded-lg px-3 py-2 flex items-center mx-auto shadow-[0_0_1px_#3d3d3d]'>
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
                        <button className='border border-zinc-600 rounded-lg bg-[#f5b504] bg-opacity-80 hover:bg-opacity-60 px-5 py-1 mt-5 flex items-center mx-auto shadow-[3px_3px_#3d3d3d]'>
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
            { loading ? 
             <>
                <div className="items-center text-sm mb-5">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-[80px] bg-gray-500 rounded-3xl w-[80px] mb-4"></div>
                        <div className="h-10 rounded-lg bg-gray-500 w-1/2"></div>
                    </div>
                </div>
                <div className="animate-pulse w-full flex flex-col items-center gap-5">
                    <div className="h-72 rounded-lg bg-gray-500 w-1/2"></div>
                </div>
            </>
            :
            <>
                <div className="text-sm mb-5 w-max mx-auto relative">
                    <Image src={profile} alt="tatsuyoshi" className='rounded-3xl mx-auto'
                        width={80}
                        height={80}
                    />
                    <button className='absolute bottom-0 -right-2 border border-blue-500 hover:bg-blue-200 bg-blue-50 rounded-lg px-2 py-2 shadow-[0_0_1px_#242424]'
                        onClick={()=>setUpload(true)}
                    >
                        <BsPencil style={{color:'#3b82f6'}} />
                    </button>
                </div>
                <div className="text-sm mb-5 w-1/2 mx-auto relative">
                    <textarea id="bio" name="bio" placeholder='Add a bio here' className='border border-zinc-600 bg-gray-50 p-2 rounded-md w-full font-medium'
                        value={user.bio}
                    />
                </div>
                <div className="w-3/4 lg:w-1/2 mx-auto gap-5 border border-zinc-600 rounded-lg bg-gray-50 divide-y-2 divide-neutral-400 px-2">
                    <SiteCards />
                    <SiteForm />
                </div>
                <div className='w-3/4 lg:w-1/2 mx-auto mt-5 gap-4 flex justify-between lg:justify-end'>
                    <Link href="/" >
                        <button className='border border-zinc-600 rounded-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 text-neutral-700'>
                            Cancel
                        </button>
                    </Link>
                    <button className='border border-zinc-600 rounded-lg bg-green-700 hover:bg-green-600 px-4 py-2 text-neutral-200'>
                        Save Changes
                    </button>
                </div>
            </>
            }
            <Dialog open={upload} onClose={()=>setUpload(false)}>
                <DialogTitle>Edit Profile Picture</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <input type='file' id="profile" name="profile"
                            accept="image/png, image/jpeg"
                        />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </main>
    )
}
