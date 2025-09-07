"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()

  const handleAuth = ()=>{
    router.push("/authflow")
  }
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
        <Button onClick={handleAuth}>go to login</Button>
    </div>
  )
}

export default page
