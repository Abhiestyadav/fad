import React from 'react'
import { Button } from '@/components/ui/button'
import MobilePreview from "@/components/atoms/MobilePreview"
function HearoSection() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center  text-black overflow-hidden">      
            <div className="container px-4 py-12 md:py-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sit maxime asperiores fuga nulla odit!
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Button size="lg" variant="secondary" className="rounded-md bg-zinc-100 text-black hover:bg-zinc-200">
                                get started 
                            </Button>
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