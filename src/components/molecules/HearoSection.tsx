import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MobilePreview from "@/components/atoms/MobilePreview"
function HearoSection() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center  text-black overflow-hidden">      
            <div className="container px-4 py-12 md:py-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        
                        <h1 className="border bg-amber-50 w-fit rounded-2xl  capitalize px-5 text-xl md:text-xl lg:text-xl font-bold  tracking-tight">  
                            coming soon ...
                        </h1>
                        <h1 className="text-4xl capitalize md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#000000] to-[#db0ca7] text-transparent bg-clip-text">
                            Find a Date
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Looking for the perfect date?
                        </h1>
                        <p className="text-lg text-black">
                            We&rsquo;re here to connect everyone with their ideal match! Whether you&rsquo;re seeking romance, companionship, or a fun experience, we&rsquo;ve got you covered. Your perfect date is just a message away!&rdquo;😉
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Link href="https://docs.google.com/forms/d/1s448MDY0eMSzOZNWaxBFLGz2m7wTXr_4aegRlxC5iWY/viewform?edit_requested=true&pli=1">
                            <Button size="lg" variant="secondary" className="rounded-md capitalize bg-[#FF7F50] text-white hover:bg-[#FF5C8A]">
                                get started 
                            </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <MobilePreview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HearoSection