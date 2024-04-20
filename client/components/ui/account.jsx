'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import Settings from '@/assets/settings.svg';
import PostsCard from '@/components/ui/posts-card';
import UserPFP from '@/components/ui/user-pfp';

export default function Account({toggle}) {

    const handleUsernameClick = () => {
        console.log("@placeholderat clicked"); {/* placeholder for further functionality */}

    };

    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-background">
            <div className="flex items-center justify-center mt-10">

                {/* avatar on the left */}
                <UserPFP className = "responsive-avatar"/>
                
                {/* settings button */}
                <div className="-mt-[-100px] ml-[-30px] z-10">
                    <Button variant="outline" className="bg-primary border-secondary rounded-full p-1">
                        <Settings onClick={toggle} fill="#ffff" width={30} height={30} />
                    </Button>
                </div>

                {/* text on the right */}
                <div className="flex flex-col ml-20">
                    <h1 className="text-5xl text-text font-bold mb-2">Placeholder Name</h1>
                    <h2 className="text-xl text-text">
                        <a href="#" onClick={handleUsernameClick} className="cursor-pointer hover:underline">@placeholderat</a>
                    </h2>
                </div>
            </div>

            <div className="w-3/5 mx-auto border-t border-grey-700 m-10"></div>

            <div className="flex flex-col items-center mt-5 mb-5">
                <h1 className="text-2xl text-text font-bold mb-1">Your Content</h1>
                <div className="w-3/5 mx-auto border-t-2 border-secondary"></div>
            </div>

            <br />

            {/* example cards */}
            <PostsCard />
            <PostsCard />
        </main>
    );
}