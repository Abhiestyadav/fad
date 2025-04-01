"use client";

import { useState } from "react";
import { Heart, Camera, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import profileimage from "@/assets/profileImage.jpeg";
export default function MobilePreview() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="relative w-[320px] h-[640px] rounded-[40px] border-[14px] border-black overflow-hidden shadow-2xl bg-white">
            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-400 flex items-center justify-between px-6">
                <div className="text-xs text-white">9:41</div>
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-2 bg-red-700 rounded-sm"></div>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-10 h-full bg-pink-200 text-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-purple-400 rounded-full py-1 pl-1 pr-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-profile.jpg" alt="Alicia Koch" />
                            <AvatarFallback className="bg-amber-300">AK</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-white">Alicia Koch</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7 rounded-md bg-green-300 text-gray-800 hover:bg-gray-200 text-xs"
                        >
                            <Camera className="h-4 w-4 mr-1" />
                            Take Photo
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Discover</h2>
                    <Button
                        size="sm"
                        className="h-7  bg-purple-300 text-gray-800 hover:bg-red-300 text-xs"
                    >
                        <Settings className="h-4 w-4 mr-1" />
                        Settings
                    </Button>
                </div>

                <Tabs defaultValue="profile" className="mb-4">
                    <TabsList className="bg-gray-100 p-0.5">
                        <TabsTrigger
                            value="profile"
                            className={cn(
                                "rounded-md text-xs py-1.5 px-3",
                                activeTab === "profile" ? "bg-gray-200 text-gray-800" : "text-gray-500"
                            )}
                            onClick={() => setActiveTab("profile")}
                        >
                            Profile
                        </TabsTrigger>
                        <TabsTrigger
                            value="matches"
                            className={cn(
                                "rounded-md text-xs py-1.5 px-3",
                                activeTab === "matches" ? "bg-gray-200 text-gray-800" : "text-gray-500"
                            )}
                            onClick={() => setActiveTab("matches")}
                        >
                            Matches
                        </TabsTrigger>
                        <TabsTrigger
                            value="messages"
                            className={cn(
                                "rounded-md text-xs py-1.5 px-3",
                                activeTab === "messages" ? "bg-gray-200 text-gray-800" : "text-gray-500"
                            )}
                            onClick={() => setActiveTab("messages")}
                        >
                            Messages
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Profile Section */}
                {activeTab === "profile" && (
                    <div className="mb-4">
                        <div className="aspect-square bg-gray-300 rounded-lg mb-2">
                            <Image
                                src={profileimage}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-lg"
                                width={320}
                                height={320}
                            />
                        </div>

                        <div className="bg-red-500 rounded-lg p-3">
                            <div className="text-xs text-white mb-1">Age</div>
                            <div className="text-xl font-bold text-white">28</div>
                        </div>

                        <div className="bg-red-500 rounded-lg p-3 mt-2">
                            <div className="text-xs text-white mb-1">Location</div>
                            <div className="text-xl font-bold text-white">Mumbai, Ind</div>
                        </div>
                    </div>
                )}

                {/* Matches Section */}
                {activeTab === "matches" && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-cyan-500 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-profile-2.jpg" alt="John Doe" />
                                    <AvatarFallback className="bg-green-300">JD</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-white">John Doe</span>
                            </div>
                            <Button size="sm" variant="outline" className="mt-2 w-full">
                                <Heart className="h-4 w-4 mr-1 text-[#D41A5B]"  />
                                Like
                            </Button>
                        </div>

                        <div className="bg-cyan-500 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8  ">
                                    <AvatarImage src="/placeholder-profile-3.jpg" alt="Emily Smith" />
                                    <AvatarFallback className="bg-green-300">ES</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-white">Emily Smith</span>
                            </div>
                            <Button size="sm" variant="outline" className="mt-2 w-full">
                                <Heart className="h-4 w-4 mr-1 text-[#D41A5B]" />
                                Like
                            </Button>
                        </div>
                    </div>
                )}

                {/* Messages Section */}
                {activeTab === "messages" && (
                    <div className="bg-emerald-400 rounded-lg p-3 mb-4 space-y-1">
                        <div className="text-sm text-black mb-2">Recent Conversations</div>
                        <div className="flex items-center gap-2 bg-amber-200 rounded-lg p-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-profile-2.jpg" alt="John Doe" />
                                <AvatarFallback className="bg-amber-300">JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-sm text-black">John Doe</div>
                                <div className="text-xs text-black">Hey, how&rsquo;s it going?</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-amber-200 rounded-lg p-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-profile-3.jpg" alt="Emily Smith" />
                                <AvatarFallback className="bg-amber-300">ES</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-sm text-black">Emily Smith</div>
                                <div className="text-xs text-black">Let&rsquo;s meet this weekend!</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}