"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUp, Check } from "lucide-react"
import { useInView } from "react-intersection-observer"

const MotionDiv = motion.div

export function DatingSiteGrid() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {/* Create a profile */}
            <MotionDiv className="bg-[#f8f5ed] p-8 rounded-3xl flex flex-col justify-between h-[400px]"
                variants={itemVariants}
            >
                <div>
                    <h2 className="text-4xl font-bold">
                        Create your
                        <br />
                        dating profile
                        <br />
                        today
                    </h2>
                    <p className="text-4xl font-bold text-indigo-600 mt-2">quicker.</p>
                </div>
                <div>
                    <button className="bg-[#ffd166] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#ffda85] transition-colors">
                        Create Profile <ArrowRight size={16} />
                    </button>
                </div>
            </MotionDiv>

            {/* Match faster with AI */}
            <MotionDiv
                className="bg-[#7158e2] text-white p-8 rounded-3xl flex flex-col items-center justify-center col-span-1 md:col-span-2 h-[400px]"
                variants={itemVariants}
            >
                <h2 className="text-5xl font-bold mb-2">
                    Match <span className="text-[#ffd166]">10x</span>
                </h2>
                <p className="text-5xl font-bold italic mb-6">Faster with AI</p>
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#ffd166">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                    ))}
                </div>
                <p className="text-xl">Over 4,000 5-star reviews</p>
            </MotionDiv>

            {/* Schedule a date */}
            <MotionDiv className="bg-[#e6e1ff] p-6 rounded-3xl flex flex-col h-[500px]" variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">
                    Schedule your
                    <br />
                    next date.
                </h2>
                <div className="bg-white rounded-xl p-4 mt-2">
                    <p className="font-medium mb-2">Best Time to Meet</p>
                    <div className="flex gap-2 mb-4">
                        {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                            <div
                                key={day}
                                className={`rounded-full px-3 py-1 text-sm ${i === 0 ? "bg-[#ffebee] text-[#ff4d6a]" : ""}`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    <p className="text-green-600 text-sm mb-2">Most Active</p>
                    <div className="flex items-end justify-between h-24 mb-2">
                        {[30, 45, 80, 65, 40].map((height, i) => (
                            <div key={i} className="bg-[#7158e2] rounded-full w-8" style={{ height: `${height}%` }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-gray-500 text-xs">
                        <span>12a</span>
                        <span>3a</span>
                        <span>6a</span>
                        <span>9a</span>
                        <span>12p</span>
                    </div>
                </div>
                <div className="mt-auto">
                    <p className="text-xl font-medium">
                        Optimize your date timings to meet at the perfect time for your schedule.
                    </p>
                </div>
            </MotionDiv>

            {/* Manage multiple connections */}
            <MotionDiv className=" bg-fuchsia-400 p-6 rounded-3xl flex flex-col justify-center" variants={itemVariants}>
                <div className="flex gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" />
                                <path
                                    d="M12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded-full">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.34 4.49 19 2.56 19C2.22 19 1.89 18.95 1.58 18.88C4.65 20.04 7.97 20.5 11.01 20.05C14.39 19.58 16.5 17.14 16.5 14.29C16.5 14.16 16.49 14.02 16.48 13.89C17.72 13.79 18.9 13.18 19.39 12.17C19.83 12.66 20.24 13.15 20.46 13.69C21.42 13.69 22.17 13.28 22.46 12.75L22.46 12.75L22.46 12.75L22.46 12.75V12.75H22.46V12.75Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <Check className="text-green-600" />
                    <p className="text-lg font-medium">
                        Manage multiple connections at once.
                    </p>
                </div>
            </MotionDiv>


            <MotionDiv className=" bg-blue-500 p-6 rounded-3xl flex flex-col justify-center" variants={itemVariants}>
                <div className="flex gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" />
                                <path
                                    d="M12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded-full">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.34 4.49 19 2.56 19C2.22 19 1.88 18.98 1.54 18.96C3.44 20.15 5.7 20.83 8 20.83C16 20.83 20.33 14.25 20.33 8.55C20.33 8.37 20.33 8.19 20.32 8.01C21.16 7.41 21.88 6.66 22.46 5.8V6Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mt-4">
                    Manage
                    <br />
                    multiple
                    <br />
                    matches
                    <br />
                    and connections.
                </h2>
            </MotionDiv>

            <MotionDiv
                className="bg-lime-200 col-span-1 md:col-span-1 p-6 rounded-3xl flex flex-col justify-center"
                variants={itemVariants}
            >
                <h2 className="text-6xl font-bold flex items-center gap-2">
                    <span>〉</span>56%
                </h2>
                <p className="text-2xl font-medium mt-2">
                    faster matchmaking
                    <br />
                    results
                </p>
                <div className="flex mt-8 gap-2">
                    {[1, 2, 3].map((avatar) => (
                        <div
                            key={avatar}
                            className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden -ml-2 first:ml-0 border-2 border-white"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                    stroke="#666"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                    stroke="#666"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </MotionDiv>



            <MotionDiv className="border-indigo-500 p-6 rounded-3xl bg-slate-200" variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6">
                    Keep your
                    <br />
                    interaction
                    <br />
                    consistent
                    <br />
                    with matches.
                </h2>
                <div className="bg-[#7158e2] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-4">
                    <span>April 2025</span>
                    <span className="mx-2">|</span>
                    <span>Week 1</span>
                </div>
                <div className="flex gap-4 mt-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-8 h-8 bg-[#7158e2] rounded-full flex items-center justify-center">
                            <Check size={16} color="white" />
                        </div>
                    ))}
                </div>
            </MotionDiv>


            <MotionDiv
                className="bg-[#ffd166] p-6 rounded-3xl h-[400px] flex flex-col justify-between"
                variants={itemVariants}
            >
                <h2 className="text-4xl font-bold">
                    Write your
                    <br />
                    messages
                    <br />
                    with AI assistance.
                </h2>
                <div className="mt-4">
                    <div className="bg-white rounded-xl p-4 mb-4">
                        <p className="text-sm text-gray-700">Can you help me come up with a charming opening message?</p>
                        <div className="flex justify-end">
                            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                        stroke="#666"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                        stroke="#666"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 relative">
                        <div className="absolute -top-2 right-8">
                            <div className="bg-[#7158e2] rounded-full p-2">
                                <ArrowUp size={16} color="white" />
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="bg-[#7158e2] text-white rounded-full p-1 mt-1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <p className="text-sm">Here’s a great first message to spark a conversation...</p>
                        </div>
                    </div>
                </div>
            </MotionDiv>


        </motion.div>
    )
}
