"use client";
import React, { useState, useEffect } from 'react'
import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import Image from 'next/image'
import profile from './assets/unnamed.jpg'
import Link from 'next/link'
import axios from 'axios'
export default function Home() {
  const [sites, setSites] = useState<Array<{
    id: number,
    site: string,
    profile: string,
    description: string
    }>
  >([])

  useEffect(()=>{
      axios.get('/api/sites')
      .then(res=>{
          setSites(res.data.documents)
      })
  },[])


  const Icons: {icon: any}[] = [
      {
          icon: <SiYoutube />
      },
      {
          icon: <SiTiktok />
      },
      {
          icon: <SiPatreon />
      }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center pt-12 gap-4">
      <div className="items-center text-sm mb-5">
          <Image src={profile} alt="tatsuyoshi" className='rounded-3xl mx-auto mb-4'
            width={80}
            height={80}
          />
          <h2 className={`text-md font-semibold text-center px-10`}>
              Guitar riffs, beats, and occasionally something worth watching
          </h2>
      </div>

      <div className="sm:w-max lg:w-1/2 flex flex-col text-center items-center gap-5">
        { sites.map((item,id)=> (
            <a
              href={`http://www.${item.site}${item.profile}`}
              className="group flex gap-3 lg:grid lg:grid-cols-3 justify-between items-center w-full rounded-3xl border px-5 py-3 transition-colors bg-gray-50 border-zinc-800 dark:border-neutral-700 dark:bg-neutral-800 "
              target="_blank"
              rel="noopener noreferrer"
            >
                {item.site.includes('youtube') ?
                  <>{Icons[0].icon}</>
                : item.site.includes('tiktok') ?
                  <>{Icons[1].icon}</>
                :
                  <>{Icons[2].icon}</>
                }
              <h2 className={`text-xl font-semibold`}>
                {item.site.split('.com')[0].charAt(0).toUpperCase()}
                {item.site.split('.com')[0].substring(1)}
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
        <Link href="/config">
            <button type="submit" className='border border-zinc-600 rounded-lg bg-[#f5b504] hover:bg-opacity-60 px-5 py-1 mt-3 flex items-center mx-auto shadow-[3px_3px_#3d3d3d]'>
                Edit Profile
            </button>
        </Link>
      </div>
    </main>
  )
}
