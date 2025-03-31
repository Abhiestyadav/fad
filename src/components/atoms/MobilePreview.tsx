"use client";

import { useState } from "react";
import { Heart, Camera, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function MobilePreview() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="relative w-[320px] h-[640px] rounded-[40px] border-[14px] border-gray-700 overflow-hidden shadow-2xl bg-white">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-500 flex items-center justify-between px-6">
                <div className="text-xs text-gray-800">9:41</div>
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-2 bg-gray-800 rounded-sm"></div>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-10 h-full bg-white text-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full py-1 pl-1 pr-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-profile.jpg" alt="Alicia Koch" />
                            <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Alicia Koch</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs"
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
                        variant="outline"
                        className="h-7 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs"
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
                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">Age</div>
                            <div className="text-xl font-bold">28</div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 mt-2">
                            <div className="text-xs text-gray-500 mb-1">Location</div>
                            <div className="text-xl font-bold">San Francisco, CA</div>
                        </div>
                    </div>
                )}

                {/* Matches Section */}
                {activeTab === "matches" && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-profile-2.jpg" alt="John Doe" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">John Doe</span>
                            </div>
                            <Button size="sm" variant="outline" className="mt-2 w-full">
                                <Heart className="h-4 w-4 mr-1" />
                                Like
                            </Button>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-profile-3.jpg" alt="Emily Smith" />
                                    <AvatarFallback>ES</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Emily Smith</span>
                            </div>
                            <Button size="sm" variant="outline" className="mt-2 w-full">
                                <Heart className="h-4 w-4 mr-1" />
                                Like
                            </Button>
                        </div>
                    </div>
                )}

                {/* Messages Section */}
                {activeTab === "messages" && (
                    <div className="bg-gray-100 rounded-lg p-3 mb-4">
                        <div className="text-xs text-gray-500 mb-2">Recent Conversations</div>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-profile-2.jpg" alt="John Doe" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-sm">John Doe</div>
                                <div className="text-xs text-gray-500">Hey, how&rsquo;s it going?</div>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-profile-3.jpg" alt="Emily Smith" />
                                <AvatarFallback>ES</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-sm">Emily Smith</div>
                                <div className="text-xs text-gray-500">Let&rsquo;s meet this weekend!</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}