import { SignIn, ClerkLoaded,ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='h-full lg:flex flex-col items-center justify-center px-4'>
            <div className='text-center space-y-4 pt-16'>
                <h1 className="font-bold text-3xl text:[#2e2a47]">Welcome Back!</h1>
                <p className="text-base text-[7e8ca0]">Login or Create account to get back to your dashborad!</p>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <SignIn path='/sign-in'/>
            </div>
        </div>
    </div>
  )
}