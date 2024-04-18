import React from 'react'

import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/app/[lang]/_libs/authentication";
import LoginForm from './LoginForm';

export default async function LoginCard({ dictionary }: { dictionary: any }) {
    return (
        <div className='p-8 rounded-md shadow-xl bg-gray-50'>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <form action={async (formData) => {
                        'use server';
                        await login(formData);
                        redirect('');
                    }}>
                        <LoginForm dictionary={dictionary} />
                    </form>
                </div>
            </div>
        </div>
    )
}
