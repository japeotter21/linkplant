"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Snackbar, Alert } from '@mui/material';
import Image from 'next/image'
import profile from '../assets/unnamed.jpg'
import axios from 'axios'
export default function Config() {
    const [login, setLogin] = useState(false)
    const [warning, setWarning] = useState('')
    const router = useRouter()
    function TryLogin(formData: any) {
        const username = formData.target[0].value
        const pw = formData.target[1].value
        
        axios.post('/api/edit', {data:btoa(username + ':' + pw)})
        .then(res=>{
            axios.defaults.headers.common[`Authorization`] = res.data.data
            router.push('/config')
        })
        .catch(err=>{
            setWarning(err.message)
        })
    }

    return (
        <main className="min-h-screen grid place-items-center">
            <div className="grid place-items-center h-full w-full">
                <div className='border border-black w-1/3 bg-gray-50 rounded-lg flex flex-col items-center justify-center gap-4 h-[34vh]'>
                    <p className='text-3xl mb-4'>Login</p>
                    <form id="newsite" className=' flex flex-col items-center gap-3 '
                        onSubmit={(e)=>{e.preventDefault()
                        TryLogin(e)}}
                    >
                        <input type='text' id="username" name="username"
                            required
                            className='border border-gray-300 bg-inherit p-2 rounded-md'
                            placeholder='Username'
                            
                        />
                        <input type='password' id="userpassword" name="userpassword"
                            required
                            className='border border-gray-300 bg-inherit p-2 rounded-md'
                            placeholder='Password'
                            
                        />
                        <button type="submit"
                            className='border border-zinc-600 rounded-lg bg-[#f5b504] bg-opacity-80 hover:bg-opacity-60 hover:scale-105 px-5 py-1 transition delay-100 duration-500
                            mx-auto shadow-[3px_3px_#3d3d3d] w-full'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Snackbar open={warning !== ''} onClose={()=>setWarning('')} autoHideDuration={3000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity='error'>{warning}</Alert>
            </Snackbar>
        </main>
    )
}
