import { SiPatreon, SiTiktok, SiYoutube } from 'react-icons/si'
import Image from 'next/image'
import profile from './assets/unnamed.jpg'
import Link from 'next/link'
export default function Home() {
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
        
        <a
          href="https://www.youtube.com/channel/UCKzFivbVW4htLbnCP234VsQ"
          className="group flex gap-3 lg:grid lg:grid-cols-3 justify-between items-center w-full rounded-3xl border px-5 py-3 transition-colors bg-gray-300 border-zinc-800 dark:border-neutral-700 dark:bg-neutral-800 bg-opacity-40"
          target="_blank"
          rel="noopener noreferrer"
        >
            <SiYoutube size={25} />
          <h2 className={`text-2xl font-semibold`}>
            Youtube
            {/* <span className="inline-block transition-transform group-translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`text-sm opacity-50 lg:text-right`}>
            @tatsuyoshiguitar
          </p>
        </a>

        <a
          href="https://www.tiktok.com/@tatsuyoshiguitar"
          className="group flex gap-3 lg:grid lg:grid-cols-3 justify-between items-center w-full rounded-3xl border px-5 py-3 transition-colors bg-gray-300 border-zinc-800 dark:border-neutral-700 dark:bg-neutral-800 bg-opacity-40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok />
          <h2 className={`text-2xl font-semibold`}>
            Tik Tok
            {/* <span className="inline-block transition-transform group-translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`text-sm opacity-50 lg:text-right`}>
            @tatsuyoshiguitar
          </p>
        </a>

        <a
          href="https://www.patreon.com/tatsuyoshi"
          className="group flex gap-3 lg:grid lg:grid-cols-3 justify-between items-center w-full rounded-3xl border px-5 py-3 transition-colors bg-gray-300 border-zinc-800 dark:border-neutral-700 dark:bg-neutral-800 bg-opacity-40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPatreon />
          <h2 className={`text-2xl font-semibold`}>
            Patreon
          </h2>
          <p className={`text-sm opacity-50 lg:text-right`}>
            @tatsuyoshi
          </p>
        </a>
        <Link href="/config">Config</Link>
      </div>
    </main>
  )
}
