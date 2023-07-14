"use client";
import React, { useState, useEffect } from 'react'
import { SiPatreon, SiTiktok, SiYoutube, SiTwitch, SiInstagram, SiTwitter } from 'react-icons/si'
import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import Image from 'next/image'
import profile from './assets/unnamed.jpg'
import Link from 'next/link'
import axios from 'axios'

export default function Home() {
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
const [showPw, setShowPw] = useState(false)
const [pw, setPw] = useState('')
const [allowEdit, setAllowEdit] = useState(false)

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

  useEffect(()=>{
    if(allowEdit)
    {
      sessionStorage.setItem('pw','1')
      setTimeout(()=>{
          setAllowEdit(false)
      },2000)
    }
    if(!allowEdit)
    {
      sessionStorage.removeItem('pw')
    }
  },[allowEdit])

  function TryPw() {
    axios.post('/api/edit',{data:pw})
    .then(res=>{
      setAllowEdit(true)
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      { loading ?
        <>
          <div className="items-center text-sm mb-5 mt-10">
              <div className="animate-pulse flex flex-col items-center mt-2">
                  <div className="h-[80px] bg-gray-500 rounded-3xl w-[80px] mb-4"></div>
                  <div className="h-5 bg-gray-500 rounded-full w-48 mb-4"></div>
              </div>
          </div>
          <div className="animate-pulse w-full flex flex-col items-center gap-5">
              <div className="h-10 rounded-full bg-gray-500 w-1/2"></div>
              <div className="h-10 rounded-full bg-gray-500 w-1/2"></div>
              <div className="h-10 rounded-full bg-gray-500 w-1/2"></div>
          </div>
        </>
      :
      <>
        <button onClick={()=>setShowPw(true)} className='h-[20px] w-[25px]'></button>
        <div className="items-center text-sm mb-5 mt-4">
            <Image src={profile} alt="tatsuyoshi" className='rounded-3xl mx-auto mb-4'
              width={80}
              height={80}
            />
            <h2 className={`text-md font-semibold text-center px-10`}>
                {user.bio}
            </h2>
        </div>
        <div className="sm:w-max lg:w-1/2 flex flex-col text-center items-center gap-5">
          { sites.map((item,id)=> (
              <a
                key={id}
                href={`http://www.${item.site}${item.profile}`}
                className="group flex gap-3 lg:grid lg:grid-cols-3 justify-between items-center w-full rounded-3xl border px-5 py-3 transition-colors bg-gray-50 border-zinc-800 dark:border-neutral-700 dark:bg-neutral-800 "
                target="_blank"
                rel="noopener noreferrer"
              >
                  {item.site.includes('youtube') ?
                    <SiYoutube />
                  : item.site.includes('tiktok') ?
                    <SiTiktok />
                  : item.site.includes('patreon') ?
                    <SiPatreon />
                  : item.site.includes('twitch') ?
                    <SiTwitch />
                  : item.site.includes('instagram') ?
                    <SiInstagram />
                  :
                    <SiTwitter />
                  }
                <h2 className={`text-xl font-semibold`}>
                  {item.site.split('.com')[0].charAt(0).toUpperCase()}
                  {item.site.includes('twitch') ? item.site.split('.tv')[0].substring(1) : item.site.split('.com')[0].substring(1)}
                  {/* <span className="inline-block transition-transform group-translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span> */}
                </h2>
                <p className={`text-sm opacity-50 lg:text-right`}>
                  {item.description}
                </p>
              </a>
            ))
          }
          <Link href="/login">
              <button className='border border-zinc-600 rounded-lg bg-[#f5b504] hover:bg-opacity-60 hover:scale-105 transition delay-100 duration-300
                px-5 py-1 mt-3 flex items-center mx-auto shadow-[3px_3px_#3d3d3d]'
              >
                  Edit Profile
              </button>
          </Link>
          
        </div>
        <Dialog open={showPw} onClose={()=>setShowPw(false)}>
          <DialogContent>
              <form onSubmit={(e)=>{e.preventDefault()
                TryPw()}}
              >
                <input type='password' className='border-gray-200' value={pw} onChange={(e)=>setPw(e.target.value)} />
              </form>
          </DialogContent>
        </Dialog>
      </>
      }
    </main>
  )
}
