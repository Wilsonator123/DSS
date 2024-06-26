'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Settings from '@/assets/settings.svg';
import UserPFP from '@/components/ui/user-pfp';
import { useRouter } from 'next/navigation';
import { usePosts } from '@/hooks/usePosts';
import PostList from "@/components/ui/post-list";
import { useUserStore } from '@/context/UserContext';

export default function Account({ user, toggle }) {
    const router = useRouter();
    const [posts, setPosts] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const currentUser = useUserStore(state => state.user);

    const handleUsernameClick = () => {
        router.push(`/account/${user.username}`);
        console.log("@ clicked"); {/* placeholder for further functionality */ }
    };

    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-background">
            <div className="flex items-center justify-center mt-10">

                {/* avatar on the left */}
                <UserPFP containerClassName="large-avatar" identiconClassName="scale-50" user={user.username} />

                {/* conditional settings button */}
                {user.username === currentUser?.username && (
                <div className="-mt-[-100px] ml-[-30px] z-10">
                    <Button variant="outline" className="bg-primary border-secondary rounded-full p-1">
                        <Settings onClick={toggle} fill="#ffff" width={30} height={30} />
                    </Button>
                </div>
                )};

                {/* text on the right */}
                <div className="flex flex-col ml-20">
                    <h1 className="text-5xl text-text font-bold mb-2">{user?.fname} {user?.lname}</h1>
                    <h2 className="text-xl text-text">
                        <a href="#" onClick={handleUsernameClick} className="cursor-pointer hover:underline">@{user?.username}</a>
                    </h2>
                </div>
            </div>

            <div className="w-3/5 mx-auto border-t border-grey-700 m-10"></div>

            <div className="flex flex-col items-center mt-5 mb-5">
                <h1 className="text-2xl text-text font-bold mb-1">Your Content</h1>
                <div className="w-3/5 mx-auto border-t-2 border-secondary"></div>
            </div>

            <PostList className="w-3/5 mx-auto" args={{ 'created_by': user.userid }} />

        </main>
    );
}